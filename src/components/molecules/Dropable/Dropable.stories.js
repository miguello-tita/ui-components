import React from 'react'
import { Button } from '../../atoms/Button'
import { Accordion } from './index'

export default {
  title: 'Molecules/Accordion',
  component: Accordion
}

const Template = (args) => <Accordion {...args} />
const Example = (label) => <Button label={label} styled='primary' />

export const baseAccordion = Template.bind({})

baseAccordion.args = {
  width: '400px',
  content: [
    {
      title: 'Example 1',
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, porro, ad nihil esse nemo eum, ',
      dataIcon: 'filter_drama'
    },
    {
      title: 'Example 2',
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, porro, ad nihil esse nemo eum, ',
      dataIcon: 'place'
    },
    {
      title: 'Example 3',
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, porro, ad nihil esse nemo eum, ',
      dataIcon: 'whatshot'
    }
  ]
}

export const childrenAccordion = Template.bind({})

childrenAccordion.args = {
  width: '400px',
  content: [
    {
      title: 'Example 1',
      children: Example('dsada'),
      dataIcon: 'filter_drama'
    },
    {
      title: 'Example 2',
      children: Example('dsada'),
      dataIcon: 'place'
    },
    {
      title: 'Example 3',
      children: Example('dsada'),
      dataIcon: 'whatshot'
    }
  ]
}
