const emitter = require('./monitor');

const logs = [
  'INFO: Application started',
  'ERROR: Database connection failed',
  'WARN: Memory usage high',
  'HIGH_CPU: CPU usage at 97%',
  'INFO: User login successful',
  'DISK_FULL: No space left on disk',
];

function startLogging(interval = 5000) {
    return setInterval(() => {
        const randlog = logs[Math.floor(Math.random() * logs.length)];
        console.log(`Generated: ${randlog}`);

        emitter.emit('logsEvent', randlog);
    }, interval);
}

// start it if run directly
if (require.main === module) {
    startLogging();
}

module.exports = { startLogging, logs };
