import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../Helper/Helper";

const initialState = {
  status: "",
  allProduct: [],
  currentPage: 1,
  perPage: 6,
  totalPages: 1,
  editProductDetails: [],
};

// Create Product API Calling
export const createProduct = createAsyncThunk(
  "product/create",
  async (productData) => {
    const response = await axiosInstance.post("product/create", productData);
    const result = response.data;

    return result;
  }
);

// Show Product API Calling
export const showProduct = createAsyncThunk(
  "product/detail/",
  async ({ page, perpage }) => {
    const response = await axiosInstance.post("product/list", {
      page,
      perpage,
    });
    const result = response.data;
    return result;
  }
);

// Edit Product API Calling
export const editProduct = createAsyncThunk("edit", async (id) => {
  const response = await axiosInstance.get(`product/detail/${id}`);
  const result = response.data;

  return result;
});

// Update Product API Calling
export const updateProduct = createAsyncThunk(
  "updateProduct",
  async (productData) => {
    const response = await axiosInstance.post(`product/update`, productData);
    const result = response.data;

    return result;
  }
);

export const deleteProduct = createAsyncThunk("/delete", async (id) => {
  const response = await axiosInstance.post(`product/remove`, id);
  const result = response?.data;
  return result;
});

export const crudSlice = createSlice({
  name: "CRUD",
  initialState,
  reducers: {
    reset_createProduct: (state) => {
      state.status = "";
    },
    setPage: (state, { payload }) => {
      state.currentPage = payload;
    },
  },
  extraReducers: (builder) => {
    // Add Product Promise handle
    builder.addCase(createProduct.pending, (state) => {
      state.status = "Loading";
    });
    builder.addCase(createProduct.fulfilled, (state, { payload }) => {
      state.status = "Success";
    });
    builder.addCase(createProduct.rejected, (state) => {
      state.status = "Rejected";
    });
    builder.addCase(showProduct.pending, (state) => {
      state.status = "Loading";
    });
    builder.addCase(showProduct.fulfilled, (state, { payload }) => {
      state.status = "Success";
      if (payload.status === 200) {
        state.allProduct = payload?.data;
        state.totalPages = payload.totalPages;
      }
    });
    builder.addCase(showProduct.rejected, (state) => {
      state.status = "Rejected";
    });
    // Edit Product Promise Handle
    builder.addCase(editProduct.pending, (state) => {
      state.status = "Loading...";
    });
    builder.addCase(editProduct.fulfilled, (state, { payload }) => {
      state.status = "Success";
      state.editProductDetails = payload.data;
    });
    builder.addCase(editProduct.rejected, (state) => {
      state.status = "Rejected";
    });
    // Update Product Promise handle
    builder.addCase(updateProduct.pending, (state) => {
      state.status = "Pending...";
    });
    builder.addCase(updateProduct.fulfilled, (state) => {
      state.status = "Success";
    });
    builder.addCase(updateProduct.rejected, (state) => {
      state.status = "Rejected";
    });
    // Delete Product promise handle
    builder.addCase(deleteProduct.pending, (state) => {
      state.status = "Loading...";
    });
    builder.addCase(deleteProduct.fulfilled, (state) => {
      state.status = "Success";
    });
    builder.addCase(deleteProduct.rejected, (state) => {
      state.status = "Rejected";
    });
  },
});

export const { reset_createProduct, setPage } = crudSlice.actions;
