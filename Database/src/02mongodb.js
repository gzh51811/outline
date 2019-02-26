/**
 * 操作MongoDB的步骤
 * 1.连接MongoDB：mongodb.MongoClient.connect(url,callback)
 * 2.连接数据库：client.db(DB_NAME)
 * 3.使用集合：db.collection(COLLECTION_NAME)
 * 4.文档操作：CRUD
 */
const mongodb = require('mongodb');

// 创建mongo客户端
const MongoClient = mongodb.MongoClient;

// 方式1.连接数据库
// MongoClient.connect("mongodb://localhost:27017/laoxie", function(err, database) {
//     if(err) throw err;

// });

// 方式2：
MongoClient.connect("mongodb://localhost:27017", function(err, client) {
    if(err) throw err;

    // 连接数据库，无则自动创建
    let db = client.db('laoxie');

    // 使用某个集合
    let collecton = db.collection('user');

    // 文档操作：CRUD
    collecton.find({age:38}).toArray((err,data)=>{
        console.log('data:',data);

        // 查询结束后，关闭client
        client.close();
    })
});