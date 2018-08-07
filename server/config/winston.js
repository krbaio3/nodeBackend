import {
  transports,
  format,
  createLogger,
  Logger
} from 'winston';

const logger = createLogger({
  format: format.combine(
    format.timestamp(),
    format.colorize(),
    format.printf(info => `[${info.timestamp}] ${info.level}: ${info.message}`)
  ),
  transports: [
    new transports.Console({
      json: true,
      colorize: true
    }),
    //
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    //
    new transports.File({
      filename: 'error.log',
      level: 'error'
    }),
    new transports.File({
      filename: 'combined.log'
    })
  ]
});

export default logger;
