import React from 'react'
import { Container, Menu } from 'semantic-ui-react'

export const NavBar = () => {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>
          <img src="/assets/logo.png" alt="logo"></img>
        </Menu.Item>
      </Container>
    </Menu>
  )
}
