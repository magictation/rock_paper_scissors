const winston = require('winston');

const winstonFormat = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp(),
  winston.format.align(),
  winston.format.printf(info => {
    if (!info.durationMs) {
      return `${info.timestamp} ${info.level}: ${info.message}`;
    } else {
      return `${info.timestamp} ${info.level}: ${info.message}  duration=${info.durationMs}ms`;
    }
  })
);

const logger = winston.createLogger({
  transports: [new winston.transports.Console({
    format: winstonFormat,
  })],
});

module.exports = logger;