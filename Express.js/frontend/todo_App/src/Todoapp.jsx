import React, { useState } from 'react'
import { toast } from 'react-toastify'
function Todoapp() {
    const [dataToShow, setDataToShow] = useState([])
    console.log(dataToShow);

    const [loading, setLoading] = useState(false)
    const [todos, setTodos] = useState({ task1: '' })
    function handleChange(e) {
        setTodos({ task1: e.target.value })

    }
    async function postData() {
        try {

            setLoading(true)
            const response = await fetch('http://localhost:5000/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(todos)
            })
            if (!response.ok) {
                toast.error('Something went wrong')

            }
            const data = await response.json()
            console.log(data);

            setDataToShow(data)
            
        }
        catch (error) {
            toast.error('Something went wrong')
        }   
        finally {
            setLoading(false)
        }
    }
    function deleteData(index) {
        console.log(index);
        
        fetch('http://localhost:5000/todos', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ index }) 
        })
        setDataToShow(prevData => {
            const newData = [...prevData];
            newData.splice(index, 1);
            return newData;
        })
    }
    return (
        <div>
            <input type="text" onChange={(e) => handleChange(e)} />
            <button onClick={() => postData()}>Submit</button>

            <div>
                {
                    !loading ? <div>
                        {dataToShow.map((item, index) => {
                            return <div key={index}>{item.task1}
                        <button onClick={() => deleteData(index)}>Clear</button>
                            </div>
                        })}

                    </div> : <div>loading...</div>
                }
            </div>
        </div>
    )
}

export default Todoapp