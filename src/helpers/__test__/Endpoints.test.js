import Endpoints from '../Endpoints'

const ep = new Endpoints('http://api')

describe('Endpoints ', () => {

  it('without params', () => {
    const tracks = ep.add('tracks')
    expect(tracks._getURL()).toBe('http://api/tracks')
  })

  it('with params', () => {
    const track = ep.add('track/:id')
    expect(track.params({ id: 2 })._getURL()).toBe('http://api/track/2')
  })

})
