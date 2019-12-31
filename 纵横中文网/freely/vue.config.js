const swiperlist = require('./public/mock/list')
const Datalist = require('./public/mock/data')
module.exports = {
  lintOnSave:false,
  devServer:{
    before:function(app){
      app.get('/api/swiperlist',(req,res) => {
        res.json(swiperlist)
      })

      app.get('/api/list',(req,res) => {
        res.json(Datalist)
      })

      app.get('/api/detail',(req,res) => {
        const { id } = req.query;
        const detailData = Datalist.ranklist0.filter(item => {
          return item.bookId == id
        });
        res.json(detailData)
      })
    }
  }
}