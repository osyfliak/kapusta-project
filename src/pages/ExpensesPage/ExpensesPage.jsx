import useMediaQuery from '@mui/material/useMediaQuery';
import FormExpenses from 'components/Form/FormExpenses';
import Table from 'components/Table/TableExpenses';

import { Summary } from '../../components/Summary/Summary';
import { Block, BoxColor } from './ExpensesPage.styled';

export default function ExpensesPage() {
  const isScreenTablet = useMediaQuery(
    '(min-width: 768px) and (max-width: 1279px)'
  );
  const isScreenDesktop = useMediaQuery('(min-width: 1280px)');
  return (
    <BoxColor>
      <FormExpenses />
      <Block>
        <Table />

        {isScreenDesktop && <Summary />}
      </Block>
      {isScreenTablet && <Summary />}
    </BoxColor>
  );
}
