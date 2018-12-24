export const cleanUrl = url => {
  let modifiedUrl = url.replace(/\/$/, '')
  if (!/^(?:f|ht)tps?\:\/\//.test(modifiedUrl)) modifiedUrl = `https://${modifiedUrl}`
  return modifiedUrl
}
