import { useNavigate } from "react-router-dom";
import { getData, deleteData } from "../server";
import { useState } from "react";
import { toast } from "react-toastify";

function Table() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  async function fetchData() {
    const response = await getData();
    setUserData(response.data);
  }
  fetchData();


  async function handleDelete(id){
    await deleteData(id)
    toast("User delete successfully")
  }
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-5 m-auto">
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
                          <button className="btn border" onClick={() => handleDelete(ele.id)}>
                            <i className="bi bi-trash3-fill text-danger"></i>
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
    </div>
  );
}

export default Table;
