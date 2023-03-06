import { getLoginPassword } from './getLoginPassword';
import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

describe('getLoginPassword.test', () => {
  test('should return password', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: '12345'
      }
    }

    expect(getLoginPassword(state as StateSchema)).toEqual('12345')
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginPassword(state as StateSchema)).toEqual('')
  })
})