import { mergeIn, setIn } from '../reducers'

let state
let newState

beforeEach(() => {
  state = {
    name: 'john',
    age: 20,
    address: {
      street: 'baker',
      house: {
        number: 1,
        room1: {
          name: 'child'
        }
      }
    }
  }
})

afterEach(() => expect(state).not.toBe(newState))

describe('reducers helper ', () => {

  it('deep 1 set', () => {
    newState = setIn(state, 'name', 'boo')
    expect(newState.name).toBe('boo')
  })

  it('deep 2 lvl set', () => {
    newState = setIn(state, 'address', 'street', 'faker')
    expect(newState.address.street).toBe('faker')
  })

  it('root merge', () => {
    newState = mergeIn(state, { gender: 'man' })
    expect(newState).toEqual({
      'address': {
        'house': {
          'number': 1,
          'room1': { 'name': 'child' }
        },
        'street': 'baker'
      },
      'age': 20,
      'gender': 'man',
      'name': 'john'
    })
  })

  it('deep 1 merge', () => {
    newState = mergeIn(state, 'address', { street: 'faker' })
    expect(newState).toEqual({
      'address': {
        'house': {
          'number': 1,
          'room1': { 'name': 'child' }
        },
        'street': 'faker'
      },
      'age': 20,
      'name': 'john'
    })
  })

  it('deep 1 merge', () => {
    newState = mergeIn(state, 'address', 'house', { number: 3 })
    expect(newState).toEqual({
      'address': {
        'house': {
          'number': 3,
          'room1': { 'name': 'child' }
        },
        'street': 'baker'
      },
      'age': 20,
      'name': 'john'
    })
  })

})
