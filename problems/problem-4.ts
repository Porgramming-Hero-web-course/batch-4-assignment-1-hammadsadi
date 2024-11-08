
type Circle = {
    shape: string;
    radius: number
}
type Rectangle = {
    shape: string;
    width: number
    height: number
}

const calculateShapeArea = (shapeParam: Circle | Rectangle):number =>{
    if('radius' in shapeParam){
        return Math.PI * shapeParam.radius * shapeParam.radius
    }else{
       return shapeParam.width * shapeParam.height
    }
}
