import PropTypes from 'prop-types'
import React, { createRef, Fragment, useEffect, useState } from 'react'
import { Button } from '../../atoms/Button/index'
import { Icon } from '../../atoms/icon/index'
import css from './AsideNav.module.css'

export const AsideNav = ({ children, dataButton, content, location, closeIcon }) => {
  const [getStateAside, setStateAside] = useState(false)
  const [getLocationAside, setLocationAside] = useState('')
  const refModal = createRef()
  const refOverlay = createRef()
  useEffect(() => {
    const $aside = refModal.current
    function locationAside() {
      if (location === 'right') {
        setLocationAside('aside--active--right')
        $aside.classList.add(css['position-right'])
      } else {
        setLocationAside('aside--active--left')
        $aside.classList.add(css['position-left'])
      }
    }
    locationAside()
  })
  function stateAside(elementModal, elementOverlay) {
    if (getStateAside) {
      elementModal.classList.remove(css[getLocationAside])
      elementOverlay.classList.remove(css['overlay--active'])
      setStateAside(false)
    } else {
      elementModal.classList.add(css[getLocationAside])
      elementOverlay.classList.add(css['overlay--active'])
      setStateAside(true)
    }
  }
  function handleAside() {
    const $aside = refModal.current
    const $overlay = refOverlay.current
    stateAside($aside, $overlay)
  }
  return (
    <Fragment>
      <div
        ref={refOverlay}
        className={`${css['c-overlay']} ui-overlay`}
        id='overlay'
        onClick={handleAside}
      />
      <div ref={refModal} className={`${css['c-side']} ui-aside`} id='aside'>
        {closeIcon &&
          <Icon
            nameIcon='close'
            onClick={handleAside}
            style={{ cursor: 'pointer' }}
          />
        }
        {children || (
          <Fragment>
            <h2>{content.title}</h2>
            <ul className={`${css['c-side-nav']} ui-aside-nav`}>
              {content.list.map((item, index) => (
                <li
                  className={`${css['c-side-nav-item']} ui-aside-nav-item`}
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>
          </Fragment>
        )}
      </div>
      {dataButton.type === 'icon' ? (
        <Icon
          nameIcon={dataButton.label}
          onClick={handleAside}
          addClass={dataButton.addClass}
          style={{ cursor: 'pointer' }}
        />
      ) : (
        <Button
          label={dataButton.label}
          styled={dataButton.styled}
          addClass={dataButton.addClass}
          onClick={handleAside}
        />
      )}
    </Fragment>
  )
}

AsideNav.propTypes = {
  children: PropTypes.element,
  dataButton: PropTypes.object,
  content: PropTypes.object,
  location: PropTypes.string
}

AsideNav.defaultProps = {
  dataButton: {
    type: 'button',
    label: 'Side nav',
    addClass: '',
    styled: 'primary'
  },
  content: {
    title: 'Aside Nav',
    list: ['Options']
  },
  location: 'left'
}
