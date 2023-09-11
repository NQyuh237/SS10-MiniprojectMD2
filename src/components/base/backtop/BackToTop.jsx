import React, { useEffect, useState } from 'react'
import "./backtop.css";
import {UpOutlined} from "@ant-design/icons"

export default function BackToTop() {
  const [show, setShow] = useState(false);
  

  // hàm lăn chuột xuống 200 thì hiện nút ấn trở lại bên trên
  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      setShow(true);
    } else {
      setShow(false);
    };
  }
  
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  useEffect(() => {
    // lắng nghe sự kiện cuộn chuột từ màn hình
    window.addEventListener("scroll", handleScroll)

    // hủy sự kiện
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])


  return (
    <>
      {
        show && (<div className='back-top'
        onClick={handleScrollTop}>
        <UpOutlined />
        </div>)
      }
      
    </>
  )
}
