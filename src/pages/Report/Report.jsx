import React from 'react'
// import BalanceReports from 'components/Balance/BalanceReports'

import Container from 'components/Container/Container'
import { Chart } from 'components/Chart/Chart'
import ReportsBalance from 'components/ReportsBalance/ReportsBalance'

export const Report = () => {
  return (
    <Container>
        <ReportsBalance /> 
      <Chart />
    </Container>
  )

}
  // <BalanceReports />