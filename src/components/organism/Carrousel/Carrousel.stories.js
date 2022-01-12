import React from 'react'
import { TabPanel } from '../../atoms'
import { Card } from '../../molecules'
import { Carrousel } from './'

export default {
  title: 'Organism/Carrousel',
  componenet: Carrousel
}

// const Template = (args) => <Carrousel {...args} />

export const CarrouselDefault = () => (
  <Carrousel>
    <TabPanel>
      <Card
        width='350px'
        image={{
          state: true,
          url:
            'https://images.pexels.com/photos/290470/pexels-photo-290470.jpeg?cs=srgb&dl=pexels-pixabay-290470.jpg&fm=jpg',
          alt: 'image'
        }}
        content={{ title: 'Card 1', text: 'Secondary Text' }}
      />
    </TabPanel>
    <TabPanel>
      <Card
        width='350px'
        image={{
          state: true,
          url:
            'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?cs=srgb&dl=pexels-pixabay-164634.jpg&fm=jpg',
          alt: 'image'
        }}
        content={{ title: 'Card 2', text: 'Secondary Text' }}
      />
    </TabPanel>
    <TabPanel>
      <Card
        width='350px'
        image={{
          state: true,
          url:
            'https://images.pexels.com/photos/290470/pexels-photo-290470.jpeg?cs=srgb&dl=pexels-pixabay-290470.jpg&fm=jpg',
          alt: 'image'
        }}
        content={{ title: 'Card 3', text: 'Secondary Text' }}
      />
    </TabPanel>
    <TabPanel>
      <Card
        width='350px'
        image={{
          state: true,
          url:
            'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?cs=srgb&dl=pexels-pixabay-164634.jpg&fm=jpg',
          alt: 'image'
        }}
        content={{ title: 'Card 4', text: 'Secondary Text' }}
      />
    </TabPanel>
    <TabPanel>
      <Card
        width='350px'
        image={{
          state: true,
          url:
            'https://images.pexels.com/photos/290470/pexels-photo-290470.jpeg?cs=srgb&dl=pexels-pixabay-290470.jpg&fm=jpg',
          alt: 'image'
        }}
        content={{ title: 'Card 5', text: 'Secondary Text' }}
      />
    </TabPanel>
    <TabPanel>
      <Card
        width='350px'
        image={{
          state: true,
          url:
            'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?cs=srgb&dl=pexels-pixabay-164634.jpg&fm=jpg',
          alt: 'image'
        }}
        content={{ title: 'Card 6', text: 'Secondary Text' }}
      />
    </TabPanel>
  </Carrousel>
)
