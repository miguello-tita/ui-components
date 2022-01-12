import React from 'react'
import { Loading } from './index'

export default {
  title: 'Atoms/Loading',
  component: Loading
}

const Template = (args) => <Loading {...args} />

export const defaultLoading = Template.bind({})

defaultLoading.args = {
  addClass: 'prb'
}
