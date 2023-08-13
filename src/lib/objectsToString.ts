function objectsToArray(object: object) {
  let result: string[] = []

  Object.values(object).forEach((value) => {
    if (typeof value === "string") {
      result = [...result, value]
    } else if (typeof value === "object" && !Array.isArray(value) && value !== null) {
      result = [...result, ...objectsToArray(value)]
    }

    return undefined
  });

  return result
}

export function objectsToString(object: object) {
  return objectsToArray(object).join(" ")
}