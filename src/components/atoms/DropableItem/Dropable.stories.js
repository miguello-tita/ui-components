import React from 'react'
import { AccordionItem } from './index'

export default {
  title: 'Atoms/AccordionItem',
  component: AccordionItem
}

const Template = (args) => <AccordionItem {...args} />

export const baseAccordionItem = Template.bind({})
baseAccordionItem.args = {
  item: {
    dataIcon: 'place',
    title: 'Example 1',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, porro, ad nihil esse nemo eum,'
  },
  index: '1',
  addClass: 'prb'
}
