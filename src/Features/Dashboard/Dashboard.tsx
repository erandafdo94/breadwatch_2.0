import React from "react";
import { Grid, GridColumn, GridRow, Header, Icon, Segment } from "semantic-ui-react";
import { MainCards } from "./MainCards/mainCards";
import { Budget } from "./BudgetsCard/budgetCard";

const d = new Date();
let month = d.getMonth();

export const Dashboard = () => (



  <Grid columns={2} padded>

    <GridRow>
      <Grid.Column width="16">
        
      <Header as="h3">
        <Icon size='mini' name="money bill alternate outline" />
        <Header.Content>
          Budgets
          <Header.Subheader>Bugdet-wise speding for {month}</Header.Subheader>
        </Header.Content>
      </Header>

        <MainCards></MainCards>
      </Grid.Column>
    </GridRow>

    <GridRow>
      
      <GridColumn width="6">
        
      <Header as="h3" style={{marginTop: '1rem'}}>
        <Icon size='mini' name="money bill alternate outline" />
        <Header.Content>
          Charts
          <Header.Subheader>Detals for {month}</Header.Subheader>
        </Header.Content>
      </Header>

      <Segment>
      <Budget></Budget>
      </Segment>
      </GridColumn>
      
      
      <GridColumn width="10">

      <Header as="h3" style={{marginTop: '1rem'}}>
        <Icon size='mini' name="money bill alternate outline" />
        <Header.Content>
          Budgets
          <Header.Subheader>Bugdet-wise speding for May</Header.Subheader>
        </Header.Content>
      </Header>

      <Segment>
        <Budget></Budget>
        </Segment>
      </GridColumn>
      
    </GridRow>

    <GridRow>
      
      <GridColumn width="16">
        
      <Header as="h3" style={{marginTop: '1rem'}}>
        <Icon size='mini' name="money bill alternate outline" />
        <Header.Content>
          Charts
          <Header.Subheader>Recent Transaction</Header.Subheader>
        </Header.Content>
      </Header>

      <Segment>
      <Budget></Budget>
      </Segment>
      </GridColumn>
      
      
      
      
    </GridRow>

  </Grid>
);
