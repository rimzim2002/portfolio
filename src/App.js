// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import TodoList from './Component/TodoList';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
       <Route path='/' element={<TodoList/>}></Route>
    </Routes>
    </BrowserRouter>
    
    
    
    </>
  );
}

export default App;
