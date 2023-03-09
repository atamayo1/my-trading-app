import React from 'react';

const HistoryOperations = ({ history }) => {
  return (
    <div className="historial">
      <h2>Historial de operaciones</h2>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Tipo de operación</th>
            <th>Instrumento</th>
            <th>Cantidad</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {history.map((operation) => (
            <tr key={operation.id}>
              <td>{operation.fecha}</td>
              <td>{operation.tipoOperacion}</td>
              <td>{operation.instrumento}</td>
              <td>{operation.cantidad}</td>
              <td>{operation.precio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryOperations;
