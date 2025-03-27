import { useNavigate } from "react-router-dom";
import { getData, deleteData, editData } from "../server";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function Table() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({username : "", email : ""})
  const [userData, setUserData] = useState([]);
  const [editId, setEditId] = useState("")

  useEffect(() => {
    async function fetchData() {
      const response = await getData();
      setUserData(response.data);
      console.log(response)
    }
    fetchData();
  }, [])
   

  async function handleDelete(id) {
    await deleteData(id);
    toast("User delete successfully");
  }

  function handleEdit(id) {
    const obj = userData.find((element) => element.id === id)
    setFormData({username : obj.username, email : obj.email})
    setEditId(id)
  }

  async function submitEdit(){
    await editData(editId, formData)
    setFormData({username : "", email : ""})
    setEditId("")
  }


  return (
    <div>
       <button className="btn btn-primary" onClick={() => navigate('/news')}>News</button>
      <div className="container mt-5">
        <div className="row">
          <div className="col-7 m-auto">
            <div className="btn btn-primary" onClick={() => navigate("/form")}>
              Add User
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Actios</th>
                </tr>
              </thead>
              <tbody>
                {userData.length > 0 &&
                  userData.map((ele, index) => {
                    return (
                      <tr key={index}>
                        <td>{ele.username}</td>
                        <td>{ele.email}</td>
                        <td>
                          <button
                            className="btn border"
                            onClick={() => handleDelete(ele.id)}
                          >
                            <i className="bi bi-trash3-fill text-danger"></i>
                          </button>
                          <button
                            className="btn border ms-3"
                            onClick={() => handleEdit(ele.id)}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            type="button"
                          >
                            <i className="bi bi-pencil-square text-info"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit User
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form action="">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    name="username"
                    value={formData.username}
                    onChange={(e) => setFormData({...formData, username : e.target.value})}
                  />
                </div>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    aria-label="Email"
                    aria-describedby="basic-addon1"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email : e.target.value})}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button data-bs-dismiss="modal" type="button" className="btn btn-primary" onClick={submitEdit}>
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
