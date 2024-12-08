import './App.css';
import MyButton from './components/ComponentTest';  
import StyleTest from './components/StyleTest';
import InnerToDomTest from './components/InnerToDomTest';
import MyActiveButton from './components/EventHandleTest';
import DomToInnerTest from './test/DomToInnerTest';
import ComputeDomTest from './test/ComputeDomTest';
import OOTest from './test/OOTest';
function App() {

  return (
    <div className="App">
      <p>Hello World!</p>
      <StyleTest />
      <MyButton>this is text</MyButton>
      <InnerToDomTest />
      <MyActiveButton />
      <DomToInnerTest />
      <ComputeDomTest />
      <OOTest />
    </div>
  );
}

export default App;
