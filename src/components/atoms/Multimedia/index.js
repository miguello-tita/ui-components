import PropTypes from 'prop-types'
import React, { createRef, Fragment, useState } from 'react'
import { Icon } from '../icon/index'
import css from './Multimedia.module.css'

function Multimedia({ url, label, addClass }) {
  const [getStateBtnAudio, setStateBtnAudio] = useState(false)
  const [getIcon, setIcon] = useState('play_arrow')
  const refAudio = createRef()
  function validateStateBtn(element) {
    if (getStateBtnAudio) {
      setStateBtnAudio(false)
      element.pause()
      setIcon('play_arrow')
    } else {
      setStateBtnAudio(true)
      element.play()
      setIcon('pause')
    }
  }
  function handlePlayPause() {
    const $audio = refAudio.current
    validateStateBtn($audio)
  }
  return (
    <Fragment>
      <div className={`${css['c-aud']} ${addClass}`}>
        <audio aria-label='etiqueta de audio' src={url} ref={refAudio} />
        <button
          aria-label='botón presione la tecla enter para reproducir el audio, presione la tecla enter para pausar el audio'
          id='btnAudio'
          onClick={handlePlayPause}
          className={css['c-aud-btn']}
          data-label={label ? 'string' : ''}
        >
          <div
            className={css['c-aud-btn-content']}
            data-label={label ? 'string' : ''}
          >
            <Icon nameIcon={getIcon} />
            {label}
          </div>
        </button>
      </div>
    </Fragment>
  )
}

export { Multimedia }

Multimedia.propTypes = {
  url: PropTypes.string.isRequired,
  label: PropTypes.string,
  addClass: PropTypes.string
}

Multimedia.defaultProps = {
  addClass: ''
}
