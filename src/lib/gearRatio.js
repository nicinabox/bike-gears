export default (values) => {
  var { chainring, cog } = values
  return +(chainring / cog).toFixed(2)
}
