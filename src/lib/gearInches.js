export default (values) => {
  var { chainring, cog, wheel_diameter_inches } = values

  return +(wheel_diameter_inches * chainring / cog).toFixed()
}
