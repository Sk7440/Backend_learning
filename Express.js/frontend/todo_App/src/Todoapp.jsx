import React, { useState } from 'react'

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

            }
            const data = await response.json()
            console.log(data);

            setDataToShow(data)
        }
        catch (error) {

        }
        finally {
            setLoading(false)
        }
    }
    return (
        <div>
            <input type="text" onChange={(e) => handleChange(e)} />
            <button onClick={() => postData()}>Submit</button>

            <div>
                {
                    !loading ? <div>
                        {dataToShow.task1}


                    </div> : <div>loading...</div>
                }
            </div>
        </div>
    )
}

export default Todoapp