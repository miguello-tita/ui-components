import PropTypes from 'prop-types'
import React, { createRef, Fragment, useState } from 'react'
import { Button } from '../../atoms/Button/index'
import { Icon } from '../../atoms/icon/index'
import css from './Modal.module.css'

export const Modal = ({ children, dataButton, title, text, size, props }) => {
  const [getModal, setModal] = useState(false)
  const refModal = createRef()
  const refOverlay = createRef()
  function stateModal(elementModal, elementOverlay) {
    if (getModal) {
      elementModal.classList.remove(css['modal--active'])
      elementOverlay.classList.remove(css['overlay--active'])
      setModal(false)
    } else {
      elementModal.classList.add(css['modal--active'])
      elementOverlay.classList.add(css['overlay--active'])
      setModal(true)
    }
  }
  function handleModal() {
    const $modal = refModal.current
    const $overlay = refOverlay.current
    stateModal($modal, $overlay)
  }
  return (
    <Fragment>
      <div
        ref={refOverlay}
        className={`${css['c-modal-overlay']} ui-modal-overlay`}
        id='overlay'
      />
      <div
        ref={refModal}
        className={`${css['c-modal']} ui-modal`}
        id='modal'
        data-size={size}

        {...props}
      >
        <Icon
          nameIcon='close'
          onClick={handleModal}
          style={{ cursor: 'pointer' }}
        />
        {children || (
          <div className='ui-modal-content'>
            <h3> {title} </h3>
            <p> {text} </p>
          </div>
        )}
      </div>
      <Button {...dataButton} onClick={handleModal} />
    </Fragment>
  )
}

Modal.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.element,
  dataButton: PropTypes.object,
  size: PropTypes.string
}

Modal.defaultProps = {
  dataButton: {
    label: 'modal',
  },
  title: 'Titulo',
  text:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, porro, ad nihil esse nemo eum, tenetur pariatur a exercitationem ab cumque est necessitatibus fuga tempore ipsum vitae dolores impedit quae!',
  size:"medium"
  }
