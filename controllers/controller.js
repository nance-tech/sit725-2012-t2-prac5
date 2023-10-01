const collection = require('../models/cat.js');

const postCat =(req,res)=>{
    let cat = req.body;
    collection.postCat(cat, (err, result) => {
        if (!err) {
            res.json({
                statuscode: 201,
                data: result,
                message: 'success'
            });
        }
    });

}

const getAllCats =(req,res)=>{
    collection.getAllCats((result) => {
        if (result) {
            res.json({
                statuscode: 200,
                data: result,
                message: 'success'
            });
        }
    });
}

module.exports= {postCat,getAllCats}