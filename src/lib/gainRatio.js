export default (values) => {
  var { chainring, cog, crank } = values
  const WHEEL_SIZE = 680 / 2 // mm

  var radiusRatio = WHEEL_SIZE / crank
  return +(radiusRatio * chainring / cog).toFixed(2)
}
