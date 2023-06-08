import React from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'

export const NavBar = () => {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>
          <img src="/assets/logo.png" alt="logo"></img>
        </Menu.Item>


        <Menu.Menu position='right'>
          <Menu.Item>
          <Button content='Add-Transaction' icon='plus' labelPosition='left' />
          </Menu.Item>
          <Menu.Item>
            <Button primary>Sign-in</Button>
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  )
}

