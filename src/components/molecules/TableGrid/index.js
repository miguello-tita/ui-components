import PropTypes from 'prop-types'
import React, { useCallback, useEffect, useState } from 'react'
import { Icon } from '../../atoms/icon'
import css from './TableGrid.module.css'

export function TableGrid({
  headContent,
  bodyContent,
  gridColumn,
  pageSize,
  ...args
}) {
  const [getDataShowBody, setDataShowBody] = useState([])
  const [getActualPage, setActualPage] = useState(0)
  const [getTotalPage, setTotalPages] = useState(1)

  const validatePages = useCallback(
    (index, pages, item) => {
      if (getActualPage > 0) {
        if (index < pages[getActualPage] && index >= pages[getActualPage - 1]) {
          return item
        }
      } else {
        if (index < pages[getActualPage]) {
          return item
        }
      }
    },
    [getActualPage]
  )
  const filterDataBody = useCallback(
    (pages) => {
      const databody = bodyContent.filter((item, index) => {
        return validatePages(index, pages, item)
      })
      setDataShowBody(databody)
    },
    [bodyContent, validatePages]
  )

  const splitPages = useCallback(() => {
    const lengthBody = bodyContent.length
    const amountPages = []
    for (let i = 1; i <= lengthBody; i++) {
      if (i !== 1) {
        if (i % pageSize === 0) {
          amountPages.push(i)
        }
      }
    }
    lengthBody % pageSize !== 0 && amountPages.push(lengthBody)
    setTotalPages(amountPages.length)
    filterDataBody(amountPages)
  }, [bodyContent, pageSize, filterDataBody])

  useEffect(() => {
    splitPages()
  }, [splitPages])

  useEffect(() => {
    setActualPage(0)
  }, [bodyContent])

  function handleNextPage() {
    getActualPage + 1 < getTotalPage && setActualPage(getActualPage + 1)
  }

  function handleBackPage() {
    getActualPage > 0 && setActualPage(getActualPage - 1)
  }
  return (
    <div className={`${css['c-scroll']} ui-scroll`} {...args}>
      <div className={`${css['c-gridTable']} ui-gridTable`}>
        <div
          className={`${css['c-gridTable-head']} ui-gridTable-head`}
          style={gridColumn}
        >
          {headContent.map((item, index) => (
            <div
              className={`${css['c-gridTable-head-item']} ui-gridTable-head-item`}
              key={`head-${index}`}
            >
              {item.type === 'icon' ? (
                <Icon nameIcon={item.label} addClass={item.addClass} />
              ) : (
                <span>{item.label}</span>
              )}
            </div>
          ))}
        </div>
        <div className={`${css['c-gridTable-body']} ui-gridTable-body`}>
          {getDataShowBody.map((data, index) => (
            <div
              className={`${css['c-gridTable-body-row']} ui-gridTable-body-row`}
              key={`body-${index}`}
              style={gridColumn}
            >
              {data.map((buttom, idx) => (
                <div
                  key={`body-item-${idx}`}
                  className='ui-gridTable-body-item'
                >
                  {buttom}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className={`${css['c-gridTable-pagination']}`}>
          <div className={`${css['c-gridTable-pagination-content']}`}>
            <button
              title='Anterior'
              className={`${css['c-gridTable-pagination-content-btn']}`}
              onClick={handleBackPage}
            >
              <Icon nameIcon='keyboard_arrow_left' />
            </button>
            <div className={`${css['c-gridTable-pagination-content-text']}`}>
              <span>{getActualPage + 1}</span>
              <span>/</span>
              <span>{getTotalPage}</span>
            </div>
            <button
              title='Siguiente'
              className={`${css['c-gridTable-pagination-content-btn']}`}
              onClick={handleNextPage}
            >
              <Icon nameIcon='keyboard_arrow_right' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

TableGrid.propTypes = {
  headContent: PropTypes.array,
  bodyContent: PropTypes.array,
  pageSize: PropTypes.number
}

TableGrid.defaultProps = {
  headContent: [],
  bodyContent: [],
  pageSize: 10
}
