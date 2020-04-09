const { check, validationResult } = require('express-validator');
module.exports={
    home:(req,res)=>{
        
        res.render('index',{
            title:'Home'
        })
    },

    login:(req,res)=>{
        //req.flash('success','For flash messages')
        res.render('login',{
            title:'Login page'
        })
    },

    validate:[
        check('username','Username filled empty').notEmpty(),
        check('password','Password filled empty').notEmpty()
    ],

    postLogin:(req,res)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.render('login',{
               title:'Login problems',
               errors: errors.array()
            })
        }
        
        res.render('login',{
            title:'Login page'
        })
    }

}

