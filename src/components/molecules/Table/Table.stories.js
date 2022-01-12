import React from 'react'
import { Table } from './index'

export default {
  title: 'Molecules/Table',
  component: Table
}

const Template = (args) => <Table {...args} />

export const BaseTable = Template.bind({})
BaseTable.args = {
  headLabels: ['Head1', 'Head2', 'Head3'],
  bodyContent: [
    [
      {
        campoType: 'default',
        label: 'Cell a1'
      },
      {
        campoType: 'default',
        label: 'Cell a2'
      },
      {
        campoType: 'default',
        label: 'Cell a3'
      }
    ],
    [
      {
        campoType: 'default',
        label: 'Cell b1'
      },
      {
        campoType: 'default',
        label: 'Cell b2'
      },
      {
        campoType: 'default',
        label: 'Cell b3'
      }
    ],
    [
      {
        campoType: 'default',
        label: 'Cell c1'
      },
      {
        campoType: 'default',
        label: 'Cell c2'
      },
      {
        campoType: 'default',
        label: 'Cell c3'
      }
    ]
  ]
}

export const IconTable = Template.bind({})
IconTable.args = {
  headLabels: ['Icon', 'Head1', 'Head2', 'Head3'],
  bodyContent: [
    [
      {
        campoType: 'icon',
        label: 'android'
      },
      {
        campoType: 'default',
        label: 'Cell a1'
      },
      {
        campoType: 'default',
        label: 'Cell a2'
      },
      {
        campoType: 'default',
        label: 'Cell a3'
      }
    ],
    [
      {
        campoType: 'icon',
        label: 'api'
      },
      {
        campoType: 'default',
        label: 'Cell b1'
      },
      {
        campoType: 'default',
        label: 'Cell b2'
      },
      {
        campoType: 'default',
        label: 'Cell b3'
      }
    ],
    [
      {
        campoType: 'icon',
        label: 'alarm'
      },
      {
        campoType: 'default',
        label: 'Cell c1'
      },
      {
        campoType: 'default',
        label: 'Cell c2'
      },
      {
        campoType: 'default',
        label: 'Cell c3'
      }
    ]
  ]
}

export const InputTable = Template.bind({})
InputTable.args = {
  headLabels: ['Icon', 'Head1', 'Head2', 'Head3'],
  bodyContent: [
    [
      {
        campoType: 'icon',
        label: 'android'
      },
      {
        campoType: 'input',
        type: 'radio',
        label: 'Cell a1',
        name: 'option1'
      },
      {
        campoType: 'input',
        type: 'radio',
        label: 'Cell a2',
        name: 'option1'
      },
      {
        campoType: 'input',
        type: 'radio',
        label: 'Cell a3',
        name: 'option1'
      }
    ],
    [
      {
        campoType: 'icon',
        label: 'api'
      },
      {
        campoType: 'input',
        type: 'radio',
        label: 'Cell b1',
        name: 'option2'
      },
      {
        campoType: 'input',
        type: 'radio',
        label: 'Cell b2',
        name: 'option2'
      },
      {
        campoType: 'input',
        type: 'radio',
        label: 'Cell b3',
        name: 'option2'
      }
    ],
    [
      {
        campoType: 'icon',
        label: 'alarm'
      },
      {
        campoType: 'input',
        type: 'checkbox',
        label: 'Cell c1',
        name: 'option3'
      },
      {
        campoType: 'input',
        type: 'checkbox',
        label: 'Cell c2',
        name: 'option4'
      },
      {
        campoType: 'input',
        type: 'checkbox',
        label: 'Cell c3',
        name: 'option5'
      }
    ]
  ]
}
