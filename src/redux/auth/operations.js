import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { clearContacts } from '../contacts/slice';

axios.defaults.baseURL = 'https://connections-api.goit.global';

function setAuthorizationHeader(token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

function unsetAuthorizationHeader() {
  delete axios.defaults.headers.common['Authorization'];
}

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      const data = response.data;

      setAuthorizationHeader(data.token);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/login', credentials);
      const data = response.data;

      setAuthorizationHeader(data.token);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
    } catch (err) {
      return rejectWithValue(err);
    }

    unsetAuthorizationHeader();
    dispatch(clearContacts());
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const token = getState().auth.token;

    if (!token) {
      return rejectWithValue('No token found');
    }

    setAuthorizationHeader(token);

    try {
      const response = await axios.get('/users/current');
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);