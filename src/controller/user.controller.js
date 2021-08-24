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
                "message": "존재하는 아이디 입니다"
            }
        });
    }
    if(vaildPhone.success){
        return res.status(200).json({
            data:{
                "success": false,
                "message": "존재하는 핸드폰번호 입니다"
            }
        });
    }
    if(vaildEmail.success){
        return res.status(200).json({
            data:{
                "success": false,
                "message": "존재하는 이메일 입니다"
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
    console.log(id);
    const vaildId = await userRepository.findId(id);
    return res.json({
        data: vaildId
    });

};

// es6 
// import export 
/**
 * export const ex;
 * 
 * export default ex;
 */