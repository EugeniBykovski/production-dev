import { LoginSchema } from '../types/loginSchema';
import { DeepPartial } from "@reduxjs/toolkit"
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
  test('test set username', async () => {
    const state: DeepPartial<LoginSchema> = { username: '123' }
    expect(loginReducer(state as LoginSchema, loginActions.setUsername('12345')))
      .toEqual({ username: '12345' })
  })

  test('test set password', async () => {
    const state: DeepPartial<LoginSchema> = { password: '123' }
    expect(loginReducer(state as LoginSchema, loginActions.setPassword('12345')))
      .toEqual({ password: '12345' })
  })
})