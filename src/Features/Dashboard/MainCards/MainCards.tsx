import React, { useEffect } from "react";
import { Card, Grid, Segment, Statistic } from "semantic-ui-react";
import agent from "../../../app/api/agent";



export const MainCards = () => {
  

  useEffect(() => {
    agent.Accounts.stats().then(res => {

    })
  })

  return (
    <Grid columns={3}>
      <Grid.Row>
        <Grid.Column>
          <Segment>
            <Statistic>
              <Statistic.Value>$5000</Statistic.Value>
              <Statistic.Label>Net Worth</Statistic.Label>
            </Statistic>
          </Segment>
        </Grid.Column>

        <Grid.Column>
          <Segment>
            <Statistic >
              <Statistic.Value>$5000</Statistic.Value>
              <Statistic.Label>Net Worth</Statistic.Label>
            </Statistic>
          </Segment>
        </Grid.Column>

        <Grid.Column>
          <Segment >
            <Statistic>
              <Statistic.Value>$5000</Statistic.Value>
              <Statistic.Label>Net Worth</Statistic.Label>
            </Statistic>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
