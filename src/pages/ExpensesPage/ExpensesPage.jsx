import FormExpenses from 'components/Form/FormExpenses';
import Table from 'components/Table/TableExpenses';

import { Summary } from '../../components/Summary/Summary';
import { Block } from './ExpensesPage.styled';

export default function ExpensesPage() {





  return (
    <>
      <FormExpenses />
      <Block>
        <Table />

        <Summary />
      </Block>
    </>
  );
}
