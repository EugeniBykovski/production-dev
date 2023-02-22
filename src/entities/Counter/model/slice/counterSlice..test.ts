import { CounterSchema } from '../types/counterSchema'
import { counterActions, counterReducer } from './counterSlice'

describe('counterSlice', () => {
  test('decrement test', () => {
    const state: CounterSchema = { value: 10 }
    expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 })
  })

  test('increment test', () => {
    const state: CounterSchema = { value: 10 }
    expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 })
  })

  // a test that checks the functionality of the redirector and the action when the state is empty
  test('should work with empty state', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 })
  })
})