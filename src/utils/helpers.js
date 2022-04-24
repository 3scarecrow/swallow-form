import {
  isArray,
  isFunction,
  isPromise,
  isString,
  isUndef,
  isPlainObject
} from './types'

export function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key)
}

export function ensureArray(val) {
  return isArray(val) ? val : [val]
}

export function ensureFunction(val, args) {
  return isFunction(val)
    ? val
    : isString(val) && args
    ? new Function(args, val)
    : () => val
}

export function ensurePromise(val) {
  return isPromise(val) ? val : Promise.resolve(val)
}

export function pick(object, keys) {
  return keys.reduce((prev, key) => {
    object && hasOwn(object, key) && (prev[key] = object[key])
    return prev
  }, {})
}

export function omit(object, keys) {
  return Object.keys(object)
    .filter((key) => !keys.includes(key))
    .reduce((prev, key) => {
      object && hasOwn(object, key) && (prev[key] = object[key])
      return prev
    }, {})
}

export function get(obj, path) {
  const segs = path.split('.')
  if (hasOwn(obj, path)) {
    return obj[path]
  }
  let len = segs.length
  let idx = 0
  do {
    let prop = segs[idx]
    if (prop in obj) {
      obj = obj[prop]
    } else {
      break
    }
  } while (++idx < len)
  return obj
}

export function normalizeAttrs(data) {
  if (!isPlainObject(data)) return data
  const { props } = data
  if (isUndef(props)) return data
  const { style, class: className } = props
  return Object.assign(data, { style, class: className })
}
