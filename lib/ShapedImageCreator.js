const Canvas = require('canvas')
const Image = Canvas.Image
const assert = require('assert')
const ImageSaver = require('image-saver-nodejs/lib')
const q = require('q')
class ShapedImageCreator {
    static createShapeLike(src,typeStr,fileName) {
        assert((typeStr === "circle" || typeStr === "triangle"),"shape must be triangle or circle")
        const image = new Image()
        image.src = src
        const w = image.width,h = image.height
        assert((src && src.trim() != '' && w != 0 && h!=0),'image must be loaded')
        const canvas =  new Canvas()
        canvas.width = w
        canvas.height = h
        const context = canvas.getContext('2d')
        context.beginPath()
        if(typeStr == "circle") {
            const r = Math.min(w,h)/2
            context.arc(w/2,h/2,r,0,2*Math.PI)
        }
        if(typeStr == "triangle") {
            context.moveTo(w/2,0)
            context.lineTo(0,h)
            context.lineTo(w,h)
            context.lineTo(w/2,0)
        }
        context.clip()
        context.drawImage(image,0,0)
        const canvasData = canvas.toDataURL()
        const base64Array = canvasData.split(",")
        //console.log(base64Data)
        assert(base64Array.length == 2,"the base64 part is missing")
        const base64Data = base64Array[1]
        const imageSaver = new ImageSaver()
        const defer = q.defer()
        imageSaver.saveFile(fileName||'test.png',base64Data).then(()=>{
            defer.resolve({status:'success',message:'image saved successfully'})
        }).catch((err)=>{
            defer.reject(err)
        })
        return defer.promise
    }
}
module.exports = ShapedImageCreator
