export const cleanUrl = url => {
  if(!url) return
  let modifiedUrl = url.replace(/\/$/, '')
  if (!/^(?:f|ht)tps?\:\/\//.test(modifiedUrl)) modifiedUrl = `https://${modifiedUrl}`
  return modifiedUrl
}
