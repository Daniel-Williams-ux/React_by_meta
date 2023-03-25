import React, {useState} from 'react'
import './App.css'

export default function App() {
  const [word, setWord] = React.useState("hello")
  return (
    <div>
      <h2>State value: {word}</h2>
    </div>
  )
}
