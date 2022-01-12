import React, { useState } from 'react'
import { Icon } from '../icon'
import css from './Dropdown.module.css'

export const Dropdown = ({ icon, children: childsElem, label, addClass }) => {
  const [Expanded, SetExpanded] = useState(false)

  function HandleChange() {
    SetExpanded(!Expanded)
  }
  return (
    <div
      className={`${css.DropdownCont} ${addClass} `}
      onMouseOver={() => HandleChange}
      onMouseOut={() => HandleChange}
      tabIndex='0'
    >
      {icon && <Icon nameIcon={icon} />}
      <ul>
        <li className={css.navItem}>
          <span
            className={css.navLink}
            // id='navbarDropdown'
            role='button'
            data-toggle='dropdown'
            aria-haspopup='true'
            aria-expanded={Expanded}
          >
            {label}
          </span>
          <div className={css.dropdownMenu} aria-labelledby='navbarDropdown'>
            {React.Children.map(childsElem, (elem, idx) => (
              <div className={css['dropdownMenu-item']} key={idx}>
                {elem}
              </div>
            ))}
          </div>
        </li>
      </ul>
      <Icon nameIcon={Expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'} />
    </div>
  )
}

Dropdown.defaultProps = {
  icon: 'lock',
  addClass: '',
  label: 'Dropdown',
  arrItems: [
    {
      label: 'primer item',
      key: 1,
      link: 'el_link',
      icon: 'palette'
    },
    {
      label: 'segundo item',
      key: 2,
      link: 'el_link'
    }
  ]
}
