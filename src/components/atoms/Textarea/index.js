import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import css from './Textarea.module.css'

export const Textarea = ({
  placeholder,
  rows,
  maxWords,
  addClass,
  name,
  value,
  required,
  minWords,
  ...args
}) => {
  const [Count, SetCount] = useState(0)
  const [MaxLength, SetMaxLength] = useState(10000)
  const [ValueState, setValueState] = useState(value)

  function HandleChange({ target }) {
    const rgxWords = /\b[^\s\s.\-:;]*/
    const countWords =
      target.value === ''
        ? 0
        : target.value.split(rgxWords, Number(maxWords) + 1).length - 1

    setValueState(target.value)

    if (countWords === Number(maxWords)) {
      SetMaxLength(target.value.length)
    }
    SetCount(countWords)
  }

  useEffect(() => {
    setValueState(value)
  }, [value])
  return (
    <div className={`${css.TextareaCont} ${addClass}`}>
      <label {...args}>
        <textarea
          aria-label='Caja de texto escriba aqui.'
          className={css.TextareaItem}
          rows={rows}
          placeholder={placeholder}
          onKeyPress={HandleChange}
          onChange={HandleChange}
          maxLength={MaxLength}
          minLength={minWords}
          name={name}
          value={ValueState}
          required={required}
        />
        {maxWords && (
          <span className={css.CountCont}> {`${Count} / ${maxWords}`} </span>
        )}
      </label>
    </div>
  )
}

Textarea.propTypes = {
  placeholder: PropTypes.string,
  rows: PropTypes.string,
  maxWords: PropTypes.string,
  addClass: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string
}

Textarea.defaultProps = {
  placeholder: 'Escribe algo...',
  rows: '10',
  addClass: '',
  value: 'ese es el value'
}
