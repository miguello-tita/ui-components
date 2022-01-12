import React, { createRef, useState } from 'react'
import { Icon } from '../../atoms'
import css from './Carrousel.module.css'

export const Carrousel = ({ children: childrenProp }) => {
  const [Value, SetValue] = useState(0)
  const refCont = createRef()
  const refPrev = createRef()
  const refNext = createRef()
  let childIndex = 0
  function handleClick({ target }) {
    const dataValue = target.dataset.slide
    const contChild = [...refCont.current.children]
    let getValue = Value
    if (dataValue === 'prev') {
      getValue--
      if (getValue < 0) {
        getValue = 0
      }
      SetValue(getValue)
    } else {
      getValue++
      if (getValue >= contChild.length - 1) {
        getValue = contChild.length - 1
      }
      SetValue(getValue)
    }

    if (getValue === 0) {
      refPrev.current.setAttribute('hidden', 'true')
    } else if (getValue === contChild.length - 1) {
      refNext.current.setAttribute('hidden', 'true')
    } else {
      refPrev.current.removeAttribute('hidden')
      refNext.current.removeAttribute('hidden')
    }
  }

  const children = React.Children.map(childrenProp, (child) => {
    if (!React.isValidElement(child)) {
      return null
    }
    const childValue =
      child.props.value === undefined ? childIndex : child.props.value

    childIndex += 1
    return React.cloneElement(child, {
      index: childValue,
      value: Value
    })
  })

  return (
    <div
      id='carouselExampleControls'
      className={`${css.carrousel} ${css.slide} iu-slider`}
      data-ride='carousel'
    >
      <div ref={refCont} className={`${css.carrouselInner} ui-carrusel-inner`}>
        {children}
      </div>
      <button
        className={`${css.carrouselControlPrev} ui-carrusel-control-prev`}
        data-slide='prev'
        onClick={handleClick}
        ref={refPrev}
        hidden
      >
        <Icon nameIcon='keyboard_arrow_left' />
      </button>
      <button
        className={`${css.carrouselControlNext} ui-carrusel-control-next`}
        data-slide='next'
        onClick={handleClick}
        ref={refNext}
      >
        <Icon nameIcon='keyboard_arrow_right' />
      </button>
    </div>
  )
}
