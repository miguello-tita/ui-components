import React from 'react'
import { Tab, TabPanel } from '../../atoms'
import { Tabs } from '../../molecules'

export const PanelTabs = (props) => {
  const { tabs, panels, ...others } = props
  const [value, setValue] = React.useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div {...others}>
      <Tabs value={value} onChange={handleChange}>
        {tabs.map((elem) => (
          <Tab
            label={elem.label}
            key={elem.id}
            nameIcon={elem.nameIcon}
            positionIcon={elem.positionIcon}
          />
        ))}
      </Tabs>
      {panels.map((elem, index) => (
        <TabPanel value={value} index={index} key={elem.id}>
          {elem.text}
        </TabPanel>
      ))}
    </div>
  )
}

PanelTabs.defaultProps = {
  tabs: [
    { label: 'item 1', id: '1', nameIcon: 'lock', positionIcon: 'left' },
    { label: 'item 2', id: '2', nameIcon: 'android', positionIcon: 'right' }
  ],
  panels: [
    { text: 'este es el primer texto', id: '1' },
    { text: 'este es el segundo texto', id: '2' }
  ]
}
