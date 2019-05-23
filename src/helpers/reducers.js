const _mergers = {
  2: ([s, v]) => ({ ...s, ...v }),
  3: ([s, k1, v]) => ({ ...s, [k1]: { ...s[k1], ...v } }),
  4: ([s, k1, k2, v]) => ({ ...s, [k1]: { ...s[k1], [k2]: { ...s[k1][k2], ...v } } })
}

const _setters = {
  3: ([s, k, v]) => ({ ...s, [k]: v }),
  4: ([s, k1, k2, v]) => ({ ...s, [k1]: { ...s[k1], [k2]: v } })
}

export const setIn = (...args) => {
  try {
    return _setters[args.length](args)
  } catch (e) { console.error('[setIn] Invalid path length: ' + args.join(' ')) }
  return args[0]
}

export const mergeIn = (...args) => {
  try {
    return _mergers[args.length](args)
  } catch (e) { console.error('[setIn] Invalid path length: ' + args.join(' ')) }
  return args[0]
}

export const createReducer = (handlers, initialState = {}) =>
  (state = initialState, action) =>
    handlers.hasOwnProperty(action.type)
      ? handlers[action.type](state, action)
      : state


