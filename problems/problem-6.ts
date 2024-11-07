// Problem 6: Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

interface Profile {
    name: string;
    age:number;
    email:string
}
type ProfilePartial = Partial<Profile>

const updateProfile =(profile: Profile, partial:ProfilePartial )=>{
    return {...profile, ...partial}
}
