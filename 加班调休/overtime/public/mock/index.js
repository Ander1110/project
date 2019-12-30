const Mock = require("mockjs")
const type = ["待处理","处理中","处理后"];
const work = ["双休日","节假日","年假日","调休"]
let data = Mock.mock({
  "list|3":[{
    "type|+1": type,
    "menu|10":[{
      "id":"@id",
      "boolean|1": true,
      "name":"@cname",
      "work|+1":work,
      "time":"2019/5/22",
      "house|1-10": 10
    }]
  }]
})
module.exports={
  data
}
