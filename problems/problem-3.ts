
const countWordOccurrences = (sentence:string, word:string): number=>{
    let sentanceArr = sentence.split(' ')
    let arr:string[] = sentanceArr.filter((item:string)=> item === word)
    return arr.length
}
