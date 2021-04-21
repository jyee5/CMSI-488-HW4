const regexes = {
  canadianPostalCode: /^((?!D)(?!F)(?!I)(?!O)(?!Q)(?!U)[A-CEG-HJ-NPR-TVX-Y]\d[A-CEG-HJ-NPR-TV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d)$/,
  visa: /^4(\d{12}(?:\d{3})?)$/,
  masterCard: /^(?:5[1-5]\d{2}|222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[01]\d|2720)\d{12}$/,
  adaFloat: /^\d(_?\d)*(((\.\d(_?\d)*)?)|(#[\dA-Za-z](_?[\dA-Za-z])*((\.[\dA-Za-z](_?[\dA-Za-z])*)?#)))([Ee](-|\+)?\d(_?\d)*)?$/,
  notThreeEndingInOO: /^[A-Za-z]*(?<![oO][oO])$/,
  divisibleBy64: /^(0|(0|1)*1000000)*$/,
  eightThroughTwentyNine: /^([8-9]|(1|2)\d)$/,
  mLComment: /^\(\*((?!\*\)).)*\*\)$/,
  notDogDoorDenNoLookAround: /^([a-ce-zA-Z][a-zA-Z]*|d([a-df-np-z][a-zA-Z]*)?|do([a-fh-np-zA-Z][a-zA-Z]*)?|dog[a-zA-Z]+|doo([a-qs-zA-Z][a-zA-Z]*)?|door[a-zA-Z]+|de([a-mo-zA-Z][a-zA-Z]*)?|den[a-zA-Z]+)?$/,
  notDogDoorDenWithLookAround: /^(?!dog$|den$|door$)[A-Za-z]*$/,
}

export function matches(name, string) {
  return regexes[name].test(string)
}