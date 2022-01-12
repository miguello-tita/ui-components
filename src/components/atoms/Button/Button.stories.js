import React from 'react'
import { Button } from './index'

export default {
  title: 'Atoms/Buttons',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked', table: { disable: true } },
    styled: {
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'primary-outline',
          'secondary-outline',
          'primary-icon',
          'secondary-icon',
          'primary-icon-outline',
          'secondary-icon-outline'
        ]
      },
      defaultValue: 'primary',
      description: 'Aqui se puede escoger entre "primary" y "secondary" ',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' }
      }
    },
    label: {
      control: 'text',
      description: 'Aqui va el contenido del boton.',
      defaultValue: 'Button',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'Button' }
      }
    }
  }
}

const template = (args) => <Button {...args} />

export const ButtonDefault = template.bind({})
ButtonDefault.storyName = 'Button'

export const ButtonDefaultWithIconLeft = template.bind({})
ButtonDefaultWithIconLeft.storyName = 'Button with icon '
ButtonDefaultWithIconLeft.args = {
  icon: 'accessibility',
  addClass: 'prueba'
}

export const ButtonDefaultIcon = template.bind({})
ButtonDefaultIcon.storyName = 'Button icon '
ButtonDefaultIcon.args = {
  label: '',
  icon: 'accessibility',
  styled: 'secondary-icon'
}
