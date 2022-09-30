import { useEffect, useState } from 'react';
import './App.css';
import dice from './desing/icon-dice.svg';
import axios from "axios";

function App() {
  const [advice, setAdvice] = useState (null); 
  const [adviceId, setAdviceId] = useState(null);
  const getData = async () => {
    const { data } = await axios.get("https://api.adviceslip.com/advice");
    setAdvice(data.slip.advice);
    setAdviceId(data.slip.id);
  }

  useEffect(() => {
    getData();
  }, []);






  return (
    <div className="App">
      <main>
      <div className='container'>
        <p className='container-title'> Advice #{adviceId}</p>
        <p className='container-advice'> "{advice}" </p>
        <div className='container-divider'></div>
        <div className='container-dice' onClick={() => getData()}>
          <img src={dice} alt="dice" />
        </div>
      </div>
      </main>
    </div>
  );
}

export default App;
