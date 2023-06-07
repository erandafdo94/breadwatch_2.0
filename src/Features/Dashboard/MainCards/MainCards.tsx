import React, { useEffect, useState } from "react";
import { Card, Grid, Segment, Statistic } from "semantic-ui-react";
import agent from "../../../app/api/agent";
import { MonthlyIncomeExpenseStats } from "../../../app/models/monthlyIncomeExpenseStats";



export const MainCards = () => {
  const[incomeExpenseStats, setIncomeExpenseStats] = useState<MonthlyIncomeExpenseStats>();

  useEffect(() => {
    agent.Accounts.stats(1).then(res => {
      console.log(res);
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
              <Statistic.Value>$ {incomeExpenseStats?.monthlyIncome}</Statistic.Value>
              <Statistic.Label>Income last 30 days</Statistic.Label>
            </Statistic>
          </Segment>
        </Grid.Column>

        <Grid.Column>
          <Segment >
            <Statistic>
              <Statistic.Value>$ {incomeExpenseStats?.monthlyExpense}</Statistic.Value>
              <Statistic.Label>Expense last 30 days</Statistic.Label>
            </Statistic>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
