import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import { Icon } from '../icon/index'
import css from './DropableItem.module.css'

export function AccordionItem({
  item,
  ctx,
  index,
  stateIcon,
  addClass,
  Children,
  ...props
}) {
  return (
    <Fragment>
      <div
        className={`${css['c-collapsible-container-header']} ${addClass}`}
        // data-element={`body${index}`}
        {...props}
      >
        <Icon nameIcon={item.dataIcon} />
        <p> {item.title}</p>
        <Icon nameIcon={stateIcon} />
      </div>
      <div
        className={css['c-collapsible-container-body']}
        id={`${ctx}body${index}`}
      >
        {Children ? (
          <div className='c-children'>{Children}</div>
        ) : (
          <p>{item.text}</p>
        )}
      </div>
    </Fragment>
  )
}

AccordionItem.propTypes = {
  item: PropTypes.object,
  stateIcon: PropTypes.string,
  index: PropTypes.number,
  Children: PropTypes.element,
  addClass: PropTypes.string
}

AccordionItem.defaultProps = {
  stateIcon: 'expand_more',
  addClass: ''
}
