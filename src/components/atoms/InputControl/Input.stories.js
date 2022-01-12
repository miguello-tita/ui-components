import React from 'react'
import { InputControl } from './'

export default {
  title: 'Atoms/Inputs Control',
  component: InputControl,
  argTypes: {
    label: {
      control: 'text',
      defaultValue: 'Label'
    },
    type: {
      control: { type: 'select', options: ['radio', 'checkbox', 'toggle'] },
      defaultValue: 'radio',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'radio' }
      }
    },
    onChange: { action: 'change' }
  }
}

const template = (args) => <InputControl {...args} />

export const InputRadio = template.bind({})
InputRadio.storyName = 'Input Control'

export const InputRadioError = template.bind({})
InputRadioError.args = {
  stateInput: 'Error',
  addClass: 'prb'
}

export const InputRadioSucces = template.bind({})
InputRadioSucces.args = {
  stateInput: 'Succes'
}

export const InputCheckbok = template.bind({})
InputCheckbok.args = {
  type: 'checkbox',
  label: 'Checkbok'
}

export const InputChecknokError = template.bind({})
InputChecknokError.args = {
  type: 'checkbox',
  label: 'Checkbok',
  stateInput: 'Error'
}

export const InputCheckbokSucces = template.bind({})
InputCheckbokSucces.args = {
  type: 'checkbox',
  label: 'Checkbok',
  stateInput: 'Succes'
}
