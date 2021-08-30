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

exports.getproduct = async (req, res) => {
    const {
        product_id
    } = req.params;
    const result = await productRepository.selectOne(product_id);
    if (result.success) {
        return res.status(200).json({
            data: {
                "success": true,
                "product": result.data
            }

        });
    } else {
        return res.status(200).json({
            data: {
                "success": false,
                "product": "error"
            }

        });
    }
   
};

exports.getsubproducts = async (req, res) => {
    const {
        subcatagory
    } = req.params;
    console.log(`subcatagory${subcatagory}`);
    const result = await productRepository.selectPartial(subcatagory);
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