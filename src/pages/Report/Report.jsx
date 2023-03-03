import React from 'react'
import BalanceReports from 'components/Balance/BalanceReports'

import Container from 'components/Container/Container'
import { Chart } from 'components/Chart/Chart'
import ReportsBalance from 'components/TotalReportsBalance/TotalReportsBalance'

export const Report = () => {
  return (
    <Container>
      <BalanceReports /> 
         < ReportsBalance />
      <Chart />
    </Container>
  )

}
  // <BalanceReports />
