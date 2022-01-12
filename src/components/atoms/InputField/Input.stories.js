import React from 'react'
import { InputField } from './index'

export default {
  title: 'Atoms/Inputs Field',
  component: InputField,
  argTypes: {
    label: {
      control: 'text',
      description: 'Aqui va el texto de ayuda del input',
      defaultValue: 'Label',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'Label' }
      }
    },
    type: {
      control: {
        type: 'select',
        options: ['text', 'number', 'password', 'date', 'email', 'url']
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' }
      }
    }
  }
}

const template = (args) => <InputField {...args} />

export const InputText = template.bind({})
InputText.storyName = 'Input Field'
InputText.args = {
  type: 'text',
  addClass: 'prb'
}

export const InputIcon = template.bind({})
InputIcon.args = {
  type: 'text',
  dataIcon: {
    state: true,
    nameIcon: 'perm_identity'
  }
}

export const InputError = template.bind({})
InputError.args = {
  type: 'text',
  styledInput: 'Error'
}

export const InputErrorIcon = template.bind({})
InputErrorIcon.args = {
  type: 'text',
  styledInput: 'Error',
  dataIcon: {
    state: true,
    nameIcon: 'close'
  }
}

export const InputSucces = template.bind({})
InputSucces.args = {
  type: 'text',
  styledInput: 'Succes'
}

export const InputSuccesIcon = template.bind({})
InputSuccesIcon.args = {
  type: 'text',
  styledInput: 'Succes',
  dataIcon: {
    state: true,
    nameIcon: 'done'
  }
}
export const InputTime = template.bind({})
InputTime.args = {
  type: 'time',

}
