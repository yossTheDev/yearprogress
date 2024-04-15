"use client"

import React, { useEffect, useState } from "react"
import { DateTime } from "luxon"

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const nextYear = DateTime.local()
      .plus({ years: 1 })
      .set({ hour: 0, minute: 0, second: 0 })
    const timeLeft = Math.floor(
      (nextYear.valueOf() - DateTime.local().valueOf()) / 1000
    )

    return {
      seconds: timeLeft,
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  return (
    <div>
      <h1>Conteo Regresivo para Fin de Año</h1>
      <h2>{timeLeft.seconds} segundos</h2>
    </div>
  )
}

export default CountdownTimer
