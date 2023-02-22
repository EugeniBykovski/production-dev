import { DeepPartial } from '@reduxjs/toolkit'
import { getCounter } from "./getCounter"
import { StateSchema } from "app/providers/StoreProvider"

describe('getCounter', () => {
  test('should return counter value', () => {
    // here we expect this selector to return the state we want
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 }
    }

    expect(getCounter(state as StateSchema)).toEqual({ value: 10 })
  })
})