import React from 'react'
import css from './Panel.module.css'

export const TabPanel = (props) => {
  const { children, value, index, addClass, ...other } = props

  return (
    <div
      className={`${css.Panel} ${addClass}`}
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  )
}
