import PropTypes from 'prop-types';
import { TransactionString } from './TransactionString';
import { Tabel, TableHead} from './TransactionHistory.styled';

export default function TransactionHistory({ transactions }) {
  // const tableString = transactions.map(({ id, type, amount, currency }) => {
  //   return (
  //     <TableString key={id}>
  //       <td>{type}</td>
  //       <td>{amount}</td>
  //       <td>{currency}</td>
  //     </TableString>
  //   );
  // });
  return (
    <Tabel className="transaction-history">
      <TableHead>
        <tr>
          <th>TYPE</th>
          <th>AMOUNT</th>
          <th>CURRENCY</th>
        </tr>
      </TableHead>
      <tbody>{transactions.map((transaction) => {
        return (<TransactionString key={transaction.id}
        type = {transaction.type}
        amount = {transaction.amount}
        currency = {transaction.currency}/>)}
        )}</tbody>
    </Tabel>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.array,
  
};
