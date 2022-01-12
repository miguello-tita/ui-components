import React from 'react'
import { Modal } from './index'

export default {
  title: 'Molecules/Modal',
  component: Modal
}

const Template = (args) => <Modal {...args} />

export const ModalSmall = Template.bind({})
ModalSmall.args = {
  dataButton: {
    label: 'Modal small',
    styled: 'primary'
  },
  title: 'Moda small',
  size: 'small',
  text:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, porro, ad nihil esse nemo eum, tenetur pariatur a exercitationem ab cumque est necessitatibus fuga tempore ipsum vitae dolores impedit quae!'
}
export const ModalMedium = Template.bind({})
ModalMedium.args = {
  dataButton: {
    label: 'Modal medium',
    styled: 'primary'
  },
  title: 'Moda medium',
  size: 'medium',
  text:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, porro, ad nihil esse nemo eum, tenetur pariatur a exercitationem ab cumque est necessitatibus fuga tempore ipsum vitae dolores impedit quae!'
}
export const ModalLarge = Template.bind({})
ModalLarge.args = {
  dataButton: {
    label: 'Modal large',
    styled: 'primary'
  },
  title: 'Modal large',
  size: 'large',
  text:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, porro, ad nihil esse nemo eum, tenetur pariatur a exercitationem ab cumque est necessitatibus fuga tempore ipsum vitae dolores impedit quae!'
}
