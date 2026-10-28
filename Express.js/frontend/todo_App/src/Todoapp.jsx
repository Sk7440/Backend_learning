import React, { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
function Todoapp() {
  const [dataToShow, setDataToShow] = useState([]);

  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState({ task1: "" });
  const [click, setClick] = useState(null);
  function handleChange(e) {
    setTodos({ task1: e.target.value });
  }
  async function postData() {
    if (click) {
      patch();
    } else {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:5000/todos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(todos),
        });
        if (!response.ok) {
          toast.error("Something went wrong");
        }
        const data = await response.json();
        console.log(data);

        setDataToShow(data);
      } catch (error) {
        toast.error("Something went wrong");
      } finally {
        setLoading(false);
      }
    }
  }
  async function deleteData(index) {
    try {
      const response = await fetch("http://localhost:5000/todos", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ index }),
      });
      const data = await response.json();
      console.log(data);
      setDataToShow(data.todos);
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      console.log("Delete operation completed");
    }
  }
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:5000/todos", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        console.log(data);
        setDataToShow(data.todos);
      } catch (error) {
        toast.error("Something went wrong");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  function editData(index) {
    setClick(index);
    let data = dataToShow.find((ele, idx) => {
      return idx == index;
    });
    if (data) {
      setTodos({ task1: data.task1 });
    }
  }
  function patch() {
    async function patchData() {
      try {
        const response = await fetch("http://localhost:5000/todos", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ click, todos }),
        });
        const data = await response.json();
        setDataToShow(data.todos);
      } catch (error) {
        toast.error("Something went wrong");
      } finally {
        setLoading(false);
      }
    }
    patchData();
  }
  return (
    <div>
      <input
        value={todos.task1}
        type="text"
        onChange={(e) => handleChange(e)}
      />
      <button onClick={() => postData()}>{click ? "update" : "submit"}</button>

      <div>
        {!loading ? (
          <div>
            {dataToShow.map((item, index) => {
              return (
                <div key={index}>
                  {item.task1}
                  <button onClick={() => deleteData(index)}>Clear</button>
                  <button onClick={() => editData(index)}>Edit</button>
                </div>
              );
            })}
          </div>
        ) : (
          <div>loading...</div>
        )}
      </div>
    </div>
  );
}

export default Todoapp;
