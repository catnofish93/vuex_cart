const goods=[
    {id:1,name:"苹果",price:10,inventory:5},
    {id:2,name:"香蕉",price:5,inventory:3},
    {id:3,name:"菠萝",price:6,inventory:6}
]
export default {
    getAllgoods(cb){
        setTimeout(()=>{
            cb(goods)
        },500)
    },
    buygoods(goods,cb,errorCb){
        setTimeout(()=>{
            (Math.random()>0.5)
            ?cb()
            :errorCb()
        },500)
    } 
}
