export const isMobileDevice = () => {
  const ua = navigator.userAgent.toLowerCase()

  return /android|iphone|ipad|ipod|mobile/i.test(ua)
}