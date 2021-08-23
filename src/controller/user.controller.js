
const userRepository = require("../repository/user.repository");

exports.register = async (req, res) => {
    console.log('req.body');
    console.log(req.body);
    const {id,passwd,passwdOk,name,phone,email} = req.body;
    const result = await userRepository.saveAll(id,passwd,name,phone,email);
    
    result.success?
    res.status(200).json({
        data: result
    }):
    res.status(500).json({
        message: result.message
    });
}
exports.login = async (req,res) =>{
console.log(req.body);
 const {id,passwd} = req.body;
 const result = await userRepository.findOption(id);
 console.log(result.success);


}

// es6 
// import export 
/**
 * export const ex;
 * 
 * export default ex;
 */