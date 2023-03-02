import React from 'react'
import BalanceReports from 'components/Balance/BalanceReports'

import Container from 'components/Container/Container'
import { Chart } from 'components/Chart/Chart'

export const Report = () => {
  return (
    <Container>
      <BalanceReports/>
      <Chart />
    </Container>
  )

}
 /* <ReportsBalance /> */