const SendDate=():string=>{
    const date = new Date();
    return date.toLocaleString('sv-SE')
}

export default SendDate;