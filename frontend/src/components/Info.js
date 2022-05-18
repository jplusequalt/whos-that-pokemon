import React, { useEffect, useState } from "react";

const Info = () => {

  const [today, setDate] = React.useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  const timeLeft = `${24 - +today.getHours()}:${60 - +today.getMinutes()}:${60 - today.getSeconds()}`

  return (
    <div className="info-container">
      <p>Time till next Pokemon: {timeLeft}</p>
    </div>
  )
}

export default Info