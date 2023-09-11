import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Button from "./../components/base/button/Button";
import "./login.css"
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <Navbar />
      <div
        style={{ minHeight: "100vh" }}
        className="d-flex justify-content-center align-content-center"
      >
        <form className="form-container ">
          <h3 className="form-heading text-center p-3">Login</h3>
          <div className="form-group">
            <label className="form-label" htmlFor="username">
              User Name
            </label>
            <input
              className="form-input"
              type="text"
              id="username"
              placeholder="Nhập tên người dùng"
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              className="form-input"
              type="password"
              id="password"
              placeholder="Nhập mật khẩu"
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
