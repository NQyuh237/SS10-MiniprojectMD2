import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { actionAdd, actionDele, actionEdit } from "../../actions/actionTypes";
export const ToDoList = () => {
  const [job, setJob] = useState("");
  const [check, setCheck] = useState(false);
  const jobs = useSelector((c) => c.todolist);
  const dispatch = useDispatch();
  const handleAddJob = () => {
    //Hàm gửi acction kèm payload lên reducer
    const newJob = {
      id: uuid(),
      name: job,
      status: false,
    };
    dispatch(actionAdd(newJob));
    setJob("");
  };

  //hàm xóa
  const handleDelete = (id) => {
    dispatch(actionDele(id));
  };
  const handleChangeStatus = (id) => {
    dispatch(actionEdit(id));
    setCheck(!check);
  };
  return (
    <div>
      <div className="d-flex gap-2 mb-3">
        <input
          type="text"
          className="form-control"
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
        <button onClick={handleAddJob}>Add</button>
      </div>
      <ul className="list-group">
        {jobs.map((jb, i) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={i + 1}
            title={jb.status ? "Đã hoàn thành" : "Chưa hoàn thành"}
          >
            <div className="d-flex gap-2 align-items-center">
              <input
                type="checkbox"
                checked={jb.status}
                className="form-check-input"
                onChange={() => handleChangeStatus(jb.id)}
                title={
                  jb.status
                    ? "Click để hủy trạng thái hoàn thành"
                    : "Click để chuyển trạng thái hoàn thành"
                }
              />
              <span
                style={
                  jb.status
                    ? {
                        textDecoration: "line-through",
                        color: "#00000040",
                      }
                    : { textDecoration: "none" }
                }
              >
                {jb.name}
              </span>
            </div>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(jb.id)}
              title="Xóa"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
