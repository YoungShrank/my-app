import './App.css';
import MyButton from './components/ComponentTest';  
import StyleTest from './components/StyleTest';
import InnerToDomTest from './components/InnerToDomTest';
function App() {


  return (
    <div className="App">
      <p>Hello World!</p>
      <StyleTest />
      <MyButton>this is text</MyButton>
      <InnerToDomTest />

    </div>
  );
}

export default App;
