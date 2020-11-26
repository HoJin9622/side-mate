import api from "../settings/api";
import { createMessage } from "./messages";
import { returnErrors } from "./errors";
import { history } from "../index";

const USER_LOADING = "user/USER_LOADING";
const USER_LOGIN = "user/USER_LOGIN";
const AUTH_ERROR = "user/AUTH_ERROR";
const LOGIN_FAIL = "user/LOGIN_FAIL";
const LOGOUT_SUCCESS = "user/LOGOUT_SUCCESS";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const login = (username, password) => (dispatch) => {
  const body = JSON.stringify({ login_id: username, password });

  api
    .post("users/sign-in/", body, config)
    .then((res) => {
      dispatch({ type: USER_LOGIN, payload: res.data });
      dispatch(createMessage({ login: "로그인 완료" }));
      history.replace("/");
    })
    .catch((err) => {
      err.response?.data &&
        dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({ type: LOGIN_FAIL });
    });
};

export const logout = () => (dispatch) => {
  api
    .get("/users/sign-out/", null, config)
    .then((res) => {
      dispatch(createMessage({ logout: "로그아웃 완료" }));
      dispatch({ type: LOGOUT_SUCCESS });
      history.replace("/");
    })
    .catch((err) => {
      err.response?.data &&
        dispatch(returnErrors(err.response.data, err.response.status));
    });
};

export const register = ({ username, password, nickname, position, phoneNumber }) => (dispatch) => {
  const body = JSON.stringify({ login_id: username, password, nickname, position, phone_number: phoneNumber });

  api
    .post("users/sign-up/", body, config)
    .then((res) => {
      console.log(res);
      dispatch(createMessage({ register: "회원가입 완료" }));
      history.push("/login");
    })
    .catch((err) => {
      err.response?.data &&
        dispatch(returnErrors(err.response.data, err.response.status));
    });
};

// 초기 상태 선언
const initialState = {
  isAuthenticated: null,
  isLoading: false,
  user: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    default:
      return state;
  }
}
