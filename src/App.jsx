import Child from './components/Child'

function App() {
  return (
    <div>
      <h1>React 부모</h1>
      <Child text='안녕하세요' color='red'/>
      <Child text='hello' color='blue'/>
      <Child text='bonjour' color='black'/>
      <Child text='chio' color='yellow'/>
      <Child text='니하오' color='green'/>
    </div>
  )
  }

export default App;
