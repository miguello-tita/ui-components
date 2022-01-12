import _uniqueId from 'lodash/uniqueId'
import PropTypes from 'prop-types'
import React, { Fragment, useEffect, useState } from 'react'
import { Icon } from '../icon'
import css from './InputField.module.css'

export const InputField = ({
  type,
  label,
  dataIcon,
  styledInput,
  addClass,
  name,
  value,
  required,
  minlength,
  maxlength,
  pattern,
  ...args
}) => {
  const id = _uniqueId('ui-')
  const [isFocus, setIsFocus] = useState(false)
  const [DataValue, setDataValue] = useState('')
  const [getStateInput, setStateInput] = useState('')

  function handleChange({ target }) {
    setDataValue(target.value)
  }

  useEffect(() => {
    function addClass(element, nameClass) {
      element.classList.add(css[nameClass])
    }

    function validateInput(content, input, label) {
      if (getStateInput) {
        if (getStateInput === 'Error') {
          addClass(content, 'deactive-border')
          addClass(input, 'input-error')
          addClass(label, 'label-error')
        }
        if (getStateInput === 'Succes') {
          addClass(content, 'deactive-border')
          addClass(input, 'input-succes')
          addClass(label, 'label-succes')
        }
      }
    }

    function initInput() {
      setStateInput(styledInput)
      const $content = document.querySelector(`#contentLabel${id}`)
      const $input = document.querySelector(`#${id}`)
      const $label = document.querySelector(`#label-${id}`)
      validateInput($content, $input, $label)
    }
    initInput()
  }, [id, styledInput, getStateInput])

  useEffect(() => {
    if (value) {
      setIsFocus(true)
    }

    setDataValue(value)
  }, [value])

  function handleFocus() {
    value ? setIsFocus(isFocus) : setIsFocus(!isFocus)
  }
  function handleBlur() {
    value ? setIsFocus(isFocus) : setIsFocus(!isFocus)
  }

  return (
    <label
      aria-label='Caja de texto label. ingrese aquí el contenido'
      inputMode={type}
      className={`${css.InputCont} ${addClass}`}
      data-status={isFocus || DataValue !== '' ? 'active' : false}
      id={`contentLabel${id}`}
      state-input={styledInput}
      {...args}
    >
      {dataIcon.state ? (
        <Icon nameIcon={dataIcon.nameIcon} state-input={styledInput} />
      ) : (
        <Fragment />
      )}
      <input
        className={css.InputStyled}
        type={type}
        onFocus={() => handleFocus}
        onBlur={() => handleBlur}
        onChange={() => handleChange}
        id={id}
        name={name}
        value={DataValue}
        required={required}
        minLength={minlength}
        maxLength={maxlength}
        pattern={pattern}
      />
      {type !== 'date' && type !== 'time' ? (
        <span
          className={css.LabelStyle}
          htmlFor={id}
          inputMode={type}
          id={`label-${id}`}
          state-input={styledInput}
        >
          {label}
        </span>
      ) : null}
    </label>
  )
}

InputField.propTypes = {
  type: PropTypes.oneOf([
    'text',
    'email',
    'password',
    'date',
    'number',
    'time',
    'url'
  ]),
  label: PropTypes.string.isRequired,
  dataIcon: PropTypes.object,
  styledInput: PropTypes.string,
  addClass: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string
}

InputField.defaultProps = {
  label: 'Label',
  type: 'text',
  dataIcon: {
    state: false
  },
  addClass: '',
  value: ''
}
