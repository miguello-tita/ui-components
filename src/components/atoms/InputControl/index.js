import _uniqueId from 'lodash/uniqueId'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { Icon } from '../icon'
import css from './InputControl.module.css'

export const InputControl = ({
  type,
  label,
  stateInput,
  name,
  addClass,
  required,
  ...args
}) => {
  const [check, setCheck] = useState(false)
  const [getStateIcon, setStateIcon] = useState('')
  const id = _uniqueId('ui-')

  useEffect(() => {
    function validateIcon(element) {
      if (stateInput) {
        if (stateInput === 'Error') {
          setStateIcon('close')
          element.classList.add(css['input-error'])
        } else if (stateInput === 'Succes') {
          setStateIcon('check')
          element.classList.add(css['input-succes'])
        } else {
          setStateIcon('check')
        }
      } else {
        setStateIcon('check')
      }
    }
    function initInputIcon() {
      const $contentIcon = document.querySelector(`#${id}Icon`)
      validateIcon($contentIcon)
    }
    initInputIcon()
  })

  return (
    <label
      htmlFor={id}
      className={`${css.InputCont} ${addClass}`}
      inputMode={type}
      {...args}
    >
      <div className={css.CheckCont} inputMode={type}>
        <input
          className={css.InputStyled}
          data-state={stateInput}
          inputMode={type}
          defaultChecked={check}
          type={type === 'toggle' ? 'checkbox' : type}
          id={id}
          name={name}
          required={required}
        />
        {type === 'toggle' && <div className={css.CheckTrack} />}
        <div
          className={css.CheckBg}
          inputMode={type}
          onClick={() => setCheck(!check)}
          id={`${id}Icon`}
        >
          {type !== 'toggle' && (
            <Icon nameIcon={getStateIcon} id={`${id}ContentIcon`} />
          )}
        </div>
      </div>
      <label className={css.CheckLabel}>{label}</label>
    </label>
  )
}

InputControl.propTypes = {
  type: PropTypes.oneOf(['radio', 'checkbox', 'toggle']),
  stateInput: PropTypes.string,
  icon: PropTypes.object,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  name: PropTypes.string,
  addClass: PropTypes.string
}

InputControl.defaultProps = {
  label: 'select',
  type: 'radio',
  addClass: '',
  onClick: undefined
}
