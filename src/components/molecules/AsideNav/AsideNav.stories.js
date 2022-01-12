import React from 'react'
import { AsideNav } from './index'

export default {
  title: 'Molecules/AsideNav',
  component: AsideNav
}

const Template = (args) => <AsideNav {...args} />

export const baseAside = Template.bind({})
baseAside.args = {
  dataButton: {
    label: 'Side nav right',
    styled: 'primary'
  },
  content: {
    title: 'Aside Nav',
    list: ['List 1', 'List 2', 'List3']
  },
  location: 'right'
}

export const AsideLeft = Template.bind({})
AsideLeft.args = {
  dataButton: {
    label: 'Side nav Left',
    styled: 'primary'
  },
  content: {
    title: 'Aside Nav',
    list: ['List 1', 'List 2', 'List3']
  },
  location: 'left'
}

export const AsideIcon = Template.bind({})
AsideIcon.args = {
  dataButton: {
    type: 'icon',
    label: 'dehaze'
  },
  content: {
    title: 'Aside Nav',
    list: ['List 1', 'List 2', 'List3']
  },
  location: 'left'
}
