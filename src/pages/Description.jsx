import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { formatMoney } from "../common/format";
export default function Description() {
  const { id } = useParams();

  // lấy danh sách sp từ store
  const listProduct = useSelector((product) => product.listProduct);

  // tìm kiếm thông tin product theo id
  const product = listProduct.find((pro) => pro.product_id === +id);
  return (
    <>
      <Navbar />
      <>
        <h3 className="text-center p-5">Chi tiết sản phẩm</h3>
        <section style={{ backgroundColor: "#eee" }}>
          <div className="container py-5">
            <div className="row justify-content-center mb-3">
              <div className="col-md-12 col-xl-10">
                <div className="card shadow-0 border rounded-3">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                        <div className="bg-image hover-zoom ripple rounded ripple-surface">
                          <img style={{width: 200, height: 200}} src={product.image} className="w-100" />
                          <a href="#!">
                            <div className="hover-overlay">
                              <div
                                className="mask"
                                style={{
                                  backgroundColor: "rgba(253, 253, 253, 0.15)",
                                }}
                              />
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-6 col-xl-6">
                        <h5>{product.product_name}</h5>
                        <h4 className="mb-2 t">Mô tả</h4>
                        <p className="mb-4 mb-md-0">
                          {product.description}
                        </p>
                      </div>
                      <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                        <div className="d-flex flex-row align-items-center mb-1">
                          <h4 className="mb-1 me-1">
                            {formatMoney(product.price)}
                          </h4>
                        </div>
                        <div className="d-flex flex-column mt-4">
                          <button
                            className="btn btn-primary btn-sm"
                            type="button"
                          >
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>

      <Footer />
    </>
  );
}
