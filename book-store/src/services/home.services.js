// import axios from "../ultis/axios";
import Axios from "axios";

let axios = Axios.create({
  baseURL: "http://3.0.95.43:6060",
  // baseURL: "http://localhost:8000",
  headers: { "Content-Type": "application/json" },
});

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  //get token
  let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQxNDkxNDA2LTgxZTAtNDAwYy1iYTI0LWMzMTMyMTVlOTM1MCIsImNyZWF0ZWRBdCI6IjIwMjEtMDEtMTNUMDg6NDE6MzEuMzU1WiIsInVwZGF0ZWRBdCI6IjIwMjEtMDEtMTNUMDg6NDE6MzEuMzU1WiIsInZlcnNpb24iOjEsInRlbkRhbmdOaGFwIjoic3RyaW5nIiwiZW1haWwiOiJzdHJpbmdAcy5jb20iLCJzb0RpZW5UaG9haSI6InN0cmluZyIsImRpYUNoaSI6InN0cmluZyIsInZhaVRybyI6InF1YW5fbHkiLCJpYXQiOjE2MTA2MTMyMzAsImV4cCI6MTYyMzU3MzIzMH0.kehSMq8h_8taCXQBqvDBgr2LhQvIYw_UKPULwT0g1l0";
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

export function getCategories() {
  return axios.get("/categories", {
    
  });
}

export function getBook(page, limit) {
  return axios.get("/books", {
    page,
    limit
  });
}

export function getBookCategory(loaiId, page, limit) {
  return axios.get("/books/category", {
    loaiId,
    page,
    limit
  });
}