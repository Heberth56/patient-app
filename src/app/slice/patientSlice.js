import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addPatientApi,
  editPatientApi,
  listPatientApi,
  removePatientApi,
  getPatientApi,
} from "../api/patientApi";

const initialState = {
  data: [],
  isLoading: false,
  error: false,
  message: "",
  formData: {
    _id: "",
    nombre: "",
    paterno: "",
    materno: "",
    age: "",
    phone: "",
  },
};

export const addPatientDataThunk = createAsyncThunk(
  "add-patient/post",
  async (payload, { rejectWithValue }) => {
    try {
      const { futuresyo } = await addPatientApi(payload);
      if (futuresyo.success) return futuresyo.data;
      else return rejectWithValue(futuresyo.message);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const editPatientDataThunk = createAsyncThunk(
  "edit-patient/post",
  async (payload, { rejectWithValue }) => {
    try {
      const { futuresyo } = await editPatientApi(payload);
      if (futuresyo.success) return futuresyo.data;
      else return rejectWithValue(futuresyo.message);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const listPatientDataThunk = createAsyncThunk(
  "list-patient/post",
  async (_, { rejectWithValue }) => {
    try {
      const { chiri } = await listPatientApi();
      if (chiri.success) return chiri.data;
      else return rejectWithValue(chiri.message);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const getPatientDataThunk = createAsyncThunk(
  "get-patient/post",
  async (payload, { rejectWithValue }) => {
    try {
      const { chiri } = await getPatientApi(payload);
      if (chiri.success) return chiri.data;
      else return rejectWithValue(chiri.message);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const removePatientDataThunk = createAsyncThunk(
  "delete-patient/delete",
  async (payload, { rejectWithValue }) => {
    try {
      const { chiri } = await removePatientApi(payload);
      if (chiri.success) return chiri.data;
      else return rejectWithValue(chiri.message);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: { resetState: () => initialState },
  extraReducers: (builder) => {
    builder
      .addCase(addPatientDataThunk.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.message = "";
      })

      .addCase(addPatientDataThunk.fulfilled, (state, action) => {
        state.isLoading = false;
      })

      .addCase(addPatientDataThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        state.message = action.payload;
      })

      .addCase(editPatientDataThunk.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.message = "";
      })

      .addCase(editPatientDataThunk.fulfilled, (state, action) => {
        state.isLoading = false;
      })

      .addCase(editPatientDataThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        state.message = action.payload;
      })

      .addCase(listPatientDataThunk.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.message = "";
      })

      .addCase(listPatientDataThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })

      .addCase(listPatientDataThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        state.message = action.payload;
      })

      .addCase(getPatientDataThunk.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.message = "";
      })

      .addCase(getPatientDataThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.formData = action.payload;
      })

      .addCase(getPatientDataThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        state.message = action.payload;
      })

      .addCase(removePatientDataThunk.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.message = "";
      })

      .addCase(removePatientDataThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        let index = state.data.findIndex((elem) => elem._id == action.payload);
        if (index !== -1) state.data.splice(index, 1);
      })

      .addCase(removePatientDataThunk.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const patientLoading = (state) => state.patientSlice.isLoading;
export const patientError = (state) => state.patientSlice.error;
export const patientMessage = (state) => state.patientSlice.message;
export const patientData = (state) => state.patientSlice.data;
export const patientForm = (state) => state.patientSlice.formData;

export const { resetState } = patientSlice.actions;

export default patientSlice.reducer;
