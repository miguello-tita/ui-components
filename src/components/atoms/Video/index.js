import PropTypes from 'prop-types'
import React, { createRef, useState } from 'react'
import { Icon } from '../icon/index'
import css from './Video.module.css'

function Video({ url, width, addClass, poster }) {
  const [getDurationVideo, setDurationVideo] = useState('00:00') // estado duracion del video
  const [getCurrentTiem, setCurrentTime] = useState('00:00') // estado del tiempo de ver el video
  const [getstateVideoPlay, setStateVideoPlay] = useState({
    state: false,
    icon: 'play_arrow'
  }) // estado del play
  const [getStateScreen, setStateScreen] = useState({
    state: false,
    icon: 'open_in_full'
  }) // stado de la pantalla completa
  const [getValueVolum, setValueVolumn] = useState(0.23)
  const refCont = createRef()
  const refVideo = createRef()
  const refProgress = createRef()
  const refProgressBar = createRef()
  const refVolumn = createRef()

  // funcion de click del play
  function handlePlay() {
    const $video = refVideo.current
    // $video.
    if (getstateVideoPlay.state) {
      $video.pause()
      setStateVideoPlay({
        state: false,
        icon: 'play_arrow'
      })
    } else {
      $video.play()
      setStateVideoPlay({
        state: true,
        icon: 'pause'
      })
    }
  }

  // funcion del evento click de pantalla completa
  function hanldeFullScrenn() {
    const isInFullScreen =
      (document.fullscreenElement && document.fullscreenElement !== null) ||
      (document.webkitFullscreenElement &&
        document.webkitFullscreenElement !== null) ||
      (document.mozFullScreenElement &&
        document.mozFullScreenElement !== null) ||
      (document.msFullscreenElement && document.msFullscreenElement !== null)
    // const video = refVideo.current
    const docElm = refCont.current
    if (!isInFullScreen) {
      setStateScreen({
        state: true,
        icon: 'close_fullscreen'
      })
      if (docElm.requestFullscreen) {
        docElm.requestFullscreen()
      } else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen()
      } else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen()
      } else if (docElm.msRequestFullscreen) {
        docElm.msRequestFullscreen()
      }
    } else {
      setStateScreen({
        state: false,
        icon: 'open_in_full'
      })
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
    }
  }

  // progreso de la barra
  function handleBarProgress() {
    const video = refVideo.current
    const progressElem = refProgressBar.current
    const porcent = (video.currentTime / video.duration) * 100
    progressElem.style.flexBasis = `${porcent}%`
  }

  // tiempo de video y de progreso
  function handleTimeProcess() {
    const dataVideo = refVideo.current
    initialValores(dataVideo)
    // funcion inicial
    function initialValores(element) {
      const durationVideo = hourToString(element.duration)
      const travelVideo = hourToString(element.currentTime)
      setCurrentTime(travelVideo)
      setDurationVideo(durationVideo)
    }
    // funcion saca segundos, minutos, horas
    function hourToString(timeSeconds) {
      const secundsNumber = parseInt(timeSeconds, 10)
      const hours = Math.floor(secundsNumber / 3600)
      const minutes = Math.floor((secundsNumber - hours * 3600) / 60)
      const seconds = secundsNumber - hours * 3600 - minutes * 60
      // valores validados si son mas de dos digitos
      const valisateHours = validateIsNan(validateDigits(hours))
      // se valida si el value es NaN
      const validateMinutes = validateIsNan(validateDigits(minutes))
      const validateSeconds = validateIsNan(validateDigits(seconds))
      return `${valisateHours}:${validateMinutes}:${validateSeconds}`
    }
    // funcion para validar la cantidad de digitos y agregarles el 0
    function validateDigits(value) {
      if (value < 10) {
        return (value = '0' + value)
      } else {
        return value
      }
    }
    // funcion valida si el valor ingresado es Na-n
    function validateIsNan(elem) {
      return isNaN(elem) ? '00' : elem
    }
  }
  // funcion para adelantar o atrasar video
  function handleProcessControl(e) {
    const progress = refProgress.current
    const video = refVideo.current
    const positionClick = e.nativeEvent.offsetX // se obtiene posicion del click
    const scrubTime = (positionClick / progress.offsetWidth) * video.duration // operacion
    video.currentTime = scrubTime
  }
  // funcion para el volumen
  function handleVolumn(e) {
    const video = refVideo.current
    const value = e.target.value
    setValueVolumn(value)
    video.volume = getValueVolum
  }

  return (
    <div
      className={`${css['c-vid']} ${addClass}`}
      ref={refCont}
      style={{ maxWidth: width, minWidth: '320px' }}
    >
      <video
        ref={refVideo}
        onTimeUpdate={() => {
          handleBarProgress()
          handleTimeProcess()
        }}
        poster={poster}
      >
        <source src={url} />
      </video>
      <div className={`${css['progress-content']} ${addClass}-progress`}>
        <div
          ref={refProgress}
          className={css.progress}
          onClick={handleProcessControl}
        >
          <div
            ref={refProgressBar}
            className={css['progress-bar']}
            onChange={handleBarProgress}
          />
        </div>
      </div>
      <div className={`${css['c-vid-controls']} ${addClass}-controls`}>
        <Icon nameIcon={getstateVideoPlay.icon} onClick={handlePlay} />
        <p className={css['c-vid-controls-text']}>
          <span>{getCurrentTiem}</span> / <span>{getDurationVideo}</span>
        </p>
        <div className={css['c-vid-controls-volumn']}>
          <Icon nameIcon='volume_up' />
          <label>
            <input
              className={css['c-vid-controls-volumn-item']}
              ref={refVolumn}
              type='range'
              min='0'
              max='1'
              step='any'
              value={getValueVolum}
              onChange={handleVolumn}
            />
          </label>
        </div>
        <Icon nameIcon={getStateScreen.icon} onClick={hanldeFullScrenn} />
      </div>
    </div>
  )
}

export { Video }

Video.propTypes = {
  url: PropTypes.string.isRequired,
  width: PropTypes.string,
  addClass: PropTypes.string
}

Video.defaultProps = {
  addClass: ''
}
