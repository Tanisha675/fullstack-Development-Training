let myfee=0;
function payfee(payment){
    console.log(`your fee ${payment} is paid`);
    myfee=payment;
}

function getfee(){
    return myfee;
}
export{payfee,getfee};