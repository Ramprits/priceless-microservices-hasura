import { createBrowserHistory } from "history";

export const addToLocalStorage = (data) => {
  localStorage.setItem("userToken", JSON.stringify(data));
};
export const removeFromLocalStorage = () => {
  localStorage.removeItem("userToken");
};
export const getFromLocalStorage = () => {
  let user = JSON.parse(localStorage.getItem("userToken"));
  return user;
};

export const history = createBrowserHistory();
