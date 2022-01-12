import PropTypes from 'prop-types'
import React from 'react'
import { Icon } from '../icon'
import css from './Select.module.css'

export const Select = ({
  placeholder,
  stateInput,
  options,
  addClass,
  nameIcon,
  value,
  name,
  defaultValue,
  required,
  type,
  ...args
}) => {
  return (
    <label
      className={`${css.SelectWrapper} ${addClass}`}
      data-state={stateInput}
      {...args}
    >
      <select
        aria-label='Elemento select,  a continuación se encuentran varias opciones por favor  seleccione  una de ellas.'
        defaultValue={defaultValue}
        name={name}
        className={css.SelectStyle}
        data-state={stateInput}
        required={required}
      >
        <option value='' aria-label='seleccione una opción'>
          {placeholder}
        </option>
        {options.map((elem, i) => (
          <option
          aria-label={` esta es la opcion ${elem.value}`}
          key={`option-${i}`}
          value={type === 'search' ? elem.value : elem.id}
          >
            {elem.value}
          </option>
        ))}
      </select>
      <div className={css.SelectAfter} data-state={stateInput}>
        <Icon nameIcon={nameIcon} />
      </div>
    </label>
  )
}

Select.propTypes = {
  placeholder: PropTypes.string.isRequired,
  stateInput: PropTypes.string,
  options: PropTypes.array,
  addClass: PropTypes.string,
  name: PropTypes.string
}

Select.defaultProps = {
  placeholder: 'Choose option',
  options: [{
      value:'foo 1',
      id: 1
    },
    {
      value:'foo 2',
      id: 2
    }],
  addClass: '',
  nameIcon: 'arrow_drop_down'
}
