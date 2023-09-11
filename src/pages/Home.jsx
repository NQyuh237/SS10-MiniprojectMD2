import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Button from "../components/base/button/Button";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Đây là trang chủ</h1>
      <Button title="Thêm mới" size={140} type="primary"/>
      <Button title="Cập nhật" type="danger"/>
      <Footer />
    </div>
  );
}
