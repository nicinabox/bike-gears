export default (min, max) => {
  var a = [], b = (max + 1) - min
  while (b--) a[b] = b + min
  return a
}
