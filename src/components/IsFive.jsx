import React, {useMemo, memo} from 'react'

let renderCount = 0;

export default memo(
    function IsFive({value}) {
        console.warn(`IsFive render: ${++renderCount}`);
        const getResult = useMemo(() => {
            let i = 0;
            while (i < 60000000) i++;
            return value === 5 ? ' Это пять' : ' Это не пять';
        }, [value]);
      return  <div>{getResult}</div>;
    },
    (prevProps, nextProps) => {
        if (nextProps.value === 5) {
            return false;
        } else {
            return true;
        }
    }
);
