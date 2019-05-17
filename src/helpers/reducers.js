const _updaters = {
  3: ([s, k, v]) => ({ ...s, [k]: v }),
  4: ([s, k1, k2, v]) => ({ ...s, [k1]: { ...s[k1], [k2]: v } })
}

export const setIn = (...args) => {
  try {
    return _updaters[args.length](args)
  }
  catch (e) { console.error('[setIn] Invalid path length: ' + args.join(' ')) }
  return args[0]
}

export const createReducer = (initialState, handlers) =>
  (state = initialState, action) =>
    handlers.hasOwnProperty(action.type)
      ? handlers[action.type](state, action)
      : state


