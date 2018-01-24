import React from 'react'
import Card from '../molecules/Card'

const Articles = ({ items }) => {
  let resItems = items.map((item, i) => {
    return <li key={`itemKey-${i}`} className="o-articles__item"><Card {...item} /></li>
  })
  return (
    <div className="o-articles">
      <ul className="o-articles__list o-articles__list--grid3">{resItems}</ul>
    </div>
  )
}

Articles.propTypes = {}

export default Articles
