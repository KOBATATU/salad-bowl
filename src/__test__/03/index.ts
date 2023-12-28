export const add = (a:number, b:number) => {
  if(a < 0 || a > 100) {
    throw new Error('入力値は0~100の間にしてください')
  }

  if(b < 0 || b > 100) {
    throw new Error('入力値は0~100の間にしてください')
  }
  return a + b
}

export const wait = (duration: number) => {
  return new Promise((resolve)=> {
    setTimeout(()=>{
      resolve(duration)
    }, duration)
  })
}

export const timeout = (duration: number) => {
  return new Promise((resolve, reject)=> {
    setTimeout(()=>{
      reject(duration)
    }, duration)
  })
}