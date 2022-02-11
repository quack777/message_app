export const MessageCut = (givenInput:string)=>{
    let ans = ''
    if (givenInput){
        if (givenInput.length > 10){
            ans = givenInput.substring(0,10).concat('...');
        }else{
            ans = givenInput;
        }
    }
    return ans;
}