import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const fetchEmployees = createAsyncThunk(
  "employees/get",
  async (word = "") => {
    const response = await fetch(
      `http://localhost:3005/employees/?search=${word}`
    );

    const data = await response.json();

    return data;
  }
);

export const deleteEmployee = createAsyncThunk(
  "employee/delete",
  async (id) => {
    const url = `http://localhost:3005/employees/${id}`;

    const options = {
      method: "DELETE",
    };

    const response = await fetch(url, options);

    const data = await response.json();

    return data;
  }
);

export const addEmployee = createAsyncThunk(
  "employee/add",
  async (employee) => {
    const url = `http://localhost:3005/employees/`;

    const options = {
      method: "POST",
      body: JSON.stringify(employee),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(url, options);

    const data = await response.json();

    return data;
  }
);

export const editEmployee = createAsyncThunk(
  "employee/edit",
  async (employee) => {
    const url = `http://localhost:3005/employees/${employee.id}`;

    const options = {
      method: "PUT",
      body: JSON.stringify(employee),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(url, options);

    const data = await response.json();

    return data;
  }
);

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    resetResponseMsg(state, action) {
      state.responseMsg = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(deleteEmployee.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(addEmployee.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(editEmployee.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(fetchEmployees.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const { resetResponseMsg } = employeeSlice.actions;

export default employeeSlice.reducer;
