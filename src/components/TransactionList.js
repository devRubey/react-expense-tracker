import React, { use, useContext } from 'react';
import { Tranaction } from './Transaction';

import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const { transactions } =useContext(GlobalContext);
 

  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {transactions.map(transaction => (<Tranaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  )
}
