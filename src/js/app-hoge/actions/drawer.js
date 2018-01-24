export const OPEN_DRAWER = 'OPEN_DRAWER'
export const CLOSE_DRAWER = 'CLOSE_DRAWER'
export const TOGGLE_DRAWER = 'TOGGLE_DRAWER'

export function openDrawer() {
  return { type: OPEN_DRAWER }
}

export function closeDrawer() {
  return { type: CLOSE_DRAWER }
}

export function toggleDrawer() {
  return { type: TOGGLE_DRAWER }
}
