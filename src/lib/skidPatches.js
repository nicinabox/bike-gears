var reduceRatio = (numerator, denominator) => {
  return denominator === 0 ?
    numerator :
    reduceRatio(denominator, numerator % denominator)
}

export default (values, isAmbidextrous) => {
  var { chainring, cog} = values
  var reduction = reduceRatio(chainring, cog)
  var skidpatches = cog / reduction;

  if (isAmbidextrous) {
    return (chainring / reduction % 2) > 0 ? skidpatches * 2 : skidpatches
  } else {
    return skidpatches
  }
}
