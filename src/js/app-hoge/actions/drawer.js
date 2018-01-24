export const OPEN_DRAWER = 'OPEN_DRAWER'
export const CLOSE_DRAWER = 'CLOSE_DRAWER'
export const TOGGLE_DRAWER = 'TOGGLE_DRAWER'

export function open() {
  return { type: OPEN_DRAWER }
}

export function close() {
  return { type: CLOSE_DRAWER }
}

export function toggle() {
  return { type: TOGGLE_DRAWER }
}
