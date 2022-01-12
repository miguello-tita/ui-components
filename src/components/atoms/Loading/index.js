import React from 'react'
import css from './Loading.module.css'

export function Loading({ addClass }) {
  return (
    <div className={`${css.contloading}`}>
      <p>Cargando </p>
      <div
        tabIndex='0'
        aria-label='Cargando contenido'
        className={`${css.loading} ${addClass}`}
      >
        <div className={css['loading-item']} />
        <div className={css['loading-item']} />
        <div className={css['loading-item']} />
      </div>
    </div>
  )
}
