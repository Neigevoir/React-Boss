import app_reducer from 'src/app/reducers/app_reducer'

describe('app_reducer test', () => {
  let initialState = {
      subscription: { isSubmitting: false },
      customer: {
        isSubmitting: false,
        selectInterest: false
      },
      minimalHeader: false,
      message: undefined,
      saleActive: false,
      platform: 'mobile_web'
    },
    action = {
      type: 'APP:SET_SELECT_INTEREST'
    },
    wraper
  it('action type === "APP:SET_SELECT_INTEREST"', () => {
    wraper = app_reducer(initialState, action)
    expect(wraper.customer.selectInterest).toBe(true)
  })

  it('action type === "API:CUSTOMER:SAVE:STARTED"', () => {
    action = {
      type: 'API:CUSTOMER:SAVE:STARTED'
    }
    wraper = app_reducer(initialState, action)
    expect(wraper.customer.isSubmitting).toBe(true)
  })

  it('action type === "API:CUSTOMER:SAVE:COMPLETE"', () => {
    action = {
      type: 'API:CUSTOMER:SAVE:COMPLETE'
    }
    wraper = app_reducer(initialState, action)
    expect(wraper.customer.isSubmitting).toBe(false)
  })

  it('action type === "API:SUBSCRIPTION:UPDATE:COMPLETE"', () => {
    action = {
      type: 'API:SUBSCRIPTION:UPDATE:COMPLETE'
    }
    wraper = app_reducer(initialState, action)
    expect(wraper.customer.isSubmitting).toBe(false)
  })

  it('action type === "APP:SET_MESSAGE"', () => {
    action = {
      type: 'APP:SET_MESSAGE',
      message: 'test'
    }
    wraper = app_reducer(initialState, action)
    expect(wraper.message).toEqual('test')
  })

  it('action type === "APP:MINIMAL_HEADER:OFF"', () => {
    action = {
      type: 'APP:MINIMAL_HEADER:OFF'
    }
    wraper = app_reducer(initialState, action)
    expect(wraper.minimalHeader).toBe(false)
  })

  it('action type === "APP:MINIMAL_HEADER:ON"', () => {
    action = {
      type: 'APP:MINIMAL_HEADER:ON'
    }
    wraper = app_reducer(initialState, action)
    expect(wraper.minimalHeader).toBe(true)
  })

  it('action state === initialState', () => {
    action = {
      type: ''
    }
    initialState = { customer: {} }
    wraper = app_reducer(initialState, action)
    expect(wraper).toEqual(initialState)
  })
})
