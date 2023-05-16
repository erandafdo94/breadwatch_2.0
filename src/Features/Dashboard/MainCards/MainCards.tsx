import React from "react";
import { Grid, Statistic } from "semantic-ui-react";

export const MainCards = () => {
  return (
    <Grid columns={3} divided>
      <Grid.Row>
        <Grid.Column>
          <Statistic>
            <Statistic.Value>$5000</Statistic.Value>
            <Statistic.Label>Net Worth</Statistic.Label>
          </Statistic>
        </Grid.Column>
        <Grid.Column>
          <Statistic>
            <Statistic.Value>$500</Statistic.Value>
            <Statistic.Label>Expenses</Statistic.Label>
          </Statistic>
        </Grid.Column>
        <Grid.Column>
          <Statistic>
            <Statistic.Value>$700</Statistic.Value>
            <Statistic.Label>Income</Statistic.Label>
          </Statistic>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
