function Letreiro() {
    const [texto, setTexto] = React.useState('');
    const frase = "Venha estudar na Fatec !!!";
    const velocidade = 170; // Velocidade de digitação em milissegundos
  
    React.useEffect(() => {
      let index = 0;
      const intervalo = setInterval(() => {
        if (index < frase.length) {
          setTexto((prev) => prev + frase[index]);
          index++;
        } else {
          clearInterval(intervalo);
        }
      }, velocidade);
  
      return () => clearInterval(intervalo);
    }, []);
  
    return (
      <div className="caixa">
        <div className="letreiro">
          {texto}
        </div>
      </div>
    );
  }
  
  ReactDOM.render(<Letreiro />, document.getElementById('root'));