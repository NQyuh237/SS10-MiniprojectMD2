import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionClear, actionRandom } from "../../actions/actionTypes";

export default function Random() {
  const random = useSelector((c) => c.random);
  const dispatch = useDispatch();
  const handelRandom = () => {
    dispatch(actionRandom());
  };
  return (
    <div>
      <button onClick={handelRandom}>Random</button>
      <button onClick={() => dispatch(actionClear())}>Clear</button>
      <h2>Danh sách Random: </h2>
      <h2 style={{ color: "red" }}>{JSON.stringify(random)}</h2>
    </div>
  );
}
