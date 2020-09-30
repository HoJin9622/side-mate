import api from "../settings/api";
import { createMessage } from "./messages";
import { history } from "../index";
// import {returnErrors} from './messages';

// 액션 타입
const USER_LOADING = "user/USER_LOADING";
const USER_LOADED = "user/USER_LOADED";
const AUTH_ERROR = "user/AUTH_ERROR";
const LOGIN_SUCCESS = "user/LOGIN_SUCCESS";
const LOGIN_FAIL = "user/LOGIN_FAIL";
const LOGOUT_SUCCESS = "user/LOGOUT_SUCCESS";
const REGISTER_SUCCESS = "user/REGISTER_SUCCESS";
const REGISTER_FAIL = "user/REGISTER_FAIL";

// 액션 객체
export const loadUser = () => (dispatch, getState) => {
  // User Loading
  dispatch({ type: USER_LOADING });

  // Get token from state
  const token = getState().auth.tokenl;

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // If token, add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  api
    .get("/api/auth/user/", config)
    .then((res) => {
      dispatch({ type: USER_LOADED, payload: res.data });
    })
    .catch((err) => {
      // dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({ type: AUTH_ERROR });
    });
};

export const login = (username, password) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ username, password });

  api
    .post("/api/auth/login/", body, config)
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      // dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({ type: LOGIN_FAIL });
    });
};

export const logout = () => (dispatch, getState) => {
  // Get token from state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // If token, add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  api
    .post("/api/auth/logout/", null, config)
    .then((res) => {
      dispatch({ type: LOGOUT_SUCCESS });
    })
    .catch((err) => {
      // dispatch(returnErrors(err.response.data, err.response.status));
    });
};

export const register = ({ username, password, nickname }) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ username, password, nickname });

  api
    .post("users/sign-up/", body, config)
    .then((res) => {
      dispatch(createMessage({ register: "회원가입 완료" }));
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
      history.push("/login");
    })
    .catch((err) => {
      console.log(err.response);
      // dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({ type: REGISTER_FAIL });
    });
};

// 초기 상태 선언
const initialState = {
  isAuthenticated: null,
  isLoading: false,
  user: null,
};

// 리듀서 선언
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
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    default:
      return state;
  }
}
