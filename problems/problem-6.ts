
interface Profile {
    name: string;
    age:number;
    email:string
}
type ProfilePartial = Partial<Profile>

const updateProfile =(profile: Profile, partial:ProfilePartial )=>{
    return {...profile, ...partial}
}
