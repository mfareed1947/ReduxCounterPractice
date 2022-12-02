import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './actions/counter';


function App() {
  const myValue = useSelector(state => state.counterReducer)
  const dispatch = useDispatch()
  let newValue = 5;
  return (
    <>
      <div className="main-div">


        <div className="container">

          <h1>Increment/Decrement counter</h1>
          <h4>using React and Redux</h4>

          <div className="quantity">
            <a className="quantity__minus" title="Decrement" onClick={() => { dispatch(decrement()) }} ><span>-</span></a>
            <input name="quantity" type="text" className="quantity__input" value={myValue} />
            <a className="quantity__plus" title="Increment" onClick={() => { dispatch(increment(newValue)) }} ><span>+</span></a>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
