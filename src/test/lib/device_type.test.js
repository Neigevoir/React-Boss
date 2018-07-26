import deviceType from 'src/app/lib/device_type'

describe('lib device type test', () => {
  let device = deviceType()
  it('device type test', () => {
    expect(device).toEqual({ isAndroid: false, isIphoneX: false, isiOS: false })
  })
})
