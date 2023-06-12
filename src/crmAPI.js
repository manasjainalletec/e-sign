import React, { useEffect, useState } from 'react';
import axios from 'axios';

function QuoteComponent() {
  const [quoteName, setQuoteName] = useState('');

  useEffect(() => {
    axios.get('https://chemtech-dev.api.crm4.dynamics.com/api/data/v9.2/quotes')
      .then(response => {
        const data = response.data;
        if (data && data.length > 0) {
          const firstQuote = data[0];
          const name = firstQuote.name;
          setQuoteName(name);
        }
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }, []);

  return (
    <div>
      <h1>First Quote Name: {quoteName}</h1>
    </div>
  );
}

export default QuoteComponent;
