import {useState} from "react"

export const HomeScreen = () => {
  const [isAdmin, setIsAdmin] = useState(false)

  return (
    <div>
      <h4>Home screen</h4>
      <Counter />
      <p>User type: {isAdmin ? 'admin' : 'regular'}</p>
      <button onClick={() => setIsAdmin(prev => !prev)}>Change user type</button>
      <ChildComponent />
    </div>
  )
}

const Counter = () => {
  const [counter, setCounter] = useState(0)
  return (

    <>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(prev => prev + 1)}>Increment</button>
    </>
  )
}

const ChildComponent = () => {
  console.log('RERENDER CHILD COMPONENT')
  return (
    <div>
      <p>Child component</p>
    </div>
  )
}
