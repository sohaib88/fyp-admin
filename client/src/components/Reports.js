import React, { useState, useEffect } from 'react';

function DataTable() {
    const [data, setData] = useState([]);
    const url = 'http://localhost:5000/process_video/';

    useEffect(() => {
        fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: setData(JSON.stringify(data))
          })
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            })
            .then(json => {
              // process the JSON response
            })
            .catch(error => {
              console.error('Error:', error);
              // display an error message to the user
            });
        //   By following these steps, you should be able to identify the cause of the error and fix the issue.
          
          
          
          
    }, []);

    return (
        <>
        {console.log(data)}
        <table>
            <thead>
                <tr>
                    <th>Frmaes</th>
                    <th>Sedan Count</th>
                    <th>SUV Count</th>
                    <th>Total Car Count</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr key={item.Frame}>
                        <td>{item.Sedan}</td>
                        <td>{item.SUV}</td>
                        <td>{item.Total}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    );
}

export default DataTable;
