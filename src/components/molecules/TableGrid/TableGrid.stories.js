import React from 'react'
import { Button } from '../../atoms/Button'
import { TableGrid } from './index'

export default {
  title: 'Molecules/TableGrid',
  component: TableGrid
}

const Template = (args) => <TableGrid {...args} />
const button = (label, styled) => <Button label={label} styled={styled} />

const fnItemesfacke = () => {
  const items = [
    ['Name1', 'Las name1', button('ejemplo', 'primary')],
    ['Name2', 'Last name2', button('ejemplo', 'primary')],
    ['Name3', 'Las name3', button('ejemplo', 'primary')],
    ['Name4', 'Las name4', button('ejemplo', 'primary')],
    ['Name5', 'Last name5', button('ejemplo', 'primary')],
    ['Name6', 'Las name6', button('ejemplo', 'primary')],
    ['Name7', 'Last name7', button('ejemplo', 'primary')],
    ['Name8', 'Las name8', button('ejemplo', 'primary')],
    ['Name9', 'Las name9', button('ejemplo', 'primary')],
    ['Name10', 'Last name10', button('ejemplo', 'primary')],
    ['Name11', 'Last name11', button('ejemplo', 'primary')],
    ['Name12', 'Last name12', button('ejemplo', 'primary')],
    ['Name13', 'Last name13', button('ejemplo', 'primary')],
    ['Name14', 'Last name14', button('ejemplo', 'primary')],
    ['Name15', 'Last name15', button('ejemplo', 'primary')],
    ['Name16', 'Last name16', button('ejemplo', 'primary')],
    ['Name17', 'Last name17', button('ejemplo', 'primary')],
    ['Name18', 'Last name18', button('ejemplo', 'primary')],
    ['Name19', 'Last name19', button('ejemplo', 'primary')],
    ['Name20', 'Last name20', button('ejemplo', 'primary')],
    ['Name21', 'Last name21', button('ejemplo', 'primary')],
    ['Name22', 'Last name22', button('ejemplo', 'primary')],
    ['Name23', 'Last name23', button('ejemplo', 'primary')],
    ['Name24', 'Last name24', button('ejemplo', 'primary')],
    ['Name25', 'Last name25', button('ejemplo', 'primary')],
    ['Name26', 'Last name26', button('ejemplo', 'primary')],
    ['Name27', 'Last name27', button('ejemplo', 'primary')],
    ['Name28', 'Last name28', button('ejemplo', 'primary')],
    ['Name29', 'Last name29', button('ejemplo', 'primary')],
    ['Name30', 'Last name30', button('ejemplo', 'primary')],
    ['Name31', 'Last name31', button('ejemplo', 'primary')]
  ]

  return items
}

export const baseTable = Template.bind({})
baseTable.args = {
  headContent: [
    { type: 'default', label: 'head1' },
    { type: 'default', label: 'head2' },
    { type: 'icon', label: 'restore' }
  ],
  bodyContent: fnItemesfacke(),
  gridColumn: {
    gridTemplateColumns: '1fr 1fr 1fr'
  }
}

setTimeout(() => {
  baseTable.args.bodyContent = [
    ['Name1', 'Las name1', button('ejemplo', 'primary')],
    ['Name2', 'Last name2', button('ejemplo', 'primary')],
    ['Name3', 'Las name3', button('ejemplo', 'primary')],
    ['Name4', 'Las name4', button('ejemplo', 'primary')],
    ['Name5', 'Last name5', button('ejemplo', 'primary')]
  ]
  console.log('cambio')
}, 5000)
