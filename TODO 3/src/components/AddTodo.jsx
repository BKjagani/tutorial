import React, { useState } from "react";
import { postTodo } from "../server";

function AddTodo() {

    const [formData, setFormData] = useState({title : "", des : "", dueDate : "", priority : ""})

    function handleChange(e){
        setFormData((preval) => {
            return {...preval, [e.target.name] : e.target.value}
        })   
    }

   async function handleSubmit(e){
        e.preventDefault()
        await postTodo(formData)
        setFormData({title : "", des : "", dueDate : "", priority : ""})
    }

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-5 m-auto">
            <form action="" onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Title"
                  aria-label="Title"
                  aria-describedby="basic-addon1"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group mb-3">
                <textarea
                  className="form-control"
                  aria-label="With textarea"
                  name="des"
                  value={formData.des}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Due Date
                </span>
                <input
                  type="date"
                  className="form-control"
                  aria-describedby="basic-addon1"
                  min={new Date().toISOString().split("T")[0]}
                  name="dueDate"
                  value={formData.dueDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group mb-3">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  required
                >
                  <option>Priority</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <button className="btn btn-success" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
