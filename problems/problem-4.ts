// Problem 4: Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

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
