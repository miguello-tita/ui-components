import React from 'react'
import { List } from './'

export default {
  title: 'Atoms/List',
  component: List,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: [
          'none',
          'disc',
          'upper-alpha',
          'lower-alpha',
          'decimal',
          'circle'
        ]
      }
    }
  }
}

const Template = (args) => <List {...args} />

export const ListDefault = Template.bind({})

ListDefault.args = {
  type: 'disc',
  arrItems: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  ]
}
