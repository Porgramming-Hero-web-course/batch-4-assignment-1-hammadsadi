// Problem 5 : Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.

const getProperty =<O, S extends keyof O> (propertyDetails: O, propertyName:S ):O[S]=>{
 return propertyDetails[propertyName]
}
