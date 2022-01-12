import React from 'react'
import { Row } from '../../utilities'
import { Dropdown } from './'

export default {
  title: 'Atoms/Dropdown',
  component: Dropdown
}

export const DropdownDefault = (args) => {
  return (
    <Row flex='true' justify-content='around'>
      <Dropdown>
        <p>item_1</p>
        <p>item_2</p>
      </Dropdown>
      <Dropdown>
        <p>item_3</p>
        <p>item_4</p>
      </Dropdown>
    </Row>
  )
}
