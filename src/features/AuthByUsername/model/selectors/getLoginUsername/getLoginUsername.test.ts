import { getLoginUsername } from './getLoginUsername';
import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

describe('getLoginUsername.test', () => {
  test('should return username', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: 'admin'
      }
    }

    expect(getLoginUsername(state as StateSchema)).toEqual('admin')
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginUsername(state as StateSchema)).toEqual('')
  })
})