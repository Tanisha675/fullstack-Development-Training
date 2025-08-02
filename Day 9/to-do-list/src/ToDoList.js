function myfunction(value){
    return(
        <h4>{value}</h4>
    )
}
function ToDoList(){
    let workdone=["learning CSS","Learning React"]
    return(
        
        <div>
            <h1>Completed Work</h1>
            {
                workdone.map((value) => myfunction(value))
            }
        </div>
    )
}
export {ToDoList}