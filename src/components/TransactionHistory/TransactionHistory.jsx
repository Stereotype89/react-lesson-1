import css from './TransactionHistory.css';

export const TransactionHistory = ({ props }) => {
  return (
    <>
      <table className="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        {props.map(item => {
          return (
            <tbody key={item.id}>
              <tr>
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
};
