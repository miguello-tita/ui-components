import React from 'react'
import { Textarea } from './'

export default {
  title: 'Atoms/Textarea',
  component: Textarea,
  argTypes: {}
}

const template = (args) => <Textarea {...args} />

export const TextareaDefault = template.bind({})
TextareaDefault.args = {
  maxWords: '10',
  addClass: 'prb'
}
