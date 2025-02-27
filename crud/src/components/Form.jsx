function Form() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-5 m-auto">
            <form action="">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  aria-label="email"
                  aria-describedby="basic-addon1"
                />
              </div>
              <button className="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
