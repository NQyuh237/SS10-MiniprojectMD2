import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionTypes, deActionTypes } from "../../actions/actionTypes";

export default function Count() {
  const count = useSelector((c) => c.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(actionTypes())}>cộng</button>
      <button onClick={() => dispatch(deActionTypes())}>trừ</button>
    </div>
  );
}
