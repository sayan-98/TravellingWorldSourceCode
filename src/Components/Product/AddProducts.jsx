import React, { useEffect, useState } from "react";
import "./product.css";
import { useSelector, useDispatch } from "react-redux";
import { createProduct, reset_createProduct } from "../../Redux/crudSlice";
import { toast } from "react-toastify";

const AddProducts = () => {
  const { status } = useSelector((state) => state.crud);

  const [productData, setProductData] = useState({
    title: "",
    description: "",
  });
  // Destructure
  const { title, description } = productData;
  const [productError, setProductError] = useState({});
  const [productImg, setProductImg] = useState({});

  // Assing useDispatch and useNavigate hook into a variable
  const dispatch = useDispatch();
  // const navigate = useNavigate();

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

    // Collect Product Data
    const proData = new FormData();
    proData.append("title", title);
    proData.append("description", description);
    proData.append("image", productImg);

    if (Object.keys(errorInValidation).length === 0) {
      toast.success("Product Added Successfully");
      dispatch(createProduct(proData));
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

  useEffect(() => {
    dispatch(reset_createProduct());
  }, [status]);

  return (
    <>
      <section className="addProduct">
        <div className="container formStyle">
          <div className="register-form">
            <h2>Add New Destinations</h2>
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
              <div className="mb-4">
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
              </div>
              <div className="btnStyle">
                <button type="submit" className="btn">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddProducts;
