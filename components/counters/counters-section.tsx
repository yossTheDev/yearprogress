"use client"

import { DateTime } from "luxon"

import { SpinningNumber } from "../ui/spinning-number"
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
      {/* Hero */}
      <section className="flex h-screen">
        <div className="flex w-3/5 flex-col items-center justify-center gap-4">
          <h1 className="w-4/5 text-center text-6xl font-bold">
            How long before the end of the year?
          </h1>

          {/* Tags */}
          <div className="flex gap-2">
            <a
              href="#seconds"
              className="cursor-pointer rounded-full bg-muted px-5 py-1 font-bold hover:ring hover:ring-foreground"
            >
              Seconds
            </a>

            <a
              href="#minutes"
              className="cursor-pointer rounded-full bg-muted px-5 py-1 font-bold hover:ring hover:ring-foreground"
            >
              Minutes
            </a>

            <a
              href="#hours"
              className="cursor-pointer rounded-full bg-muted px-5 py-1 font-bold hover:ring hover:ring-foreground"
            >
              Hours
            </a>

            <a
              href="#days"
              className="cursor-pointer rounded-full bg-muted px-5 py-1 font-bold hover:ring hover:ring-foreground"
            >
              Days
            </a>
          </div>
        </div>

        <div className="flex w-2/5 items-center justify-center gap-2 ">
          <WaveProgressbar value={percentageCompleted}></WaveProgressbar>

          <h2 className="ml-4 flex text-3xl font-bold md:text-7xl">
            <SpinningNumber
              value={Math.floor(percentageCompleted)}
            ></SpinningNumber>
            %
          </h2>
        </div>
      </section>

      {/* Counters */}
      <div
        id="seconds"
        className="flex h-screen flex-col items-center justify-center gap-4"
      >
        <p className="text-3xl font-bold">Seconds</p>
        <Countdown type="seconds" value={timeLeft.as("seconds")}></Countdown>
      </div>

      <div
        id="minutes"
        className="flex h-screen flex-col items-center justify-center gap-4"
      >
        <p id="minutes" className="text-3xl font-bold">
          Minutes
        </p>
        <Countdown type="minutes" value={timeLeft.as("minutes")}></Countdown>
      </div>

      <div
        id="hours"
        className="flex h-screen flex-col items-center justify-center gap-4"
      >
        <p className="text-3xl font-bold">Hours</p>
        <Countdown value={timeLeft.as("hours")}></Countdown>
      </div>

      <div
        id="days"
        className="flex h-screen flex-col items-center justify-center gap-4"
      >
        <p className="text-3xl font-bold">Days</p>
        <Countdown value={timeLeft.as("days")}></Countdown>
      </div>
    </>
  )
}
