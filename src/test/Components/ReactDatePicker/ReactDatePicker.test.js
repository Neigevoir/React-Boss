import { shallow } from 'src/utilsTests'
import { expect } from 'chai'
import ReactDatePicker from 'src/app/components/ReactDatePicker'

describe('test react date picker component', () => {
  const handleDateSelected = jest.fn()
  const wrapper = shallow(ReactDatePicker, { handleDateSelected })
  it('test render .date-pick', function() {
    expect(wrapper.find('.date-pick')).to.have.length(1)
  })
  it('test render div', function() {
    expect(wrapper.find('div')).to.have.length(1)
  })
  it('test render a', function() {
    expect(wrapper.find('div')).to.have.length(1)
  })
  it('test render span', function() {
    expect(wrapper.find('div')).to.have.length(1)
  })
  it('test render input', function() {
    expect(wrapper.find('div')).to.have.length(1)
  })
  it('test onclick a ', function() {
    expect(wrapper.state('isOpen')).to.equal(false)
    wrapper.find('a.select-btn').simulate('click')
    expect(wrapper.state('isOpen')).to.equal(true)
  })
  it('test init isFirstSelect ', function() {
    expect(wrapper.state('isFirstSelect')).to.equal(true)
  })
})
