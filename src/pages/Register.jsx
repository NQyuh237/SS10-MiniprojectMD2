import React, { useState } from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import Button from '../components/base/button/Button';
import { Link } from 'react-router-dom';

export default function Register() {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  return (
    <div>
      <Navbar />
      <div
        style={{ minHeight: "100vh" }}
        className="d-flex justify-content-center align-content-center"
      >
        <form className="form-container " onSubmit={handleSubmit}>
          <h3 className="form-heading text-center p-3">Register</h3>
          <div className="form-group">
            <label className="form-label" htmlFor="username">
              User Name
            </label>
            <input
              name='username'
              className="form-input"
              type="text"
              id="username"
              placeholder="Nhập tên người dùng"
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              name='email'
              className="form-input"
              type="text"
              id="email"
              placeholder="Nhập email"
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              name='password'
              className="form-input"
              type="password"
              id="password"
              placeholder="Nhập mật khẩu"
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="confirm-password">
              Confirm Password
            </label>
            <input
              name='corfirmPassword'
              className="form-input"
              type="confirm-password"
              id="confirm-password"
              placeholder="Nhập lại mật khẩu"
            />
          </div>
          <div className="mt-3">
            <Button size={"100%"} title="Login" type="primary" />
          </div>
          <div className="mt-3 d-flex justify-content-between">
            <Link>Quay lại trang chủ</Link>
            <Link>Quên mật khẩu</Link>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
