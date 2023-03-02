import { BsTrash } from 'react-icons/bs';
import { DeleteBtn, TableBodyItem, TableBodyList } from './Table.styled';

export default function Table() {
  return (
    <TableBodyList>
      <TableBodyItem>1</TableBodyItem>
      <TableBodyItem>1</TableBodyItem>
      <TableBodyItem>1</TableBodyItem>
      <TableBodyItem>1</TableBodyItem>
      <TableBodyItem>
        <DeleteBtn>
          <BsTrash />
        </DeleteBtn>
      </TableBodyItem>
    </TableBodyList>
  );
}