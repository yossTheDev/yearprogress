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
      <div className="flex h-screen items-center justify-center gap-8">
        <WaveProgressbar value={percentageCompleted}></WaveProgressbar>
        <div className="flex flex-col gap-2">
          <h1 className="bg-clip-text text-center text-5xl font-bold ">
            Year Progress
          </h1>
          <h2 className="text-2xl font-bold">
            {Math.floor(percentageCompleted)}%
          </h2>
        </div>
      </div>

      <div className="flex h-screen flex-col items-center gap-4">
        <p className="bg-gradient-to-br from-neutral-300 to-neutral-100 bg-clip-text text-2xl font-bold text-transparent">
          Seconds
        </p>
        <Countdown type="seconds" value={timeLeft.as("seconds")}></Countdown>
      </div>

      <div className="flex h-screen flex-col items-center gap-4">
        <p className="bg-gradient-to-br from-neutral-300 to-neutral-100 bg-clip-text text-2xl font-bold text-transparent">
          Minutes
        </p>
        <Countdown type="minutes" value={timeLeft.as("minutes")}></Countdown>
      </div>

      <div className="flex h-screen flex-col items-center gap-4">
        <p className="bg-gradient-to-br from-neutral-300 to-neutral-100 bg-clip-text text-2xl font-bold text-transparent">
          Hours
        </p>
        <Countdown value={timeLeft.as("hours")}></Countdown>
      </div>

      <div className="flex h-screen flex-col items-center gap-4">
        <p className="bg-gradient-to-br from-neutral-300 to-neutral-100 bg-clip-text text-2xl font-bold text-transparent">
          Days
        </p>
        <Countdown value={timeLeft.as("days")}></Countdown>
      </div>
    </>
  )
}
