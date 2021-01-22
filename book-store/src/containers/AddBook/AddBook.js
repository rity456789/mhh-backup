import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendAddBook, sendGetCategories } from "./actions";

function AddBook() {
  const isLoading = useSelector((state) => state.addBookReducer.isSending);
  const isLoadingCategories = useSelector(
    (state) => state.addBookReducer.isLoadingCategories
  );
  const categories = useSelector((state) => state.addBookReducer.categories);
  const dispatch = useDispatch();
  const bookNameEl = useRef("");
  const publisherEl = useRef("");
  const descriptionEl = useRef("");
  const imageLinkEl = useRef("");
  const authorEl = useRef("");
  const priceEl = useRef("");
  const categoryEl = useRef("");
  const onAddBook = () => {
    const book = {
      ten: bookNameEl.current.value,
      nhaXuatBan: publisherEl.current.value,
      moTa: descriptionEl.current.value,
      hinhAnh: imageLinkEl.current.value,
      tacGia: authorEl.current.value,
      gia: priceEl.current.value,
      loai: {
        id: categoryEl.current.value,
      },
    };
    dispatch(sendAddBook(book));
  };

  useEffect(() => {
    dispatch(sendGetCategories());
  }, []);
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-xl-8">
          <div className="accordion" id="accordion1">
            <div className="card card-panel bg-white shadow-sm mb-2">
              <div
                className="card-header py-4 bg-white"
                role="button"
                id="headingOne"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <h2 className="h4 mb-0">Add new book</h2>
              </div>
              <div
                id="collapseOne"
                className="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordion1"
              >
                <div className="card-body p-0">
                  <hr className="m-0" />
                  <div className="p-4 p-md-6">
                    <form>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control form-control-simple"
                              placeholder="Book's name: *"
                              ref={bookNameEl}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control form-control-simple"
                              placeholder="Publisher: *"
                              ref={publisherEl}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control form-control-simple"
                              placeholder="Description: *"
                              ref={descriptionEl}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control form-control-simple"
                              placeholder="Image link: *"
                              ref={imageLinkEl}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control form-control-simple"
                              placeholder="Author: *"
                              ref={authorEl}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="number"
                              className="form-control form-control-simple"
                              placeholder="Price: *"
                              ref={priceEl}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            {isLoadingCategories == false ? (
                              <select
                                name="cars"
                                id="cars"
                                className="form-control form-control-simple"
                                ref={categoryEl}
                              >
                                <option value="" disabled selected>
                                  Select Category: *
                                </option>
                                {categories.map((category) => {
                                  return (
                                    <option value={category.id}>
                                      {category.ten}
                                    </option>
                                  );
                                })}
                              </select>
                            ) : (
                              <>
                                <div className="loading" key={1}>
                                  <div
                                    className="spinner-border text-primary"
                                    role="status"
                                  >
                                    <span className="sr-only">Loading...</span>
                                  </div>
                                </div>{" "}
                              </>
                            )}
                          </div>
                        </div>
                        {isLoading ? (
                          <div className="loading" key={1}>
                            <div
                              className="spinner-border text-primary"
                              role="status"
                            >
                              <span className="sr-only">Loading...</span>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                        <div
                          className="col-md-12 text-right py-4"
                          onClick={() => onAddBook()}
                        >
                          <span className="btn btn-primary">Add book</span>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBook;
