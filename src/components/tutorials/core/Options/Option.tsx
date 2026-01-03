const Option = ({ title, description, imageUrl, url }: OptionProps) => {
  return (
    <a href={url} style={{ textDecoration: "none" }}>
      <figure className='tut-option'>
        <figcaption className='tut-option-text'>
          <h2>{title}</h2>
          <p>{description}</p>
        </figcaption>
        <div className='tut-option-image'>
          <img src={imageUrl} alt={title} />
          <div className="tut-option-overlay"></div>
        </div>
      </figure>
    </a>
  )
}

export default Option