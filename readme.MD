## shaped-image-nodejs

### A nodejs library to create a shaped image from the original image. Currently only circular and triangular shape images are supported.

### Installation

```
  npm install shaped-images-nodejs
```
### Usage

```
    const ShapedImageCreator = require('shaped-images-nodejs')
    ShapedImageCreator.createShapeLike(imageURL,'circle').then(()=>{
        console.log("circular image is saved successfully")
    }).catch((err)=>{
        console.log(err)
    })
    ShapedImageCreator.createShapeLike(imageURL,'triangle','test_triangle.png').then(()=>{
        console.log("triangular image is saved successfully")
    }).catch((err)=>{
        console.log(err)
    })
```
