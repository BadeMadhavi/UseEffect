import { useState, useEffect } from "react";

function UseEffectHook() {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [count, setCount] = useState(0)
    useEffect(() => {
        fetch("./count.json")
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch(() => setError("Failed to load data"))
    }, [count])

    if (error) {
        return <p>{error}</p>
    }
       return (
        <div className="list">
            <h1>FETCH DATA</h1>
    {data.length > 0  && count === 10 ? (
    data.map((text, index) => (
        <div key={index}>
     {text ? 
         <li className="data">
             <h2>DATA</h2>
            <h3>{text.id}</h3>
         </li>: <h3>null</h3>}                  
        </div>
                ))
            ) : (
        <h3 style={{textAlign:"center",fontFamily:"sans-serif",color:"white"}}>Data will display after incrementing</h3>
            )}
            <p className="count">Count: {count}</p>
          <div className="btn">
         <button onClick={() => 
            setCount(count + 1)}>Increment</button>
        </div>
        </div>
    )
}
export default UseEffectHook;
