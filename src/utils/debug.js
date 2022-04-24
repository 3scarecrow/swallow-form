export const error = (name, msg) => {
  // eslint-disable-next-line no-console
  console.error(
    `%c ${name} error %c ${msg}`,
    'background:#e30;padding:1px;border-radius:3px;color:#fff',
    'background:transparent'
  )
}
