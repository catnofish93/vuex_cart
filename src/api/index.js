const data=require('./mock-data')
const goods=[
    {id:1,name:"苹果",price:10,inventory:20},
    {id:2,name:"香蕉",price:5,inventory:40},
    {id:3,name:"菠萝",price:6,inventory:60}
]
export function getAllgoods(cb){
    setTimeout(()=>{
        cb(goods)
    },500)
}
export function buygoods(goods,cb,errorCb){
    setTimeout(()=>{
        (Math.random()>0.5||navigator.userAgent.indexOf("PhantomJS")!==-1)
        ?cb()
        :errorCb
    },500)
}