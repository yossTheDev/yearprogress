"use client"

import { DateTime } from "luxon"

import WaveProgressbar from "../ui/wave-progressbar"
import { Countdown } from "./countdown"

export const CounterSection = () => {
  const now = DateTime.now()

  const startOfYear = DateTime.local().set({ month: 0, day: 1 })
  const endOfYear = DateTime.local().set({ month: 12, day: 31 })
  const timeLeft = endOfYear.diff(now, ["days", "hours", "minutes", "seconds"])

  const totalDays = endOfYear.diff(startOfYear).as("days")
  const daysPassed = now.diff(startOfYear).as("days")
  const percentageCompleted = (daysPassed / totalDays) * 100

  return (
    <>
      <div className="mb-20 flex h-screen items-center justify-center gap-8">
        <WaveProgressbar value={percentageCompleted}></WaveProgressbar>
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold md:text-7xl">
            {Math.floor(percentageCompleted)}%
          </h2>
        </div>
      </div>

      <div className="flex h-screen flex-col items-center gap-4">
        <p className="text-2xl font-bold">Seconds</p>
        <Countdown type="seconds" value={timeLeft.as("seconds")}></Countdown>
      </div>

      <div className="flex h-screen flex-col items-center gap-4">
        <p className="text-2xl font-bold">Minutes</p>
        <Countdown type="minutes" value={timeLeft.as("minutes")}></Countdown>
      </div>

      <div className="flex h-screen flex-col items-center gap-4">
        <p className="text-2xl font-bold">Hours</p>
        <Countdown value={timeLeft.as("hours")}></Countdown>
      </div>

      <div className="flex h-screen flex-col items-center gap-4">
        <p className="text-2xl font-bold">Days</p>
        <Countdown value={timeLeft.as("days")}></Countdown>
      </div>
    </>
  )
}
