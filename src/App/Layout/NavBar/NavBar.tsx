import React from 'react'
import { Button, Checkbox, Container, Dropdown, Form, Icon, Menu, Popup, Segment } from 'semantic-ui-react'

export const NavBar = () => {

  const options = [
    { key: 'angular', text: 'Angular', value: 'angular' },
    { key: 'css', text: 'CSS', value: 'css' },
    { key: 'design', text: 'Graphic Design', value: 'design' },
    { key: 'ember', text: 'Ember', value: 'ember' },
    { key: 'html', text: 'HTML', value: 'html' },
    { key: 'ia', text: 'Information Architecture', value: 'ia' },
    { key: 'javascript', text: 'Javascript', value: 'javascript' },
    { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
    { key: 'meteor', text: 'Meteor', value: 'meteor' },
    { key: 'node', text: 'NodeJS', value: 'node' },
    { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
    { key: 'python', text: 'Python', value: 'python' },
    { key: 'rails', text: 'Rails', value: 'rails' },
    { key: 'react', text: 'React', value: 'react' },
    { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
    { key: 'ruby', text: 'Ruby', value: 'ruby' },
    { key: 'ui', text: 'UI Design', value: 'ui' },
    { key: 'ux', text: 'User Experience', value: 'ux' },
  ]

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>
          <label>BreadWatch</label>
        </Menu.Item>


        <Menu.Menu position='right'>
          <Menu.Item>
            <Popup on='click' trigger={
              <Button icon labelPosition='right'>
                Add transaction
                <Icon name='plus' />
              </Button>
            } wide='very'>

              <Form>
                <Form.Field>
                  <label>Amount</label>
                  <input placeholder='$40' />
                </Form.Field>

                <Form.Field>
                  <label>Category</label>
                  <Dropdown fluid placeholder='Category' search selection options={options} >
                  </Dropdown>
                </Form.Field>

                <Form.Field>
                  <label>Account</label>
                  <Dropdown fluid placeholder='Category' search selection options={options} >
                  </Dropdown>
                </Form.Field>

                <Form.Field>
                  <label>Type</label>
                  <Dropdown fluid placeholder='Category' search selection options={options} >
                  </Dropdown>
                </Form.Field>

                <Button type='submit'>Submit</Button>
              </Form>
            </Popup>

            <Button primary style={{marginLeft: '10px'}}>Sign-in</Button>

          </Menu.Item>
     
        </Menu.Menu>
      </Container>
    </Menu>
  )
}

