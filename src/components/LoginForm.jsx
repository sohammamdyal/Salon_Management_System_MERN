import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


function LoginForm({ setLoggedInUser }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    address: "",
    image: null,
  });

 

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert image to Base64 before saving in JSON Server
    let base64Image = "";
    if (formData.image) {
      const reader = new FileReader();
      reader.readAsDataURL(formData.image);
      reader.onloadend = async () => {
        base64Image = reader.result;

        const userData = {
          username: formData.username,
          password: formData.password,
          address: formData.address,
          image: base64Image,
        };


        try {
          await axios.post("http://localhost:5000/users", userData);
          alert("User Registered Successfully!");
          setLoggedInUser(userData);
          navigate("/home");
        } catch (error) {
          console.error("Error:", error);
        }
      };
    }
  };

  return (
    <>

        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
          <div className="card shadow-lg p-4" style={{ width: "400px" }}>
            <h3
              className="text-center mb-4"
              style={{ fontFamily: "Poppins, sans-serif", color: "#004D43" }}
            >
              Salon Management Login
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Address</label>
                <textarea
                  name="address"
                  className="form-control"
                  value={formData.address}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="mb-3">
                <label className="form-label">Upload Image</label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-dark w-100">
                Register / Login
              </button>
            </form>
          </div>
        </div>

      </>
  );
}

export default LoginForm;
