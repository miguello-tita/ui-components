import React from 'react'
import css from './Col.module.css'

export const Col = (props) => {
  return <div className={css.col} {...props} />
}
