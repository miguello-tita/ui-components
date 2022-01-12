import PropTypes from 'prop-types'
import React from 'react'
import css from './Tooltip.module.css'

export const Tooltip = ({ children, label, addClass }) => {
  return (
    <div className={`${css.TooltipCont} ${addClass}`}>
      {children}
      <div className={css.TooltipItem}>{label}</div>
    </div>
  )
}

Tooltip.propTypes = {
  addClass: PropTypes.string
}

Tooltip.defaultProps = {
  addClass: ''
}
