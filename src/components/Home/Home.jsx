import React from "react";

const Home = ({ user }) => {
  return (
    <div className="container my-5">
      <h1 className="display-4 text-center mb-4">
        Bienvenido a My Trading App
      </h1>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="card-title">Dashboard</h2>
              <p className="card-text">
                Mantén un registro de tus operaciones y visualiza tus
                estadísticas en tiempo real.
              </p>
            </div>
            <div className="card-footer">
              <a href="/dashboard" className="btn btn-primary">
                Ver dashboard
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="card-title">Trades</h2>
              <p className="card-text">
                Realiza tus operaciones de manera segura y confiable con nuestra
                plataforma de trading.
              </p>
            </div>
            <div className="card-footer">
              <a href="/trades" className="btn btn-primary">
                Ir a trading
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
