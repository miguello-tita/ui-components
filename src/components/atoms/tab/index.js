import PropTypes from 'prop-types'
import * as React from 'react'
import { Icon } from '../icon'
import css from './Tab.module.css'

export const Tab = React.forwardRef(function Tab(props, ref) {
  const {
    classes,
    className,
    disabled = false,
    fullWidth,
    nameIcon,
    positionIcon,
    indicator,
    label,
    onChange,
    onClick,
    onFocus,
    selected,
    selectionFollowsFocus,
    value,
    addClass,
    ...other
  } = props

  const handleClick = (event) => {
    if (!selected && onChange) {
      onChange(event, value)
    }

    if (onClick) {
      onClick(event)
    }
  }

  const handleFocus = (event) => {
    if (selectionFollowsFocus && !selected && onChange) {
      onChange(event, value)
    }

    if (onFocus) {
      onFocus(event)
    }
  }

  return (
    <button
      ref={ref}
      className={`${css.TabsBtn} ${addClass}`}
      // aria-selected={selected}
      aria-label='boton TAB 1 presione enter'
      disabled={disabled}
      onClick={handleClick}
      onFocus={handleFocus}
      tabIndex={selected ? 0 : -1}
      {...other}
    >
      <span className={css.TabsBtnContent} position-icon={positionIcon}>
        <Icon aria-hidden='true' nameIcon={nameIcon} />{' '}
        <span className={css.TabsBtnContentLabel}>{label}</span>{' '}
      </span>
      <span className={css.TabsBtnIndicator}>
        <span className={css.TabsBtnIndicatorContent} />
      </span>
    </button>
  )
})

Tab.propTypes = {
  addClass: PropTypes.string
}

Tab.defaultProps = {
  addClass: ''
}
