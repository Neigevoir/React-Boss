import actions from 'src/app/actions/app_actions'

describe('App actions', function() {
  it('#clearMessage', function() {
    const action = actions.clearMessage()
    expect(action).toEqual({
      type: 'APP:CLEAR_MESSAGE'
    })
  })

  it('#turnOnMinimalHeader', function() {
    const action = actions.turnOnMinimalHeader()
    expect(action).toEqual({
      type: 'APP:MINIMAL_HEADER:ON'
    })
  })

  it('#turnOffMinimalHeader', function() {
    const action = actions.turnOffMinimalHeader()
    expect(action).toEqual({
      type: 'APP:MINIMAL_HEADER:OFF'
    })
  })

  it('#toggleMinimalHeader', function() {
    const action = actions.toggleMinimalHeader()
    expect(action).toEqual({
      type: 'APP:MINIMAL_HEADER:TOGGLE'
    })
  })
  
  it('#setSelectInterest', function() {
    const selectInterest = { data: 'test' }
    const action = actions.setSelectInterest(selectInterest)
    expect(action).toEqual({
      type: 'APP:SET_SELECT_INTEREST',
      data: selectInterest
    })
  })
})
