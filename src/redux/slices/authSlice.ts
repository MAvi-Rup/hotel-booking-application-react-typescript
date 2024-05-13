import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  email: string;
  password: string;
}

interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
}

const initialUser: User | null = {
  email: "user@example.com",
  password: "password",
};

const initialState: AuthState = {
  isLoggedIn: false,
  user: initialUser,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) => {
      const { email, password } = action.payload;
      if (
        state.user && // Ensure user is not null
        state.user.email === email &&
        state.user.password === password
      ) {
        state.isLoggedIn = true;
      } else {
        // Invalid credentials
        state.isLoggedIn = false;
      }
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice;
