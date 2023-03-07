import PropTypes from 'prop-types';
import { Tabel, TableHead, TableString } from './TransactionHistory.styled';

export default function TransactionHistory({ transactions }) {
  const tableString = transactions.map(({ id, type, amount, currency }) => {
    return (
      <TableString key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </TableString>
    );
  });
  return (
    <Tabel className="transaction-history">
      <TableHead>
        <tr>
          <th>TYPE</th>
          <th>AMOUNT</th>
          <th>CURRENCY</th>
        </tr>
      </TableHead>
      <tbody>{tableString}</tbody>
    </Tabel>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id:PropTypes.string.isRequired,
      type:PropTypes.string.isRequired,
      amount:PropTypes.string.isRequired,
      currency:PropTypes.string.isRequired,
    })
  ),
};
