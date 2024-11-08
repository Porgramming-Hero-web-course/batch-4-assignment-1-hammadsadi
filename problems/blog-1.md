# The significance of union and intersection types in Typescript.

## Union Type
A Union Type is a type that allows us to set multiple types together using a single.

With a Union Type, we can combine multiple string literal types in a single type

## Example
```js
type Gender = 'Male' | 'Female
```

Using Union Type to set multiple Types for a Property

## Example
```js
type User ={
name:string;
email: string;
mobile: string | number
}
```

Creating New Literal Type Using Another Literal Type

## Example

```js
type Status = 'Active' | 'Offline';
type NewStatus = 'New User' | 'New Member';
type UserStatus = Status | NewStatus
```

## Intersection Type
Intersection type refers to the common properties between types. Using intersection, we can combine two types with the & Operator to create single type. where the common properties will be merged into one type, and the remaining properties type will stay separate.

## Example

```js
type FrontEndDeveloper ={
    name: string;
    skill: string[];
    designation1: string;
}

type BackendDeveloper ={
    name:string;
    skill: string[];
    designation2: string
}
type FullStackDeveloper = FrontEndDeveloper & BackendDeveloper
```