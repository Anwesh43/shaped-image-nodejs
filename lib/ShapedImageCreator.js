const Canvas = require('canvas')
const Image = Canvas.Image
const assert = require('assert')
class ShapedImageCreator {
    static createShapeLike(src,typeStr) {
        assert((typeStr === "circle" || typeStr === "triangle"),"shape must be triangle or circle")
        const image = new Image()
        image.src = src
        const w = image.width,h = image.height
        assert((src && src.trim() != '' && w != 0 && h!=0),'image must be loaded')
        const newCanvas =  new Canvas()
        newCanvas.width = w
        newCanvas.height = h
        const context = newCanvas.getContext('2d')
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
    }
}
module.exports = ShapedImageCreator
