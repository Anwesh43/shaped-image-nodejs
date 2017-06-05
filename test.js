const ShapedImageCreator = require('./lib')
ShapedImageCreator.createShapeLike('stp.jpg','circle').then(()=>{
    console.log("circular image is saved successfully")
}).catch((err)=>{
    console.log(err)
})
ShapedImageCreator.createShapeLike('stp.jpg','triangle','test_triangle.png').then(()=>{
    console.log("triangular image is saved successfully")
}).catch((err)=>{
    console.log(err)
})
