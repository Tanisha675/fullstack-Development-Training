import ReactDOM from 'react-dom/client';
import { MyComponent } from './MyComponent';

const divtag = document.getElementById('root');  
const root = ReactDOM.createRoot(divtag);        
root.render(<MyComponent />);                    

