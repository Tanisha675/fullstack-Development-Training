import {PendingList} from './PendingList.js'
import {ToDoList} from './ToDoList.js'
import './index.css'
function App(){
    return(
        <div>
            <h1>My-To-Do-List</h1>
            <ToDoList />
            <PendingList />
        </div>
    )
}
export default App;
