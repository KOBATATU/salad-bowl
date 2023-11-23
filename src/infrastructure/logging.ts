import pino from 'pino'

export type Option = {
  path?: string
  status?: number
  message?: string
  time?: number
}

const pinoConfig = {
  level: process.env.NODE_ENV !== 'production' ? 'debug' : 'info',
  browser: 
   { disabled: true },
  formatters: {
    level: (label: string) => {
      return {
        level: label,
      }
    },
  },
  timestamp: pino.stdTimeFunctions.isoTime,

}

const logger = pino(pinoConfig)

export const loggerError = (option: Option) => {
  return logger.error(option)
}

export const loggerWarn = (option: Option) => {
  return logger.warn(option)
}

export const loggerInfo = (option: Option) => {
  return logger.info(option)
}

export const loggerDebug = (option: Option) => {
  return logger.debug(option)
}