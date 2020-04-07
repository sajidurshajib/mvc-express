module.exports={
    home:(req,res)=>{
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