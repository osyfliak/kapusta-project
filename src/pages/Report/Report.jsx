import React from 'react'
import BalanceReports from 'components/Balance/BalanceReports'

import Container from 'components/Container/Container'
import { Chart } from 'components/Chart/Chart'
import {Categories} from 'components/Categories/Categories'
import { useDispatch } from 'react-redux'
import { setCategoryAction } from 'redux/transactions/transactions-slice'
// import ReportsBalance from 'components/ReportsBalance/ReportsBalance'

export const Report = () => {
const dispatch = useDispatch();

const onClick=()=>{
 dispatch(setCategoryAction())
}
  return (
    <Container>
        <BalanceReports /> 
        <Categories onClick={onClick}/>
      <Chart />
    </Container>
  )

}
  // <BalanceReports />
