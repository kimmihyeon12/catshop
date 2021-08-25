const userRepository = require("../repository/user.repository");

exports.register = async (req, res) => {
    console.log(req.body);
    const {
        id,
        passwd,
        passwdOk,
        name,
        phone,
        email
    } = req.body;
    if(id==''||passwd==''||passwdOk==''||name==''||phone==''||email==''){
        return res.status(200).json({
            data:{
                "success": false,
                "message": "모든값을 입력해주세요"
            }
            
        });
    }
    if(passwd!=passwdOk){
        return res.status(200).json({
            data:{
                "success": false,
                "message": "아이디 혹은 비밀번호가 일치하지 않습니다"
            }
        });
    }
    const vaildId = await userRepository.findId(id);
    const vaildPhone = await userRepository.findPhone(phone);
    const vaildEmail = await userRepository.findEmail(email);
    if(vaildId.success){
        return res.status(200).json({
            data:{
                "success": false,
                "message": vaildId.message
            }
        });
    }
    if(vaildPhone.success){
        return res.status(200).json({
            data:{
                "success": false,
                "message": vaildPhone.message
            }
        });
    }
    if(vaildEmail.success){
        return res.status(200).json({
            data:{
                "success": false,
                "message": vaildEmail.message
            }
        });
    }
    console.log(vaildId);
    const result = await userRepository.saveAll(id, passwd, name, phone, email);
    
    if (result.success) {
        return res.status(200).json({
            data: result
        });
    } else {
        return res.json({
            data: result
        });
    }

}
exports.login = async (req, res) => {
    console.log(req.body);
    const {
        id,
        passwd
    } = req.body;
    console.log(id);
    if (id == '' || passwd == '') {
        return res.json({
            data: {
                "success": false,
                "message": "모든 값을 입력해주세요"
            }
        });
    }
    const vaildId = await userRepository.findId(id);
    if (vaildId.success) {
        const passwdVerification = await userRepository.findPasswd(id, passwd);
        if (passwdVerification.success) {

            return res.json({
                data: passwdVerification
            });
        } else {

            return res.json({
                data: passwdVerification
            });
        }



    }
    return res.json({
        data: vaildId
    });


}

exports.checkId= async(req,res)=>{
    const id = req.params.id;
    const vaildId = await userRepository.findId(id);
    return res.json({
        data: vaildId
    });

};
exports.checkPhone= async(req,res)=>{
    const phone = req.params.phone;
    const vaildphone = await userRepository.findPhone(phone);
    return res.json({
        data: vaildphone
    });

};

exports.checkEmail= async(req,res)=>{
    const email = req.params.email;
    const vaildemail = await userRepository.findEmail(email);
    return res.json({
        data: vaildemail
    });

};
// es6 
// import export 
/**
 * export const ex;
 * 
 * export default ex;
 */