import { useState } from "react";

export default function App() {
  const [valores, setValores] = useState(["", "", "", ""]);
  const [media, setMedia] = useState(null);
  const [status, setStatus] = useState("");

  const handleChange = (index, value) => {
    const newValores = [...valores];
    newValores[index] = value;
    setValores(newValores);
  };

  const calcularMedia = () => {
    const numeros = valores.map(Number);
    if (numeros.some(isNaN)) {
      alert("Por favor, insira apenas números válidos.");
      return;
    }
    const soma = numeros.reduce((acc, num) => acc + num, 0);
    const novaMedia = soma / 4;
    setMedia(novaMedia.toFixed(2));
    setStatus(novaMedia >= 6 ? "Aprovado" : "Reprovado");
  };

  return (
    <div className="container">
      <h2>Calculadora de Média</h2>
      <div className="inputs">
        {valores.map((valor, index) => (
          <input
            key={index}
            type="number"
            value={valor}
            onChange={(e) => handleChange(index, e.target.value)}
            placeholder={`Nota ${index + 1}`}
          />
        ))}
      </div>
      <button onClick={calcularMedia}>Calcular Média</button>
      {media !== null && (
        <div className="resultado">
          <p>Média: {media}</p>
          <p className={status === "Aprovado" ? "aprovado" : "reprovado"}>{status}</p>
        </div>
      )}
      <style>{`
        .container {
          text-align: center;
          margin-top: 50px;
          font-family: Arial, sans-serif;
        }
        .inputs input {
          margin: 5px;
          padding: 8px;
          width: 80px;
          text-align: center;
        }
        button {
          margin-top: 10px;
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          border: none;
          cursor: pointer;
          border-radius: 5px;
        }
        .resultado {
          margin-top: 20px;
          font-size: 18px;
          font-weight: bold;
        }
        .aprovado {
          color: green;
        }
        .reprovado {
          color: red;
        }
      `}</style>
    </div>
  );
}
