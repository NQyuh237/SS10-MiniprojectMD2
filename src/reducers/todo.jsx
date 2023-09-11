const initialState = JSON.parse(localStorage.getItem("jobs")) || [];
export const todolist = (state = initialState, action) => {
  switch (action.type) {
    case "add":
      //    clone lại mạng cũ
      const newArray = [...state];
      //    push dữ liệu vào mảng
      newArray.push(action.payload);
      // lưu dữ liệu lên localStorage
      localStorage.setItem("jobs", JSON.stringify(newArray));
      return newArray;
    case "delete":
      //   clone lại mảng
      const updateJob = [...state];
      //   lọc ra những ptu có id khác với id cần xóa
      const newListJob = updateJob.filter((job) => job.id !== action.payload);
      //   lưu mảng mới lên local
      localStorage.setItem("jobs", JSON.stringify(newListJob));
      return newListJob;
    case "checked":
      //   clone lại mảng cũ
      const newListJobCheck = [...state];
      //   Map qua từng phần tử của mảng và kiểm tra, nếu trùng id thì thay đổi trạng thái
      const checkedJob = newListJobCheck.map((job) => {
        if (job.id === action.payload) {
          return { ...job, status: !job.status }; // cập nhật lại trạng thái của job theo id
        }
        return job;
      });
      //   lưu mảng mới lên local
      localStorage.setItem("jobs", JSON.stringify(checkedJob));
      return checkedJob;

    default:
      return state;
  }
};
