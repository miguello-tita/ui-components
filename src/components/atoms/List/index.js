import PropTypes from 'prop-types'
import React from 'react'
import css from './List.module.css'

export const List = ({ type, arrItems, addClass }) => {
  return (
    <ul
      aria-label='lista de elementos'
      type={type}
      className={`${css.ListCont} ${addClass}`}
    >
      {arrItems.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  )
}

List.prototypes = {
  type: PropTypes.string,
  arrItems: PropTypes.array
}

List.defaultProps = {
  type: 'disc'
}
