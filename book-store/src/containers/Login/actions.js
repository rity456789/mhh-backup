import { login, register } from "../../services/account.services";
import Swal from "sweetalert2";
import history from "../../ultis/history";

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const sendLogin = (username, password) => {
  return (dispatch) => {
    dispatch(request());
    login(username, password)
      .then((loginResponse) => {
        localStorage.setItem(
          "token",
          JSON.stringify(loginResponse.data.access_token)
        );
        dispatch(success());
        window.location.href = "/";
      })
      .catch((err) => {
        console.log("err", err.response);
        dispatch(failure());
        if (err.response.status == 401) {
          Swal.fire({
            title: "Đăng nhập thấp bại",
            icon: "error",
            text: "Thông tin không chính xác",
            confirmButtonText: "OK",
          });
        } else {
          Swal.fire({
            title: "Có lỗi trong quá trình đăng nhập",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      });
  };

  function request() {
    return {
      type: LOG_IN_REQUEST,
    };
  }
  function success() {
    return {
      type: LOG_IN_SUCCESS,
    };
  }
  function failure() {
    return {
      type: LOG_IN_FAILURE,
    };
  }
};

export const sendRegister = (account) => {
  return (dispatch) => {
    dispatch(request());
    register(account)
      .then((registerResponse) => {
        Swal.fire({
          title: "Tạo tài khoản thành công",
          icon: "success",
          text: "Vui lòng đăng nhập",
          confirmButtonText: "OK",
        });
        dispatch(success());
      })
      .catch((err) => {
        const message = err.response.data.message;
        dispatch(failure());
        if (message.length > 0) {
          Swal.fire({
            title: "Có lỗi trong quá trình tạo tài khoản",
            text: message[0],
            icon: "error",
            confirmButtonText: "OK",
          });
        } else
          Swal.fire({
            title: "Có lỗi trong quá trình tạo tài khoản",
            icon: "error",
            confirmButtonText: "OK",
          });
      });
  };

  function request() {
    return {
      type: REGISTER_REQUEST,
    };
  }
  function success() {
    return {
      type: REGISTER_SUCCESS,
    };
  }
  function failure() {
    return {
      type: REGISTER_FAILURE,
    };
  }
};
