import React from 'react'
import { Button } from '../../atoms'
import { Tooltip } from './'

export default {
  title: 'Atoms/Tooltip',
  component: Tooltip
}

// const template = (args) => <Tooltip {...args} />

export const TooltipDefault = () => (
  <Tooltip label='holis' addClass='prb'>
    <Button styled='secondary' label='Secondary button' />
  </Tooltip>
)
