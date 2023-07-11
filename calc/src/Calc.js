import React, { useState } from 'react';

function Calc(){
    const[count,setCount] = useState('');
    const handleClick = (event) =>{
        setCount(count.concat(event.target.value));
    };
    const handleClear = () =>{
        setCount('');
    };
    const handleEqual = () =>{
        setCount(eval(count).toString());
    };
    return(

        <div className='Calc-App'>
            <input type="text" placeholder='0' value={count} className='text' />
            <input type="button" value='9' className='number' onClick={handleClick} />
            <input type="button" value='8' className='number' onClick={handleClick} />
            <input type="button" value='7' className='number' onClick={handleClick} />
            <input type="button" value='6' className='number' onClick={handleClick} />
            <input type="button" value='5' className='number' onClick={handleClick} />
            <input type="button" value='4' className='number' onClick={handleClick} />
            <input type="button" value='3' className='number' onClick={handleClick} />
            <input type="button" value='2' className='number' onClick={handleClick} />
            <input type="button" value='1' className='number' onClick={handleClick} />
            <input type="button" value='0' className='number' onClick={handleClick} />
            <input type="button" value='+' className='number' onClick={handleClick} />
            <input type="button" value='-' className='number' onClick={handleClick} />
            <input type="button" value='*' className='number' onClick={handleClick} />
            <input type="button" value='/' className='number' onClick={handleClick} />
            <input type="button" value='%' className='number' onClick={handleClick} />
            <input type="button" value='.'  className='number' onClick={handleClick} />
            <input type="button" value='clear' className='number number1' onClick={handleClear} />
            <input type="button" value='=' className='number number1' onClick={handleEqual} />

        </div>
    );
}
export default Calc;