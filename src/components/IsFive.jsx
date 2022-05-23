import React from 'react'

let renderCount = 0;

export default function IsFive({value}) {
    console.warn(`IsFive render: ${++renderCount}`);

    const getResult = () => {
        let i = 0;
        while (i < 60000000) i++;
        return value === 5 ? ' Это пять' : ' Это не пять';
    }
  return (
    <div>{getResult()}</div>
  )
}

