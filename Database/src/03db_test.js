const db = require('./db');

(async ()=>{
    let res = await db.find('user',{age:{$gt:30}})
    console.log('res:',res);
})()