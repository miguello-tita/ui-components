import PropTypes from 'prop-types'
import React from 'react'
import css from './Text.module.css'

export const Text = ({ type, children, addClass, ...args }) => {
  const DefaultValue = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subtitle: 'h6',
    caption: 'span',
    p: 'p',
    span: 'span'
  }

  const Component = DefaultValue[type]

  return (
    <Component
      className={`${css.Typography} ${addClass}`}
      type={type}
      {...args}
    >
      {children}
    </Component>
  )
}

Text.propTypes = {
  type: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle',
    'caption',
    'p',
    'span'
  ]),
  children: PropTypes.node,
  addClass: PropTypes.string
}

Text.defaultProps = {
  addClass: ''
}
