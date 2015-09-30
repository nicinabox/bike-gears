import gearInches from './gearInches';

export default (values) => {
  var { chainring, cog } = values
  var circumference = 680 * Math.PI

  return +(circumference * chainring / cog / 1000).toFixed(2)
}
