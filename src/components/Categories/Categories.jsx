import { useSelector } from 'react-redux';
import svg from '../../images/icons_expenses_sprite.svg';
import styledComponents from './CategoriesStyled';
import { selectTransactionsPerPeriod,  selectType } from 'redux/transactions/transactions-selectors';
import { useDispatch } from 'react-redux';
import { setCategoryAction, setTypeAction } from 'redux/transactions/transactions-slice';
import translate from 'helpers/translate';

const {
  ListOfBalanceChanges,
  ItemOfBalanceChanges,
  TitleOfBalanceChanges,
  SvgBoxStyle,
  BtnToggleStats,
  BoxForSvg,
} = styledComponents;

export const Categories = () => {
  const dispatch = useDispatch();
  const statistics = useSelector(selectTransactionsPerPeriod);
  const selectedType = useSelector(selectType);
  console.log(statistics);
  let filteredDataByType = null;

  if (statistics){
    filteredDataByType = selectedType === "incomes" ? statistics.incomes : statistics.expenses;
  }

  function dataByCategories(filteredData){    
    let dataLikeObject = null;   
    if (!filteredData){
      return [];
    }   
    let entries = null;   
    dataLikeObject = selectedType === "incomes" ? filteredData.incomesData : filteredData.expensesData;
    entries = Object.entries(dataLikeObject);
    entries.sort((a,b) => a[1].total > b[1].total);  
 
    return entries;
  };
  
  const valuesAndKeys = dataByCategories(filteredDataByType);

  const formating = data => {
    const fixedData = data.toFixed(2);
    if (data < 10) return '0' + fixedData;

    const dividedData = fixedData.split('.');

    const spacedData = Number(dividedData[0])
      .toLocaleString()
      .split(',')
      .join(' ');
    return spacedData + '.' + dividedData[1];
  };
    
  const onChangeTypeData = () => {
    selectedType === "incomes" ? dispatch(setTypeAction("expenses")) : dispatch(setTypeAction("incomes"));    
      
  };

  const onItemClick = event => {    
    dispatch(setCategoryAction(event.currentTarget.id));     
  };

  return (
    <>     
      <div>
        <BtnToggleStats type="button" onClick={onChangeTypeData}>
          <svg width="10" height="10" >
            <use href={`${svg}#arrow_left`} />
          </svg>
        </BtnToggleStats>
        <TitleOfBalanceChanges>{selectedType}</TitleOfBalanceChanges>
        <BtnToggleStats type="button" onClick={onChangeTypeData}>
          <svg width="10" height="10">
            <use href={`${svg}#arrow_right`} />
          </svg>
        </BtnToggleStats>
      </div>
      {valuesAndKeys ? 
        (<ListOfBalanceChanges> 
          {valuesAndKeys.map(value => 
              {
                return <ItemOfBalanceChanges onClick={onItemClick} id={value[0]}>
                  <p>{formating(value[1].total)}</p>
                  <BoxForSvg>
                    {' '}
                    <SvgBoxStyle>
                      <use href={`${svg}#${translate[value[0]]}`} />
                    </SvgBoxStyle>
                  </BoxForSvg>
                  <p>{translate[value[0]]}</p>
                </ItemOfBalanceChanges>
              }
            )
          }
        </ListOfBalanceChanges>
        ) : (
        <TitleOfBalanceChanges>"No data to display!"</TitleOfBalanceChanges>
        )
      }   
    </>
  );
};
