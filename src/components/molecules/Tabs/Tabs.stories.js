import React from 'react'
import { Tab } from '../../atoms'
import { Tabs } from './index'

export default {
  title: 'Molecules/Tabs',
  component: Tabs
}

export const TabsDefault = () => {
  return (
    <Tabs>
      <Tab label='Item One' />
      <Tab label='Item Two' />
      <Tab label='Item Three' />
    </Tabs>
  )
}
