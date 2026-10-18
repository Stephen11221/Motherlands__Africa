function SectionHeading({ eyebrow, title, note, link, href }) {
  return (
    <div className="section-heading">
      <div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>
      <div className="heading-end">
        <p>{note}</p>
        {link && <a className="text-link" href={href}>{link} <span>↗</span></a>}
      </div>
    </div>
  )
}

export default SectionHeading
