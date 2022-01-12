import React from 'react'
import { Accordion, AsideNav, Button, Card, Carrousel, Col, Dropdown, Graphics, InputAction, InputControl, InputField, Link, Modal, Multimedia, PanelTabs, Row, Select, Table, TabPanel, Text, Textarea, Tooltip, Video } from 'ui-components'
import 'ui-components/dist/index.css'
import css from './index.module.css'


const App = () => {
  // console.log(Accordion)
  return (
    <div className={css.main}>
      <div className={css.item}>
        <h1 className={css.title}>Buttons</h1>
        <div className={css.content}>
          <Button label='Button' />
          <Button label='Disabled' disabled />
          <Button
            addClass={css['btn-prueba']}
            styled='secondary'
            label='Secondary button'
            icon='account_balance_wallet'
          />
          <Button styled='secondary-outline' label='Secondary outline' />
          <Button
            styled='primary-outline'
            label='Prymary outline'
            icon='account_balance_wallet'
          />
          <Button
            styled='primary-outline'
            label='Outline disabled'
            icon='account_balance_wallet'
            disabled
          />
          <Button styled='primary-icon' icon='account_balance_wallet' />
          <Button styled='secondary-icon-outline' icon='favorite' />
        </div>
      </div>
      <div className={css.item}>
        <h1 className={css.title}>Input Field</h1>
        <div className={css.content}>
          <InputField label='Nombre' type='text' value="Luisa"/>
          <InputField label='apellido' type='text'/>
          <InputField label='Edad' type='number' />
          <InputField label='Password' type='password' />
          <InputField label='email' type='email' />
          <InputField label='Disabled' type='text' disabled />
        </div>
      </div>
      <div className={css.item}>
        <h1 className={css.title}>Input Checkbox</h1>
        <div className={css.content}>
          <InputControl label='Check 1' type='checkbox' />
          <InputControl label='Check 2' type='checkbox' />
          <InputControl label='Disabled' type='checkbox' disabled />
        </div>
      </div>
      <div className={css.item}>
        <h1 className={css.title}>Input Radio</h1>
        <div className={css.content}>
          <InputControl label='Radio 1' type='radio' name='name_1' />
          <InputControl label='Radio 2' type='radio' name='name_1' />
          <InputControl label='Disabled' type='radio' name='name_1' disabled />
        </div>
      </div>
      <div className={css.item}>
        <h1 className={css.title}>Input Special</h1>
        <div className={css.content}>
          <InputControl label='Toggle' type='toggle' name='name_1' />
          <InputControl
            label='Toggle disabled'
            type='toggle'
            name='name_1'
            disabled
          />
          <div>
            <InputAction
              icon='upload'
              label='Upload file'
              styled='secondary'
              type='file'
            />
          </div>
          <div>
            <InputAction
              icon='palette'
              label='Select color'
              styled='primary-outline'
              type='color'
            />
          </div>
          <div>
            <InputAction icon='upload' styled='secondary-icon' type='file' />
          </div>
          <div>
            <InputAction
              icon='upload'
              label='Upload file'
              styled='secondary'
              type='file'
              disabled
            />
          </div>
        </div>
      </div>
      <div className={css.item}>
        <h1 className={css.title}>Select</h1>
        <div className={css.content}>
          <Select options={['name', 'value']} name='foo'></Select>
          <Select options={['name', 'value']} name='foo' disabled></Select>
        </div>
      </div>
      <div className={css.item}>
        <h1 className={css.title}>Panel Tabs</h1>
        <div className={css.content}>
          <PanelTabs></PanelTabs>
        </div>
      </div>
      <div className={css.item}>
        <h1 className={css.title}>Modal</h1>
        <div className={css.content}>
          <Modal
            dataButton={{ label: 'Modal', styled: 'primary' }}
            title='Modal'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, porro, ad nihil esse nemo eum, tenetur pariatur a exercitationem ab cumque est necessitatibus fuga tempore ipsum vitae dolores impedit quae!'
          />
        </div>
      </div>
      <div className={css.item}>
        <h1 className={css.title}>Side nav</h1>
        <div className={css.content}>
          <AsideNav
            dataButton={{ label: 'Side nav', styled: 'primary' }}
            content={{
              title: 'Aside Nav',
              list: ['List 1', 'List 2', 'List3']
            }}
          />
        </div>
      </div>
      <div className={css.item}>
        <h1 className={css.title}>Card Basic</h1>
        <div className={css.content}>
          <Card content={{ title: 'Card Title', text: 'Secondary Text' }} />
        </div>
      </div>
      <div className={css.item}>
        <h1 className={css.title}>Card Image</h1>
        <div className={css.content}>
          <Card
            image={{
              state: true,
              url:
                'https://images.pexels.com/photos/290470/pexels-photo-290470.jpeg?cs=srgb&dl=pexels-pixabay-290470.jpg&fm=jpg',
              alt: 'image'
            }}
            content={{ title: 'Card Title', text: 'Secondary Text' }}
          />
        </div>
      </div>
      <div className={css.item}>
        <h1 className={css.title}>Card with Image and Text</h1>
        <div className={css.content}>
          <Card
            image={{
              state: true,
              url:
                'https://images.pexels.com/photos/290470/pexels-photo-290470.jpeg?cs=srgb&dl=pexels-pixabay-290470.jpg&fm=jpg',
              alt: 'image'
            }}
            content={{ title: 'Card Title', text: 'Secondary Text' }}
            supportingText='Greyhound divisively hello coldly wonderfully marginally far upon excluding.'
          />
        </div>
      </div>
      <div className={css.item}>
        <h1 className={css.title}>Card with Image, Text and action</h1>
        <div className={css.content}>
          <Card
            image={{
              state: true,
              url:
                'https://images.pexels.com/photos/290470/pexels-photo-290470.jpeg?cs=srgb&dl=pexels-pixabay-290470.jpg&fm=jpg',
              alt: 'image'
            }}
            content={{ title: 'Card Title', text: 'Secondary Text' }}
            supportingText='Greyhound divisively hello coldly wonderfully marginally far upon excluding.'
            buttons={{
              state: true,
              first: { label: 'Action 1', theme: 'primary' },
              secundary: { label: 'Action 2', theme: 'primary' }
            }}
          />
        </div>
      </div>
      <div className={css.item}>
        <h1 className={css.title}>Accordion</h1>
        <div className={css.content}>
          <Accordion
            width='300px'
            content={[
              {
                title: 'Example 1',
                text:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, porro, ad nihil esse nemo eum, ',
                dataIcon: 'filter_drama'
              },
              {
                title: 'Example 2',
                text:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, porro, ad nihil esse nemo eum, ',
                dataIcon: 'place'
              },
              {
                title: 'Example 3',
                text:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, porro, ad nihil esse nemo eum, ',
                dataIcon: 'whatshot'
              }
            ]}
          />
        </div>
      </div>
      <div className={css.item}>
        <h1 className={css.title}>Textarea</h1>
        <div className={css.content}>
          <Textarea placeholder='Escribe aquí...' rows='10' value='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, porro, ad'></Textarea>
        </div>
      </div>
      <div className={css.item}>
        <h1 className={css.title}>Textarea count</h1>
        <div className={css.content}>
          <Textarea
            placeholder='Escribe aquí...'
            rows='10'
            maxWords='15'
          ></Textarea>
        </div>
      </div>
      <div className={css.item}>
        <h1 className={css.title}>Carrousel</h1>
        <div className={css.content}>
          <Carrousel>
            <TabPanel>
              <Card
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
        </div>
      </div>
      <div className={css.item}>
        <h1 className={css.title}>Tooltip</h1>
        <div className={css.content}>
          <Tooltip label='Primary'>
            <Button styled='primary' label='Button'></Button>
          </Tooltip>
          <Tooltip label='Secondary'>
            <Button styled='secondary' label='Button'></Button>
          </Tooltip>
        </div>
      </div>
      <div className={css.item}>
        <h1 className={css.title}>Dropdown</h1>
        <div className={css.content}>
          <Dropdown />
        </div>
      </div>
      <div className={css.item}>
        <h1 className={css.title}>Link</h1>
        <div className={css.content}>
          <Link
            label='Esto es un link de ejemplo'
            href='el_link'
            target='_blank'
          />
        </div>
      </div>
      <div className={css.item}>
        <h1 className={css.title}>Typography</h1>
        <div className={css.content} style={{ justifyItems: 'normal' }}>
          <Text type='h1' label='' text-align='center'>
            h1-txt
          </Text>
          <Text type='h2'>h2-txt</Text>
          <Text type='h3' label=''>
            h3-txt
          </Text>
          <Text type='h4'>h4-txt</Text>
          <Text type='h5' text-align='right'>
            h5-txt whith ta-r
          </Text>
          <Text type='h6' text-align='center'>
            h6-txt whith ta-c
          </Text>
          <Text type='subtitle'>
            <b>Subtitle:</b> Lorem ipsum dolor sit amet
          </Text>
          <Text type='caption'>
            <b>Caption:</b> Lorem ipsum dolor sit amet
          </Text>
          <Text type='span'>
            <b>Span:</b> Lorem ipsum dolor sit amet
          </Text>
          <Text type='p'>
            <b>Paragraph:</b> Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore
          </Text>
        </div>
      </div>
      <div className={css.item}>
        <h1 className={css.title}>Grafica Bar</h1>
        <div className={css.content}>
          <Graphics
            width={'300px'}
            height={'300px'}
            chartType={'ColumnChart'}
            data={[
              ['City', '2010 Population', '2000 Population'],
              ['New York City, NY', 8175000, 8008000],
              ['Los Angeles', 3792000, 3694000],
              ['Chicago, IL', 2695000, 2896000]
            ]}
            options={{
              title: 'Population of Largest U.S Cities',
              chartArea: { width: '50%' },
              hAxis: {
                title: 'Total population',
                minValue: 0
              },
              vAxis: {
                title: 'City'
              }
            }}
          />
        </div>
      </div>
      <div className={css.item}>
        <h1 className={css.title}>Grafica Area</h1>
        <div className={css.content}>
          <Graphics
            width={'300px'}
            height={'300px'}
            chartType='AreaChart'
            data={[
              ['Yeaar', 'Sales', 'Expenses'],
              ['2013', 1000, 400],
              ['2014', 1170, 460],
              ['2015', 660, 1120]
            ]}
            options={{
              title: 'Company Performance'
            }}
          />
        </div>
      </div>
      <div className={css.item}>
        <h1 className={css.title}>Table Icon</h1>
        <div className={css.content}>
          <Table
            headLabels={['Icon', 'Head1', 'Head2', 'Head3']}
            bodyContent={[
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
            ]}
          />
        </div>
      </div>
      <div className={css.item}>
        <h1 className={css.title}>Table Input</h1>
        <div className={css.content}>
          <Table
            headLabels={['Icon', 'Head1', 'Head2']}
            bodyContent={[
              [
                {
                  campoType: 'icon',
                  label: 'android'
                },
                {
                  campoType: 'input',
                  type: 'radio',
                  label: 'a1',
                  name: 'option1'
                },
                {
                  campoType: 'input',
                  type: 'radio',
                  label: 'a2',
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
                  label: 'b1',
                  name: 'option2'
                },
                {
                  campoType: 'input',
                  type: 'radio',
                  label: 'b2',
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
                  label: 'c1',
                  name: 'option3'
                },
                {
                  campoType: 'input',
                  type: 'checkbox',
                  label: 'c2',
                  name: 'option4'
                }
              ]
            ]}
          />
        </div>
      </div>
      <div className={css.item}>
        <h1 className={css.title}>Multimedia</h1>
        <div className={css.content}>
          <Multimedia
            type='audio'
            url='https://s3-us-west-2.amazonaws.com/s.cdpn.io/33378/soundcloud-austin-stephens-Auto_Tuned_Native_American_Flute.mp3'
          />
          <Multimedia
            type='audio'
            url='https://s3-us-west-2.amazonaws.com/s.cdpn.io/33378/soundcloud-austin-stephens-Auto_Tuned_Native_American_Flute.mp3'
            label='Audio'
          />
          <Multimedia
            type='video'
            url='https://storage.googleapis.com/cedoc360extencion/a_english_multimedia/a1/module_1/videos/a1m1a-ae_vid_1.mp4'
            width='280px'
          />
        </div>
      </div>
      <div className={css.item}>
        <h1 className={css.title}>Video</h1>
        <div className={css.content}>
          <Video url='https://storage.googleapis.com/cedoc360extencion/a_english_multimedia/a1/module_1/videos/a1m1a-ae_vid_1.mp4' width='600px' />
        </div>
      </div>
      <div className={[css.item, css.full].join(' ')}>
        <h1 className={css.title}>Layout</h1>
        <div className={css.content}>
          <Row flex='true' align-items='center' justify-content='center'>
            <Col xs='12' sm='6' md='3'>
              Col 1
            </Col>
            <Col xs='12' sm='6' md='3'>
              Col 2
            </Col>
            <Col xs='12' sm='6' md='3'>
              Col 3
            </Col>
            <Col xs='12' sm='6' md='3'>
              Col 4
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default App
