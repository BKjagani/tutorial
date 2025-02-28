import { useNavigate } from "react-router-dom";
import { postData } from "../server";
import { useState } from "react";
import { toast } from "react-toastify";
function Form() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", email: "" });
  async function handleSubmit(e) {
    e.preventDefault();
    toast.dismiss()
    if (formData.username === "") {
      toast.error("Please enter username");
    } else if (formData.email === "") {
      toast.error("Please Enter Email");
    } else {
      await postData(formData);
      setFormData({ username: "", email: "" });
      toast.success("User add successfully");
      navigate("/");
    }
  }

  function handleChange(e) {
    setFormData((preval) => ({ ...preval, [e.target.name]: e.target.value }));
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
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  name="username"
                  value={formData.value}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  aria-label="email"
                  aria-describedby="basic-addon1"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-success">
                Submit
              </button>
              <button
                className="btn btn-warning ms-3"
                onClick={() => navigate("/")}
              >
                Cancle
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
