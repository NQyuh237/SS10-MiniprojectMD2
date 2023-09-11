import React from "react";
import Navbar from "../layout/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { formatMoney } from "../common/format";
import { act_increase, act_decrease } from "../actions/cartActions";
export default function Cart() {
  // lấy dữ liệu từ store
  const listCart = useSelector((cart) => cart.listCart);
    const dispatch = useDispatch();
  // tính tổng tiền các sp trong giỏ
  const totalPrice = listCart.reduce((prev, current) => {
    return prev + current.price * current.quantity;
  }, 0);

    
    // hàm tăng số lượng
    const handleIncrease = (id) => {
        dispatch(act_increase(id));
    };

    // hàm giảm số lượng
    const handleDecrease = (id) => {
      dispatch(act_decrease(id));
    };

  return (
    <>
      <Navbar />

      <section className="h-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
              </div>
              {listCart.map((cart) => (
                <div className="card rounded-3 mb-4" key={cart.product_id}>
                  <div className="card-body p-4">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-2 col-lg-2 col-xl-2">
                        <img
                          style={{ width: 150, height: 150 }}
                          src={cart.image}
                          className="img-fluid rounded-3"
                          alt="Cotton T-shirt"
                        />
                      </div>
                      <div className="col-md-3 col-lg-3 col-xl-3">
                        <p className="lead fw-normal mb-2">
                          {cart.product_name}
                        </p>
                      </div>
                      <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                        <button
                          className="btn btn-link px-2"
                          onClick={() => handleDecrease(cart.product_id)}
                        >
                          <i className="fas fa-minus" />
                        </button>
                        <input
                          min={0}
                          value={cart.quantity}
                          type="number"
                          className="form-control form-control-sm"
                        />
                        <button
                          className="btn btn-link px-2"
                          onClick={() => handleIncrease(cart.product_id)}
                        >
                          <i className="fas fa-plus" />
                        </button>
                      </div>
                      <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                        <h5 className="mb-0">{formatMoney(cart.price)}</h5>
                      </div>
                      <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                        <a href="#!" className="text-danger">
                          <i className="fas fa-trash fa-lg" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="card mb-4">
                <div className="card-body p-4 d-flex flex-row">
                  <div className="form-outline flex-fill">
                    <h4 className="form-label" htmlFor="form1">
                      Tổng tiền: {formatMoney(totalPrice)}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
