import React, { useEffect, useState } from "react";
import "./product.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { showProduct, deleteProduct, setPage } from "../../Redux/crudSlice";
import { productImagePath } from "../../Helper/Helper";
import SweetAlertComponent from "../SweetAlert/SweetAlertComponent";

const ShowProduct = () => {
  const { allProduct, currentPage, totalPages, perPage } = useSelector(
    (state) => state.crud
  );
  // console.log(allProduct);

  // For delete product
  const [delete_id, setDelete_id] = useState("");
  const [isDelete, setIsDelete] = useState(false);

  // Assing useDispatch  into a variable
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showProduct({ page: currentPage, perpage: perPage }));
  }, [dispatch, currentPage, perPage]);

  // Delete Product
  const deleteFunc = () => {
    // Collected Delete ID
    const deleteId = {
      id: delete_id,
    };

    if (delete_id !== "") {
      dispatch(deleteProduct(deleteId)).then(() => {
        dispatch(showProduct({ currentPage: 1, perPage: 10 }));
      });
    }
    // After Delete Sweet Alert will close
    setDelete_id("");
    setIsDelete(false);
  };

  const handlePageChange = (pageNumber) => {
    dispatch(setPage(pageNumber));
  };

  return (
    <>
      <section>
        <div className="container-fluid h-50 d-flex justify-content-center flex-wrap p-3 productCardStyle">
          {allProduct.map((item, index) => {
            return (
              <>
                <div
                  className="card m-2 productClassStyle"
                  style={{ width: "20rem" }}
                >
                  <img
                    src={productImagePath(item.image)}
                    className="card-img-top productImgstyle"
                    alt="Product Img"
                  />
                  <div
                    key={index}
                    className="card-body shadow-lg px-3 py-3 bg-white rounded productCardBody"
                  >
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <div className="productCardBtnStyle">
                      <Link to={`/edit/${item?._id}`} class="btn btn-primary">
                        Edit
                      </Link>
                      <Link
                        to={""}
                        class="btn btn-danger"
                        onClick={() => {
                          setDelete_id(item?._id);
                          setIsDelete(true);
                        }}
                      >
                        Delete
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          {isDelete && (
            <SweetAlertComponent
              confirm={deleteFunc}
              cancel={() => {
                setIsDelete(false);
              }}
              title={"Are you sure"}
              subtitle={"You will not able to recover!"}
            />
          )}
        </div>
      </section>
      <section className="paginationSection">
        <nav aria-label="Page navigation example ">
          <ul className="pagination justify-content-center">
            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Previous
              </button>
            </li>
            {Array.from({ length: totalPages }, (item, i) => (
              <li
                key={i}
                className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              </li>
            ))}
            <li
              className={`page-item ${
                currentPage === Math.ceil(allProduct.length / perPage)
                  ? "disabled"
                  : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default ShowProduct;
