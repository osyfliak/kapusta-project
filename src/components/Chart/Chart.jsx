import  React from 'react';
//import { useEffect }  from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartContainerStyled from './ChartContainerStyled';
import { useSelector } from 'react-redux';
import { selectTransactionsPerPeriod, selectCategory, selectType } from 'redux/chart/transactions-selectors';
import { getOptions } from './ChartOptions';
import useWindowDimensions from './ChartHookWindowsDimenssions';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const colors = (labels) => {
  let sumIterations = 3;
  const primaryColor = '#FF751D';
  const secondaryColor = '#FFDAC0';
  return labels.map(index => {
    if (sumIterations === 3){
      sumIterations = 1;
      return primaryColor;
    }else{
      sumIterations += 1;
      return secondaryColor;
    }    
  });
}
export function Chart() {
  const { width } = useWindowDimensions();
    
  const selectedData = useSelector(selectTransactionsPerPeriod);
  const selectedType = useSelector(selectType);
  let selectedCategory = useSelector(selectCategory);
  let filteredDataByType = null;
  if (selectedData){
    filteredDataByType = selectedType === "incomes" ? selectedData.incomes : selectedData.expenses;
  }
  function filteredDataByCategory(filteredData){    
    let dataLikeObject = null;
    let values = [];
    let keys = [];
    if (!filteredData){
      return {keys, values};
    }   
    let entries = null;
    if (selectedCategory){
      dataLikeObject = filteredData.incomesData[selectedCategory];       
      entries = Object.entries(dataLikeObject).sort((a,b) => a[1] > b[1]);  
      entries.splice(0,1);      
      values = entries.map(value => value[1]);      
    }else{
      dataLikeObject = filteredData.incomesData; 
      entries = Object.entries(dataLikeObject).sort((a,b) => a[1].total > b[1].total);  
      values = entries.map(value => value[1].total);   
    }
    keys = entries.map(value => value[0]); 
  
    return {keys, values};
  };
 const valuesAndKeys = filteredDataByCategory(filteredDataByType);
 const labels = valuesAndKeys.keys;
  
  const data = {
    labels,
    datasets: [
      {
        label: '',
        data: valuesAndKeys.values,
        backgroundColor: colors(labels),
      }, 
    ],
  };
  
  const options = getOptions(width);
  const height = width < 425 ? 400 : 200;

  return <ChartContainerStyled> 
          <Bar key={1} options={options} height={height} width={320} data={data} /> 
        </ChartContainerStyled>;
}
