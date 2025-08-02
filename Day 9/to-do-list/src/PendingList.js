function myfunction(value){
    return(
        <h4>{value}</h4>
    )
}

function PendingList(){
 let pendingWork=["Go To Gym","Buying Groceries"]
 return(

<div>
    <h1>PendingWork</h1>
    {
        
    pendingWork.map((value) => myfunction(value))
}
</div>)
}
export {PendingList}