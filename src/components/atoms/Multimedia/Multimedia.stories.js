import React from 'react'
import { Multimedia } from './index'

export default {
  title: 'Atoms/Multimedia',
  component: Multimedia
}

const Template = (args) => <Multimedia {...args} />

export const baseAudio = Template.bind({})
baseAudio.args = {
  url:
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/33378/soundcloud-austin-stephens-Auto_Tuned_Native_American_Flute.mp3',
  addClass: 'prb'
}

export const TextAudio = Template.bind({})
TextAudio.args = {
  url:
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/33378/soundcloud-austin-stephens-Auto_Tuned_Native_American_Flute.mp3',
  label: 'Audio'
}
