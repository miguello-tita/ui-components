import React from 'react'
import { Select } from './'

export default {
  title: 'Atoms/Select',
  component: Select,
  argTypes: {
    options: {
      control: {
        type: 'array'
      },
      // defaultValue: ['opcion 1', 'opcion 2'],
      description:
        'Aqui se puede escoger entre agregar las opciones del select',
      table: {
        type: { summary: 'String[]' },
        // defaultValue: { summary: ['opcion 1', 'opcion 2'] }
      }
    },
    placeholder: {
      control: {
        type: 'text'
      },
      defaultValue: 'Choose option.',
      description: 'Aqui s eescribe el texto a mostrar antes de seleccionar',
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: 'Choose option.' }
      }
    }
  }
}

const Template = (args) => <Select {...args} />

export const SelectDefault = Template.bind({})

SelectDefault.args = {
  addClass: 'prb'
}

export const SelectError = Template.bind({})
SelectError.args = {
  stateInput: 'Error'
}

export const SelectSucces = Template.bind({})
SelectSucces.args = {
  stateInput: 'Succes'
}
