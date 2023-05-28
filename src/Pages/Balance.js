import React, { useEffect, useState } from 'react';

const Balance = () => {
  const [balance, setBalance] = useState(null);
  const customerId = '6472d64a9683f20dd5187afa'; // Replace with the actual customer ID

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.nessieisreal.com/accounts?key=41e981e3951c9176dff688f772c09de5');
        const data = await response.json();

        const customerAccount = data.find(account => account.customer_id === customerId);
        if (customerAccount) {
          setBalance(customerAccount.balance);
        }
      } catch (error) {
        console.log('Error fetching balance:', error);
      }
    };

    fetchData();
  }, [customerId]);

  return (
    <div>
      <h2>Customer Balance</h2>
      {balance !== null ? (
        <p>The current balance is: {balance}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Balance;
