/* eslint-disable no-undef */

const expect = chai.expect // expect function from chaijs

// `describe` block used to describe a group of Tests
describe('Feet and inches to CM tests', () => {

  //`it` block describes a single test
  it('should return a number', done => {
    expect(ftAndInchesToCm(5, 10)).to.be.a('number')
    done()
  })

  it('it should return ft and inchs to cm', done => {
    expect(ftAndInchesToCm(5, 10)).to.be.eq(178)
    expect(ftAndInchesToCm(4, 8)).to.be.eq(142)
    expect(ftAndInchesToCm(6, 2)).to.be.eq(188)
    done()
  })

})
