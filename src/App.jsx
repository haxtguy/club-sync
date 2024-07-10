import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Card() {
  return (
    <div class="bg-cool-grey-50 h-40">Card 1</div>
  )
}

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="grid grid-cols-3 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  )
}

