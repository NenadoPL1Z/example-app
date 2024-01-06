import React, {useState} from 'react';
import styles from "./Counter.module.scss"

const Counter = () => {
    const [count, setCount] =useState(0);

    return (
        <>
            <h1 className={styles.title}>Counter: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </>
    );
};

export default Counter;