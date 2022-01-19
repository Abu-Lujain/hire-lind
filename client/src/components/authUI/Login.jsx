import { useState } from "react";

const Logiin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="mt-5  d-flex justify-content-center position-relative">
      <a href="/register" className=" position-absolute bottom-0 ">
        <h4 className="font-weight-normal"> Create an Account</h4>
      </a>
      <form className=" w-50" onSubmit={handleSubmit}>
        <h3 className="text-center ">Create an Account</h3>
        <div className="form-group">
          <label>email</label>

          <input
            className="form-control my-3"
            name="email"
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>password</label>{" "}
          <input
            name="password"
            className="form-control mb-3"
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="button"
          className="btn  btn-success"
          onClick={handleSubmit}
          mt={3}
        >
          {" "}
          Submit
        </button>
      </form>
    </div>
  );
};

export default Logiin;
