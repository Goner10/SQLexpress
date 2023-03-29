const db = require("../config/database.js");


const CategoryController = {


    postCategory(req, res)  {
        let sql = `INSERT INTO categories (title) values
                ('${req.body.title}');`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send("category added...");
        });
    },


    putCategory(req,res){
        let newTitle = 'Updated Title';
        let sql = `UPDATE categories SET title = '${newTitle}'`;
        db.query(sql, (err,result)=> {
        if(err) throw err;
        res.send('category updated...')
        })
        }
    
}

module.exports = CategoryController;