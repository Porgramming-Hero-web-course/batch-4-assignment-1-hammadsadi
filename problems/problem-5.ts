

const getProperty =<O, S extends keyof O> (propertyDetails: O, propertyName:S ):O[S]=>{
 return propertyDetails[propertyName]
}
