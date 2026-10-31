import { Link } from "react-router"
import { Page, Reveal, SplitText } from "/src/components/motion"
import Nav from "/src/components/Nav"
import Footer from "/src/components/Footer"
import Breadcrumbs from "/src/components/tutorials/Breadcrumbs"
import { plural, TRACKS } from "/src/components/tutorials/data"
import "/src/styles/tutorials.css"

const Tutorials = () => (
  <Page>
    <Nav />
    <main className="tut">
      <Breadcrumbs trail={[["Home", "/"], ["Tutorials"]]} />
      <h1 className="tut-title tut-title--ruled"><SplitText text="Get Started with ETS" onMount delay={0.7} /></h1>
      <div className="tut-options">
        {Object.values(TRACKS).map((T, i) => (
          <Reveal key={T.path} delay={0.9 + i * 0.12}>
            <Link to={T.path} className="tut-option">
              <div className="tut-option__img">
                <img src={T.img} alt="" />
                <span className="tut-option__icon"><i className={`ti ti-${T.icon}`} /></span>
              </div>
              <div className="tut-option__body">
                <h2>{T.label}</h2>
                <p>{T.desc}</p>
                <div className="tut-option__foot">
                  <span>{plural(T.tutorials.length, "tutorial")} · {plural(T.tutorials.reduce((a, x) => a + x.videos.length, 0), "video")}</span>
                  <span className="tut-option__more">View tutorials<i className="ti ti-arrow-right" /></span>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </main>
    <Footer />
  </Page>
)

export default Tutorials
