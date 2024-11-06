import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addConsultApi,
  listConsultApi,
  removeConsultApi,
  filterConsultApi,
} from "../api/consultApi";

const initialState = {
  data: [],
  content: [],
  isLoading: false,
  error: false,
  message: "",
  formData: {
    _id: "",
    fecha: "",
    patient_id: "",
    medicion_type: "",
    costo: "",
  },
};

export const addConsultDataThunk = createAsyncThunk(
  "add-consult/post",
  async (payload, { rejectWithValue }) => {
    try {
      const { futuresyo } = await addConsultApi(payload);
      if (futuresyo.success) return futuresyo.data;
      else return rejectWithValue(futuresyo.message);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const listConsultDataThunk = createAsyncThunk(
  "list-consult/get",
  async (_, { rejectWithValue }) => {
    try {
      const { chiri } = await listConsultApi();
      if (chiri.success) return chiri.data;
      else return rejectWithValue(chiri.message);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const filterConsultDataThunk = createAsyncThunk(
  "filter-consult/get",
  async (payload, { rejectWithValue }) => {
    try {
      const { chiri } = await filterConsultApi(payload);
      if (chiri.success) return chiri.data;
      else return rejectWithValue(chiri.message);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const removeConsultDataThunk = createAsyncThunk(
  "delete-consult/delete",
  async (payload, { rejectWithValue }) => {
    try {
      const { chiri } = await removeConsultApi(payload);
      if (chiri.success) return chiri.data;
      else return rejectWithValue(chiri.message);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const consultSlice = createSlice({
  name: "consult",
  initialState,
  reducers: { resetState: () => initialState },
  extraReducers: (builder) => {
    builder
      .addCase(addConsultDataThunk.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.message = "";
      })

      .addCase(addConsultDataThunk.fulfilled, (state, action) => {
        state.isLoading = false;
      })

      .addCase(addConsultDataThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        state.message = action.payload;
      })

      .addCase(listConsultDataThunk.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.message = "";
      })

      .addCase(listConsultDataThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })

      .addCase(listConsultDataThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        state.message = action.payload;
      })

      .addCase(filterConsultDataThunk.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.message = "";
      })

      .addCase(filterConsultDataThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.content = action.payload;
      })

      .addCase(filterConsultDataThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        state.message = action.payload;
      })

      .addCase(removeConsultDataThunk.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.message = "";
      })

      .addCase(removeConsultDataThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        let index = state.data.findIndex((elem) => elem._id == action.payload);
        if (index !== -1) state.data.splice(index, 1);
      })

      .addCase(removeConsultDataThunk.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const consultLoading = (state) => state.consultSlice.isLoading;
export const consultError = (state) => state.consultSlice.error;
export const consultMessage = (state) => state.consultSlice.message;
export const consultData = (state) => state.consultSlice.data;
export const consultContent = (state) => state.consultSlice.content;
export const consultForm = (state) => state.consultSlice.formData;

export const { resetState } = consultSlice.actions;

export default consultSlice.reducer;
