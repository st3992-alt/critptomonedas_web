import { useState } from 'react';
import '../css/Formulario.css';

function Formulario() {
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMensaje('Formulario creado');
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <div className="campo">
        <label className="label" htmlFor="moneda">
          Moneda
        </label>

        <select className="select" id="moneda" defaultValue="">
          <option value="" disabled>
            Seleccione
          </option>
          <option value="USD">Dólar USD</option>
          <option value="MXN">Peso Mexicano MXN</option>
          <option value="EUR">Euro EUR</option>
          <option value="GBP">Libra Esterlina GBP</option>
        </select>
      </div>

      <div className="campo">
        <label className="label" htmlFor="criptomoneda">
          Criptomoneda
        </label>

        <select
          className="select"
          id="criptomoneda"
          defaultValue=""
        >
          <option value="">Seleccione</option>
        </select>
      </div>

      <button className="btn-cotizar" type="submit">
        Cotizar
      </button>

      {mensaje && <p>{mensaje}</p>}
    </form>
  );
}

export default Formulario;