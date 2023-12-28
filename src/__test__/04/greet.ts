export const greet = (name: string, callback?: (message: string)=> void) => {
  callback?.(`Hello ${name}`)
}

export const greetByTime = () => {
  const hour = new Date().getHours()
  if(hour < 12) {
    return 'おはよう'
  } else if (hour < 18) {
    return 'こんにちは'
  }
  return 'こんばんは'
}