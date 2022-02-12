import './App.css';
import LoginForm from './components/LoginForm';
import ShortCircutEvaluation from './components/ShortCircutEvaluation';
import { TodoWithUseState } from './components/TodoWithUseState';
import UseStateArray from './components/UseStateArray';
import UseStateHook from './components/UseStateHook';
import UseStateObject from './components/UseStateObject';

function App() {
    return (
        <div className="App-header">
            {/* <UseStateHook /> */}
            {/* <UseStateArray /> */}
            {/* <UseStateObject/> */}
            {/* <TodoWithUseState /> */}
            {/* <ShortCircutEvaluation/> */}
            <LoginForm/>
        </div>
    );
}

export default App;
