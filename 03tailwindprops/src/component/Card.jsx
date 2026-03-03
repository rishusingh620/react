import React from 'react'

function Card(username,btnText) {
    console.log(username);
  return (
    <div className="w-60 h-60 rounded-xl">
    <img
      src="https://media1.giphy.com/media
      /z8n8dWgQ0mgEIyzlmV/giphy.gif"
      alt="Giphy"
      className="rounded-t-xl"
    />
    <div className="py-4 px-5 relative -top-[3.4rem] 
    rounded-b-xl z-10 bg-white">
      <h1 className="font-bold font-mono text-xl">
        Available soon
      </h1>
    </div>
  </div>
  )
}

export default Card

