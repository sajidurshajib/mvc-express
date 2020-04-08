module.exports={
    home:(req,res)=>{
        
        res.render('index',{
            title:'Home Page'
        })
    },
    login:(req,res)=>{
        //req.flash('success','For flash messages')
        res.render('login',{
            title:'Login page'
        })
    }
}