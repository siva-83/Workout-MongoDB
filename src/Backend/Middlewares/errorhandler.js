// const CustomError = require('../utils/customError')

module.exports = (err, req, res, next) => {

    let status = 500
    let message = ''
    console.log("why i am hear")

   
   
    // Duplicate key error
    if(err.code == 11000){
         message = `Duplicate key`;
         status = 200
        //err = new CustomError(message, 400);
        console.log("i am workoing fine ra", message)
    }


    res.status(status).json({
        success: false,
        message: message
    })
}