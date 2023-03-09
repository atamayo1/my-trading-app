import React from 'react';

const QuoteTable = ({ quotes }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Último precio</th>
          <th>Variación</th>
          <th>Vol. (24h)</th>
        </tr>
      </thead>
      <tbody>
        {quotes.map((quote) => (
          <tr key={quote.id}>
            <td>{quote.name}</td>
            <td>{quote.price}</td>
            <td>{quote.variation}%</td>
            <td>{quote.volume}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default QuoteTable;
