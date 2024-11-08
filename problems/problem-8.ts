
const validateKeys =<T extends object>(obj:T, keys:( keyof T)[])=>{
    return keys.every(item => item in obj)
}



