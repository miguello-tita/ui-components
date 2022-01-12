import React from 'react'
import { Link } from './'

export default {
  title: 'Atoms/Link',
  component: Link
}

const Template = (args) => <Link {...args} />

export const LinkDefault = Template.bind({})

LinkDefault.args = {
  label: 'Esto es un link',
  href: 'el_link',
  addClass: 'prb'
}
