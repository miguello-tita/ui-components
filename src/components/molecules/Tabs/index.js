import * as React from 'react'
import css from './Tabs.module.css'

export const Tabs = React.forwardRef(function Tabs(props, ref) {
  const {
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    action,
    children: childrenProp,
    classes,
    className,
    component: Component = 'div',
    onChange,
    orientation = 'horizontal',
    selectionFollowsFocus,
    TabScrollButtonProps,
    value,
    ...other
  } = props

  const valueToIndex = new Map()
  const tabsRef = React.useRef(null)
  const tabListRef = React.useRef(null)

  let childIndex = 0
  const children = React.Children.map(childrenProp, (child) => {
    if (!React.isValidElement(child)) {
      return null
    }

    const childValue =
      child.props.value === undefined ? childIndex : child.props.value
    valueToIndex.set(childValue, childIndex)
    const selected = childValue === value

    childIndex += 1
    return React.cloneElement(child, {
      selected,
      selectionFollowsFocus,
      onChange,
      value: childValue,
      ...(childIndex === 1 && value === false && !child.props.tabIndex
        ? { tabIndex: 0 }
        : {})
    })
  })

  const handleKeyDown = (event) => {
    const { target } = event
    const role = target.getAttribute('role')
    if (role !== 'tab') {
      return
    }

    let newFocusTarget = null
    const previousItemKey =
      orientation === 'horizontal' ? 'ArrowLeft' : 'ArrowUp'
    const nextItemKey =
      orientation === 'horizontal' ? 'ArrowRight' : 'ArrowDown'

    switch (event.key) {
      case previousItemKey:
        newFocusTarget =
          target.previousElementSibling || tabListRef.current.lastChild
        break
      case nextItemKey:
        newFocusTarget =
          target.nextElementSibling || tabListRef.current.firstChild
        break
      case 'Home':
        newFocusTarget = tabListRef.current.firstChild
        break
      case 'End':
        newFocusTarget = tabListRef.current.lastChild
        break
      default:
        break
    }

    if (newFocusTarget !== null) {
      newFocusTarget.focus()
      event.preventDefault()
    }
  }

  return (
    <Component className={`${css.TabsCont} ui-Tabs-cont`} ref={ref} {...other}>
      <div ref={tabsRef}>
        <div
          className={`${css.TabsArea} ui-tabs-area`}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          aria-orientation={orientation === 'vertical' ? 'vertical' : null}
          onKeyDown={handleKeyDown}
          ref={tabListRef}
          role='tablist'
        >
          {children}
        </div>
      </div>
    </Component>
  )
})
