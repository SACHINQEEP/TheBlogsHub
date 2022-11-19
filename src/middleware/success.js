
const success = function(res, status, statusCode, message, response){

    let send = {
        status, 
        message,
        response
    }

    if(response == null || response == undefined){
        delete send.response
    }
    return res.status(status).json(send)
}

module.exports = success