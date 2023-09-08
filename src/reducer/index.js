import { combineReducers } from "redux";
import { count } from "./count";
import { random } from "./random"
import { todolist } from "./todolist"
//Giúp gộp tất cả các dữ liệu trong ứng dụng vào 1 store duy nhất
export const reducer = combineReducers({ count, random, todolist });