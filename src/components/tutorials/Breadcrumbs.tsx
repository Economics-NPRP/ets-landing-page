import { Fragment } from "react"
import { Link } from "react-router"

/** Home › … › current. The last crumb is plain text. */
const Breadcrumbs = ({ trail }: { trail: [label: string, to?: string][] }) => (
  <div className="crumbs">
    {trail.map(([label, to], i) => (
      <Fragment key={label}>
        {i > 0 && <i className="ti ti-chevron-right" />}
        {to ? <Link to={to}>{label}</Link> : <span>{label}</span>}
      </Fragment>
    ))}
  </div>
)

export default Breadcrumbs
