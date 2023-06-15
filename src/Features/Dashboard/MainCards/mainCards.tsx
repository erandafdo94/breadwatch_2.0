import React, { useEffect, useState } from "react";
import { Card, Grid, Segment, Statistic } from "semantic-ui-react";
import agent from "../../../App/Api/agent";
import { MonthlyIncomeExpenseStats } from "../../../App/Models/monthlyIncomeExpenseStats";
import { LoadingComponent } from "../../../App/Layout/loading";

export const MainCards = () => {
  const[incomeExpenseStats, setIncomeExpenseStats] = useState<MonthlyIncomeExpenseStats>({income:0, expense:0});
  const[loading, setLoading] = useState(true);

  useEffect(() => {
    const res = agent.Accounts.stats(1);
      agent.Accounts.stats(1).then(res => {
      setIncomeExpenseStats(res);
      setLoading(false);
     })
  },[])

  if(loading) return <LoadingComponent content='Loading app'/>

  return (
    <Grid columns={3}>
      <Grid.Row>
        <Grid.Column>
          <Segment>
            <Statistic>
              <Statistic.Value>$5000</Statistic.Value>
              <Statistic.Label> Worth</Statistic.Label>
            </Statistic>
          </Segment>
        </Grid.Column>

        <Grid.Column>
          <Segment>
            <Statistic >
              <Statistic.Value>$ {incomeExpenseStats.income}</Statistic.Value>
              <Statistic.Label>Income last 30 days</Statistic.Label>
            </Statistic>
          </Segment>
        </Grid.Column>

        <Grid.Column>
          <Segment >
            <Statistic>
              <Statistic.Value>$ {incomeExpenseStats.expense}</Statistic.Value>
              <Statistic.Label>Expense last 30 days</Statistic.Label>
            </Statistic>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
