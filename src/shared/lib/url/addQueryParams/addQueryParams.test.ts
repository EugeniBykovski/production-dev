import { getQueryParams } from "./addQueryParams"

describe('shared/url/addQueryParams', function() {
  test('test with one param', () => {
    const params = getQueryParams({
      test: 'value'
    })

    expect(params).toBe('?test=value')
  })

  test('test with wultiple params', () => {
    const params = getQueryParams({
      test: 'value',
      second: '2'
    })

    expect(params).toBe('?test=value&second=2')
  })

  test('test with udnefined', () => {
    const params = getQueryParams({
      test: 'value',
      second: undefined
    })

    expect(params).toBe('?test=value')
  })
})