const productRepository = require("../repository/product.repository");
exports.getproducts = async (req, res) => {
    const {
        catagory
    } = req.params;
    const result = await productRepository.selectAll(catagory);
    if (result.success) {
        return res.status(200).json({
            data: {
                "success": true,
                "products": result.data
            }

        });
    } else {
        return res.status(200).json({
            data: {
                "success": false,
                "products": "error"
            }

        });
    }
   
};

exports.getsubproducts = async (req, res) => {
    const {
        catagory
    } = req.params;
    const result = await productRepository.selectPartial(catagory);
    if (result.success) {
        return res.status(200).json({
            data: {
                "success": true,
                "products": result.data
            }

        });
    } else {
        return res.status(200).json({
            data: {
                "success": false,
                "products": "error"
            }

        });
    }
   
};