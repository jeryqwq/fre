import { render, useState, h, useLayout, useEffect, useCallback } from "../../src/index"
export default function App () {
  const [array, setArray] = useState(new Array(20).fill(true).map  ((i, ii) =>({key: ii, text: '内容'+ii})))
  // setArray([])

  useLayout(() => {
    console.log('layout')
  })
  const init = useCallback(() => {
      setArray(array.sort((a,b) => Math.random() > 0.5 ? 1 : -1))
  })
  useEffect(() => {
    console.log('effect')
    setTimeout(() => {
      setArray(array.sort((a,b) => Math.random() > 0.5 ? 1 : -1))
    }, 1000)
  }, [])
  return <ul onClick= {init}>
    {console.log('rendering')}
    {
      array.map( (i, ii) => <li key={i.key} style={ `transition: .5s; position: fixed; top: ${ 30 * ii }px` }>{i.text}</li>)
    }
  </ul>
}
render(<App />, document.body)
