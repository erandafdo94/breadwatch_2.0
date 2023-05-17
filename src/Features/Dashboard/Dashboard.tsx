import React from 'react'
import { Grid } from 'semantic-ui-react'
import { MainCards } from './mainCards/MainCards'



export const Dashboard = () => {
  return (
    <Grid>
      <Grid.Column width ='16'>
       <MainCards></MainCards>
      </Grid.Column>
    </Grid>
    
  )
}
