import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import { Button } from '../../atoms/Button/index'
import css from './Card.module.css'

export const Card = ({ width, image, content, supportingText, buttons }) => {
  return (
    <div className={`${css['c-card']} ui-card`} style={{ width: width }}>
      {image.state ? (
        <figure className={`${css['c-card-image']} ui-card-img`}>
          <img src={image.url} alt={image.alt} />
        </figure>
      ) : (
        <></>
      )}
      <div className={`${css['c-card-container']} ui-card-container`}>
        <div className='c-card-container-title'>
          <h3>{content.title}</h3>
          <p className={`${css['u-text']} ui-text`}>{content.text}</p>
        </div>
        <div>
          <p className={`${css['u-text']} ui-text-two`}>{supportingText}</p>
        </div>
        {buttons.state ? (
          <div className='c-card-container-buttons'>
            <Button
              label={buttons.first.label}
              styled={buttons.first.theme}
              icon={buttons.first.icon}
            />
            <Button
              label={buttons.secundary.label}
              styled={buttons.secundary.theme}
              icon={buttons.secundary.icon}
            />
          </div>
        ) : (
          <Fragment />
        )}
      </div>
    </div>
  )
}

Card.propTypes = {
  width: PropTypes.string,
  image: PropTypes.object,
  content: PropTypes.object,
  supportingText: PropTypes.string,
  buttons: PropTypes.object
}

Card.defaultProps = {
  width: '100%',
  image: {
    state: false
  },
  content: {
    title: 'Card Title',
    text: 'Secondary Text'
  },
  buttons: {
    state: false
  }
}
