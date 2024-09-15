import React, { useState, useEffect } from "react";
import "./product.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { editProduct, updateProduct } from "../../Redux/crudSlice";
import { productImagePath } from "../../Helper/Helper";

const EditProduct = () => {
  const { id } = useParams();
  //   console.log(id); // For Testing

  useEffect(() => {
    dispatch(editProduct(id));
  }, [id]);

  const { editProductDetails } = useSelector((state) => state.crud);
  //   console.log(editProductDetails);

  const [productData, setProductData] = useState({
    title: "",
    description: "",
  });

  // Showing product image for edit
  const [pImg, setPImg] = useState(null); // Updated

  // Destructure
  const { title, description } = productData;
  const [productImg, setProductImg] = useState({});
  const [productError, setProductError] = useState({});

  // Assign useDispatch hook into a variable
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleProductImg = (e) => {
    setProductImg(e.target.files[0]);
  };

  const productValidation = (data) => {
    let productValidationError = {};

    if (!data.title.trim()) {
      productValidationError.title = "Title is required";
    }
    if (!data.description.trim()) {
      productValidationError.description = "Description is Required";
    }

    return productValidationError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorInValidation = productValidation(productData);

    // Collected edited product data
    const proData = new FormData();
    proData.append("id", id);
    proData.append("title", title);
    proData.append("description", description);
    proData.append("image", productImg);

    // Submited Edited Form data into server
    if (Object.keys(errorInValidation).length === 0) {
      toast.success("Product Edited Successfully");
      dispatch(updateProduct(proData));
    } else {
      setProductError(errorInValidation);
      toast.error("Something went wrong");
    }

    // For clear input fields
    setProductData({
      title: "",
      description: "",
    });
  };

  // Product data will fill automatically in product edit form
  useEffect(() => {
    if (editProductDetails !== null) {
      setProductData({
        title: editProductDetails.title,
        description: editProductDetails.description,
      });
      setPImg(editProductDetails.image); // Updated
    }
  }, [editProductDetails]);

  return (
    <>
      <div className="container formStyle">
        <div className="register-form">
          <h2>Edit Product</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                className="form-control inputFieldStyle"
                id="title"
                name="title"
                value={title}
                placeholder="Title"
                onChange={handleChange}
              />
              <small className="errStyle">{productError.title}</small>
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="form-control inputFieldStyle"
                id="description"
                name="description"
                value={description}
                placeholder="Description"
                onChange={handleChange}
              />
              <small className="errStyle">{productError.description}</small>
            </div>
            <div>
              {/* <label htmlFor="profilePicture" className="form-label">
                Product Picture
              </label> */}
              <input
                type="file"
                className="form-control"
                id="productImg"
                name="productImg"
                accept="image/*"
                onChange={handleProductImg}
              />
              <img
                src={productImagePath(pImg)}
                alt="Product"
                className="productImgEditStyle"
              />{" "}
              {/* Updated */}
            </div>
            <div className="btnStyle">
              <button type="submit" className="btn">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
