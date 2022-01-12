import React from 'react'
import { Tab } from './'

export default {
  title: 'Atoms/Tab',
  component: Tab
}

const Template = (args) => <Tab {...args} />

export const TabDefault = Template.bind({})
TabDefault.args = {
  label: 'Tab 1',
  nameIcon: 'lock',
  addClass: 'prb'
}
