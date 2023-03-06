import { ProfileSchema } from '../types/profile';
import { createSlice } from '@reduxjs/toolkit'

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
  error: undefined,
  data: undefined
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {

  }
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice