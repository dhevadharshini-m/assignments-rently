// listener

const eventEmitter =  require('events');
const emitter = new eventEmitter();

const fs= require('fs');
const path= require('path');

const criticalLevels = ['ERROR' , 'HIGH_CPU' , 'DISK_FULL'];

const alertcount = {
    ERROR: 0,
    HIGH_CPU: 0,
    DISK_FULL: 0,
};

emitter.on('logsEvent',(log)=>{
    console.log(log);

    const level = log.split(':')[0];

    if(criticalLevels.includes(level))
         alertcount[level]++;
    console.log(`Critical Alert Detected: ${level}`);
    

    const logpath = path.join(__dirname , '/alerts.log');
    fs.appendFile(logpath , `${new Date().toISOString()} - ${log}\n`,(err)=>{
        if(err){
            console.log("Error in appending");
        }
        else{
            console.log("log written successfully");
        }
    })

    const totalAlerts = Object.values(alertcount).reduce((a, b) => a + b, 0);
    if (totalAlerts % 5 === 0) {
        console.log("------ Alert Summary ------");
        console.log(alertcount);
    }
})

module.exports = emitter;