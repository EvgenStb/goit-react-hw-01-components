import PropTypes from 'prop-types';

import { TableString } from "./TransactionHistory.styled"

export const TransactionString = ({type, amount, currency}) => {
    return (<TableString>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
    </TableString>)
}

TransactionString.propTypes = {
    type:PropTypes.string.isRequired,
    amount:PropTypes.string.isRequired,
    currency:PropTypes.string.isRequired,
}