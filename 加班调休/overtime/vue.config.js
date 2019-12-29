const getData=require("./public/mock/index");

module.exports={
  lintOnSave:false,
  devServer:{
    before:function(app){
      app.get("/api/shop",(req,res)=>{
          res.json({
            list:getData,
            errCode:0
          })
      })
    }
  }
}