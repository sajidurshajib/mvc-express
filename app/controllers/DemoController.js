module.exports={
    home:(req,res)=>{
        req.flash('success','This is a test notification.')
        res.render('index',{
            title:'Home Page'
        })
    },
    login:(req,res)=>{
        res.render('login',{
            title:'Login page'
        })
    }
}