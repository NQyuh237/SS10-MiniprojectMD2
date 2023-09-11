import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { act_add, act_checked, act_delete } from "../action/ActionTypes";

export default function Todolist() {
  const dispatch = useDispatch();
  const [job, setJob] = useState("");
  const listJob = useSelector((job) => job.todolist);
  console.log(listJob);

  //  hàm gửi action kèm payloat(dữ liệu) lên reducer
  const handleAddTodo = () => {
    const newJob = {
      id: uuid(),
      name: job,
      status: false,
    };
    dispatch(act_add(newJob));
    setJob("");
  };
  // hãm xóa
  const handleDeleteTodo = (id) => {
    dispatch(act_delete(id)); // gửi dispatch lên reducer
  };

  //hàm thay đổi trạng thái công việc
  const handleCheck = (id) => {
    dispatch(act_checked(id));
  };

  return (
    <div>
      <h3>todolist</h3>
      <div className="d-flex gap-2 mb-3">
        <input
          value={job}
          onChange={(e) => setJob(e.target.value)}
          type="text"
          className="form-control"
        />
        <button className="btn btn-danger" onClick={handleAddTodo}>
          Add
        </button>
      </div>
      <ul className="list-group">
        {listJob.map((job) => (
          <li className="list-group-item d-flex justify-content-between">
            <div className="d-flex gap-2 align-items-center">
              <input
                type="checkbox"
                className="form-check-input"
                checked={job.status === true}
                onChange={() => handleCheck(job.id)}
              />
              {job.status === true ? (
                <s>{job.name}</s>
              ) : (
                <span>{job.name}</span>
              )}
            </div>
            <button
              className="btn btn-danger"
              onClick={() => handleDeleteTodo(job.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
