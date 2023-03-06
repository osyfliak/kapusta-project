import useMediaQuery from '@mui/material/useMediaQuery';
import FormIncome from 'components/Form/FormIncome';
import { Summary } from 'components/Summary/Summary';
import TableIncome from '../../components/Table/TableIncome';

// import DenseTable from "components/TableBody/TableBody";
import { Block, BoxColor } from 'pages/Income/Income.styled';


export default function ExpensesPage() {
  const isScreenTablet = useMediaQuery(
    '(min-width: 768px) and (max-width: 1279px)'
  );
  const isScreenDesktop = useMediaQuery('(min-width: 1280px)');

  return (
    <BoxColor>
      <FormIncome />
      <Block>
        <TableIncome />

        {isScreenDesktop && <Summary />}
      </Block>
      {isScreenTablet && <Summary />}
    </BoxColor>
  );
}
