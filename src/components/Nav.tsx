import { useState, type ReactNode } from "react"
import { Link, useLocation } from "react-router"
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react"
import { ease } from "./easing"
import { LOGIN_URL, REGISTER_URL } from "./links"
import "/src/styles/nav.css"

const SECTIONS = [["features", "Features"], ["industries", "Industries"], ["benefits", "Benefits"]]

/** Section anchors scroll in place on the home page and route back to it elsewhere. */
const SectionLink = ({ id, className, onClick, children }: { id: string; className: string; onClick?: () => void; children: ReactNode }) =>
  useLocation().pathname === "/"
    ? <a href={`#${id}`} className={className} onClick={onClick}>{children}</a>
    : <Link to={`/#${id}`} className={className} onClick={onClick}>{children}</Link>

const Nav = () => {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, "change", y => {
    // hide while scrolling down past the hero, reveal on any scroll up
    setHidden(y > 200 && y > (scrollY.getPrevious() ?? 0) && !open)
  })
  const close = () => setOpen(false)

  return (
    <motion.div className="nav-wrap" animate={{ y: hidden ? -90 : 0 }} transition={{ duration: 0.45, ease }}>
      <nav className="nav">
        <Link to="/" className="nav__logo" aria-label="ETS home"><img src="/logos/ets.svg" alt="ETS" /></Link>
        <div className="nav__links">
          {SECTIONS.map(([id, label]) => <SectionLink key={id} id={id} className="nav__link">{label}</SectionLink>)}
          <Link to="/tutorials" className="nav__link">Tutorials</Link>
        </div>
        <div className="nav__actions">
          <a href={LOGIN_URL} target="_blank" rel="noreferrer" className="btn btn--subtle nav__signin">Sign In</a>
          <a href={REGISTER_URL} target="_blank" rel="noreferrer" className="btn btn--filled">Register</a>
        </div>
        <button className="nav__toggle" onClick={() => setOpen(o => !o)} aria-label="Menu" aria-expanded={open}>
          <i className={open ? "ti ti-x" : "ti ti-menu-2"} />
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            className="nav__menu"
            initial={{ opacity: 0, y: -12, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, y: -12, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.45, ease }}
          >
            {[...SECTIONS, ["tutorials", "Tutorials"]].map(([id, label], i) => (
              <motion.div key={id} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.05, duration: 0.4, ease }}>
                {id === "tutorials"
                  ? <Link to="/tutorials" className="nav__menu-link" onClick={close}>{label}<i className="ti ti-chevron-right" /></Link>
                  : <SectionLink id={id} className="nav__menu-link" onClick={close}>{label}<i className="ti ti-chevron-right" /></SectionLink>}
              </motion.div>
            ))}
            <div className="nav__menu-cta">
              <a href={LOGIN_URL} target="_blank" rel="noreferrer" className="btn btn--outline btn--md btn--full">Sign In</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Nav
