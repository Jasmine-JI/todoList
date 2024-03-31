const headers = require('./corsHeader');

function errorHandle(res){
    res.writeHead(400, headers);
    res.write(JSON.stringify({
        status: "failed",
    message: "格式錯誤，欄位未填寫正確，或無此 todo id",
    }));
    res.end();
}

module.exports = errorHandle;
