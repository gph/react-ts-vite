import React, { useState } from "react"
import { Tweet } from './components/Tweet'

import './App.css'
import { AppRoutes } from "./Routes"

function App() {
  const [tweets, setTweets] = useState<string[]>([
    'Tweet 1',
    'Tweet 2',
    'Tweet 3',
    'Tweet 4'
  ])

function createTweet(){
  console.log("create tweet")

  setTweets([...tweets, query])
}
const [query, setQuery] = useState('');

const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  const enteredName = event.target.value;
  setQuery(enteredName);
}

return (
    <div>
      <AppRoutes />
      {tweets.map(tweet => {
        return <Tweet text={tweet} />
      })}
    <input value={query} onChange={inputHandler}></input>

      <button 
        onClick={createTweet}
        style={{
          backgroundColor: 'blueviolet',
          color: '#FFFFFF'
        }}
      >Adicionar tweet</button>
    </div>
  )
}

export default App
