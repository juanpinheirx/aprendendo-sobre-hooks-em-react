import { useState } from 'react'
import User from './User'
import context from './context/context'
import './App.css'

//é importante notar que o useState é a forma de se manipular o estado por meio de componentes funcionais. respectivamente, a função retorna primeiro o estado inicial, e depois a função que o manipulará. vale também notar que o useEffect tem a possibilidade de copiar o estado inicial, tornando-o imutável. assim, desta forma, pode-se manipular o estado sem mais problemas futuros e forma mais fácil.

function App() {
  const [count, setCount] = useState(0);
  const user = { name: "Juan", age: 26 };
  const [themeColor, setThemeColor] = useState('dark');
  const toggleTheme = () => {
    setThemeColor(themeColor === 'dark' ? 'light' : 'dark')
  } 
  return (
    <context.Provider //aqui é onde vai ficar nosso context api onde irá todas as informações iniciais como props que o componentes envolvidos por ele poderão ler.
      value={{
        color: themeColor, toggleTheme
      }}
    >
      <div className={`app ${themeColor}`}>
        <h1>Contador com React Funcional</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <User user={user.name} age={user.age} />
        <h5 id="timer"></h5>
      </div>
    </context.Provider>
  );
}

export default App
