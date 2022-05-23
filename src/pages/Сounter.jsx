import React, { useContext, useState } from 'react'
import { ThemeContext } from "../context";
import IsFive from '../components/IsFive';
import Count from '../components/Count';

function Сounter() {
    const theme = useContext(ThemeContext);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const countHendler = () => {
        if (count1){
            setCount1(count1 + 1);
        }else if(count2){
            setCount2(count2 + 1);
        }else {
            console.log("неверное значение");
        }
        
    }

  return (
    <div style={{background: theme.background, color: theme.textColor}}>
        Сounter
        <h5>Счетчик 1:</h5>
        <div className='counter'>
        <Count id={1} value={count1} />
        <button onClick={countHendler}>+</button>
        </div>
        <h5>Счетчик 2:</h5>
        <div className='counter'>
        <Count id={2} value={count2} />
        <button onClick={countHendler}>+</button>
        <IsFive value={count2}/>
        </div>
    </div>
  )
}

export default Сounter