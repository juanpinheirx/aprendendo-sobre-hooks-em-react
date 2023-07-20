/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

function User({ user, age }) {

  // aqui usaremos o hook useEffect que, como o nome sugere, retorna um efeito para o componente.

  useEffect(() => {
    // aqui, o useEffect se comporta tal como o componentDidMount. ele renderiza na tela elementos depois do retorno, o que possibilita a realização de fetchs. para isso vale sempre lembrar que o useEffect recebe dois argumentos por ser uma função, sendo o segundo retorno fazer possível com que a chamada de api não seja chamada sempre que o componente montar.
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
      setAdvice(data.slip.advice); 
    })
  }, [])

  // agora vou utilizar a última forma do useEffect. sendo esta a realização de updates na página de acordo com um tempo.

  useEffect(() => {
    setInterval(() => {
      document.title = (new Date()).toLocaleTimeString();
    }, 1000)

    return () => {
      clearInterval()
    }

  }, []); 

  // e como eu posso manipular os elementos deste componente de forma que, usando também o useState, posso definir valores iniciais para desestruturá-los dentro do componente?

  const [advice, setAdvice] = useState('')

  return (
    <>
      <h1>Olá {user}</h1>
      <h1>Qual é sua idade?</h1>
      <h5>{age}</h5>
      <p>{advice}</p>
    </>
  );
}

export default User;
