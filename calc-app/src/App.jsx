import { useState } from "react";

const App = () => {
  // estado para controlar o visor do usuário
  const [visor, setVisor] = useState("Insira um número");

  // digitos da calculadora
  const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  // estado das partes das parcelas/produtos
  const [part1, setPart1] = useState("");
  const [part2, setPart2] = useState("");

  // estado do operador
  const [operator, setOperator] = useState(false);

  // Função para somar
  function getNumber(value) {
    console.log("Clicou em: ", value);

    setPart1((prev) => {
      // verifica se usuário ainda não clicou, então ta na primeira parcela
      if (!operator) {
        // Caso especial: se ainda não tem nada digitado
        if (prev === "") {
          if (prev === "0") {
            // Primeiro número é 0 → deixa só um zero
            setVisor("0");
            return;
          } else {
            // Primeiro número começa com 0 → começa com este valor
            setVisor(value);
            return value;
          }
        }

        // Caso especial: se já é 0 e tenta colocar outro
        if (prev === "0") {
          if (value === "0") {
            // já tem zero → não adiciona mais
            setVisor("0");
            return "0";
          } else {
            // se for um número diferente de zero → substitui o zero inicial
            setVisor(value);
            return value;
          }
        }

        // Caso normal → concatena
        setVisor(prev + value);
        return prev + value;
      }
    });
  }

  return (
    <>
      <h1>Calculadora com React</h1>
      <input type="text" value={visor} readOnly />

      {number.map((num, index) => (
        <input
          key={index}
          type="button"
          value={num}
          onClick={() => getNumber(num)}
        />
      ))}

      <input
        type="button"
        value="AC"
        onClick={() => {
          setPart1("");
          setVisor("Insira um número");
          setOperator(false);
        }}
      />
    </>
  );
};

export default App;
