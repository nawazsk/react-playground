import React, { useState } from 'react';

const FetchExample = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    
    const getData = () => {
        fetch("https://api.sampleapis.com/csscolornames/colors")
            .then((response) => response.json())
            .then(
                (result) => {
                    setData(result);
                },
                (error) => {
                    setError(error);
                }
            )

    }
    console.log(data);
    return (
        <div style={{ margin: 20 }}>
            <button onClick={getData}>Click To Get Data From Api</button>
            {
                error ? (<div>Error: {error}</div>) : (data.map((item, i) => {
                    return <div key={i} style={{ color: item.hex }}>{item.name}</div>
                }))
            }

        </div>
    )
}

export default FetchExample;