import React from 'react'
import { Button } from '../../atoms/Button'
import { PanelTabs } from './'

export default {
  title: 'Organism/Panel Tabs',
  component: PanelTabs
}

const Template = (args) => <PanelTabs {...args} />
export const PanelDefault = Template.bind({})

export const PanelChildren = Template.bind({})
PanelChildren.args = {
  tabs: [
    { label: 'item 1', id: '1', nameIcon: 'lock', positionIcon: 'left' },
    { label: 'item 2', id: '2', nameIcon: 'android', positionIcon: 'right' },
    { label: 'item 3', id: '3', nameIcon: 'android', positionIcon: 'right' }
  ],
  panels: [
    { text: <Button label='button1' />, id: '1' },
    { text: <Button label='button2' />, id: '2' },
    { text: <Button label='button2' />, id: '3' }
  ]
}
