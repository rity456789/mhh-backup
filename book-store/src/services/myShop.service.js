import axios from "../ultis/axios";

export function addBook(book) {
  return axios.post("/books", {
    ...book,
  });
}

export function getCategories() {
  return axios.get("/categories");
}
