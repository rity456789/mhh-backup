import axios from "../ultis/axios";

export function login(tenDangNhap, matKhau) {
  return axios.post("/auth/login", {
    tenDangNhap,
    matKhau,
  });
}

export function register(account) {
  return axios.post("/auth/register", {
    ...account,
  });
}
