import PropTypes from 'prop-types'
import React from 'react'
import { Icon } from '../../atoms/icon/index'
import { InputControl } from '../../atoms/InputControl/index'
import css from './Table.module.css'

function Table({ headLabels, bodyContent }) {
  return (
    <table className={`${css.table} ui-table`}>
      <thead>
        <tr className={`${css['table-content']} ui-table-content`}>
          {headLabels.map((item, index) => (
            <th
              key={index}
              className={`${css['table-content-item']} ui-table-content-item`}
            >
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {bodyContent.map((content, index) => (
          <tr
            key={`content${index}`}
            className={`${css['table-content']} ${css['body-content']} ui-body-content`}
          >
            {content.map((item, i) => (
              <td
                key={`item${i}`}
                className={`${css['table-content-item']} ui-body-content-item`}
              >
                {item.campoType === 'icon' ? (
                  <Icon nameIcon={item.label} />
                ) : item.campoType === 'input' ? (
                  <InputControl
                    type={item.type}
                    label={item.label}
                    name={item.name}
                  />
                ) : (
                  <span>{item.label}</span>
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export { Table }

Table.propTypes = {
  headLabels: PropTypes.array,
  bodycontent: PropTypes.array
}

Table.defaultProps = {
  headLabels: ['head1', 'head2'],
  bodyContent: [
    ['Cell a1', 'Cell a2'],
    ['Cell b2', 'Cell b2']
  ]
}
