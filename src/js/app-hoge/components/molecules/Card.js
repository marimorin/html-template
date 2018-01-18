import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Card = ({ title, content, image, label, url, author, authorThumb, date}) => {
  let formattedDate = (() => {
    let s = date.split('-')
    return `${s[0]}年${s[0]}月${s[0]}日`
  })()
  return (
    <article className="m-card">
      <Link to={url} className="m-card__wrapper-link">
        <div className="m-card__image" style={{backgroundImage: image }}>
          <span className="m-card__label m-card__label--podcast">{label}</span>
        </div>
        <div className="m-card__body">
          <h3 className="m-card__title">{title}</h3>
          <p className="m-card__content">{content}</p>
          <div className="m-card__meta">
            <div className="m-card__thumb" style={{backgroundImage: authorThumb }}></div>
            <div className="m-card__author">{author}</div>
            <div className="m-card__date"><time dateTime={date}>{formattedDate}</time></div>
          </div>
        </div>
      </Link>
    </article>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string,
  label: PropTypes.string,
  url: PropTypes.string,
  author: PropTypes.string,
  authorThumb: PropTypes.string,
  date: PropTypes.string,
}

export default Card
