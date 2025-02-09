import { use } from 'react'
import { useState } from 'react'

// oikea paikka komponentin määrittelyyn
const Statistics = (props) => {
  const positive = props.good / props.all * 100
  if (props.all > 0) {
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <StatisticLine text="all" value={props.all} />
          <StatisticLine text="average" value={props.total / props.all} />
          <StatisticLine text="positive" value={positive + " %"} />
        </tbody>
      </table>
    )
  }
  return (
    <div>
      <p>No feedback given</p>
    </div>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [total, setTotal] = useState(0)

  const addGood = () => {
    const newGood = good + 1
    const newAll = all + 1
    const newTotal = total + 1
    setGood(newGood)
    setAll(newAll)
    setTotal(newTotal)
  }

  const addNeutral = () => {
    const newNeutral = neutral + 1
    const newAll = all + 1
    setNeutral(newNeutral)
    setAll(newAll)
  }

  const addBad = () => {
    const newBad = bad + 1
    const newAll = all + 1
    const newTotal = total - 1
    setBad(newBad)
    setAll(newAll)
    setTotal(newTotal)
  }

  return (
    <div>
      <div>
        <h2>Give feedback</h2>
      </div>
      <div>
        <button onClick={addGood}>good</button>
        <button onClick={addNeutral}>neutral</button>
        <button onClick={addBad}>bad</button>
      </div>
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} total={total} />
    </div >
  )
}

export default App