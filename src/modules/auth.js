import api from "../settings/api";
import { createMessage } from "./messages";
import { returnErrors } from "./errors";
import { history } from "../index";

const USER_LOADING = "user/USER_LOADING";
const USER_LOADED = "user/USER_LOADED";
const AUTH_ERROR = "user/AUTH_ERROR";
const LOGIN_FAIL = "user/LOGIN_FAIL";
const LOGOUT_SUCCESS = "user/LOGOUT_SUCCESS";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const loadUser = () => (dispatch) => {
  dispatch({ type: USER_LOADING });

  api
    .get("/me/profile/", config)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: USER_LOADED, payload: res.data });
    })
    .catch((err) => {
      err.response?.data &&
        dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({ type: AUTH_ERROR });
    });
};

export const login = (username, password) => (dispatch) => {
  const body = JSON.stringify({ username, password });

  api
    .post("users/sign-in/", body, config)
    .then((res) => {
      dispatch(loadUser());
      dispatch(createMessage({ login: "로그인 완료" }));
      history.push("/");
    })
    .catch((err) => {
      // 로그인 에러처리 서버 status code 수정 후 작업
      console.log(err.response);
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
      history.push("/");
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

export const register = ({ username, password, nickname }) => (dispatch) => {
  const body = JSON.stringify({ username, password, nickname });

  api
    .post("users/sign-up/", body, config)
    .then((res) => {
      dispatch(createMessage({ register: "회원가입 완료" }));
      dispatch(loadUser());
      history.push("/");
    })
    .catch((err) => {
      console.log(err.response);
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
    case USER_LOADED:
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
