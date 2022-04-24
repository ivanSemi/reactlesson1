import React, {useState} from 'react'

export function Button () {
    const [count, setCount] = useState(0);
    const updateCount = () => {
        setCount((prevCount) => prevCount + 1);
    }
    return (
        <div>
        <span className='counter'>{count}</span>
        <div className='button' onClick={updateCount}>Нажми меня</div>
        </div>
    );
};

export default Button