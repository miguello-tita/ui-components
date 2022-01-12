import React from 'react'
import { Card } from './index'

export default {
  title: 'Molecules/Cards',
  component: Card
}

const Template = (args) => <Card {...args} />

export const baseCard = Template.bind({})
baseCard.args = {
  content: {
    title: 'Card Title',
    text: 'Secondary Text'
  }
}

export const imageCard = Template.bind({})
imageCard.args = {
  image: {
    state: true,
    url: 'https://via.placeholder.com/300',
    alt: 'image'
  },
  content: {
    title: 'Card Title',
    text: 'Secondary Text'
  }
}

export const supporText = Template.bind({})
supporText.args = {
  width: '350px',
  image: {
    state: true,
    url: 'https://via.placeholder.com/300',
    alt: 'image'
  },
  content: {
    title: 'Card Title',
    text: 'Secondary Text'
  },
  supportingText:
    'Greyhound divisively hello coldly wonderfully marginally far upon excluding.'
}

export const fullCard = Template.bind({})
fullCard.args = {
  width: '350px',
  image: {
    state: true,
    url: 'https://via.placeholder.com/300',
    alt: 'image'
  },
  content: {
    title: 'Card Title',
    text: 'Secondary Text'
  },
  supportingText:
    'Greyhound divisively hello coldly wonderfully marginally far upon excluding.',
  buttons: {
    state: true,
    first: {
      label: 'Action 1',
      theme: 'primary'
    },
    secundary: {
      label: 'Action 2',
      theme: 'primary',
      icon: 'accessibility'
    }
  }
}
