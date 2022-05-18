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

  const hoursLeft = 23 - +today.getHours()
  const minutesLeft = 59 - +today.getMinutes()
  const secondsLeft = 59 - +today.getSeconds()

  const timeLeft = `${hoursLeft < 10 ?
    '0' + hoursLeft
    : hoursLeft}:${minutesLeft < 10 ?
      '0' + minutesLeft
      : minutesLeft}:${secondsLeft < 10 ?
        '0' + secondsLeft
        : secondsLeft}`

  return (
    <div className="info-container">
      <p>Time till next Pokemon: {timeLeft}</p>
    </div>
  )
}

export default Info