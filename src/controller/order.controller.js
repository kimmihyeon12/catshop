exports.getorderinfo = (req, res) => {
    console.log("order data");
    console.log(req.body);
    res.render("order",req.body);
 /*   return res.status(200).json({
        data: {
            "success": true,
            "data": req.body
        }
    });*/
};