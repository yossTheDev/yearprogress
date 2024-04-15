"use client"

import { DateTime } from "luxon"

import { Meteors } from "@/components/ui/meteors"
import { SpinningNumber } from "@/components/ui/spinning-number"
import WaveProgressbar from "@/components/ui/wave-progressbar"
import { CounterSection } from "@/components/counters/counters-section"
import { RealtimeCountdown } from "@/components/counters/realtime-countdown"

export default function IndexPage() {
  function progress(): number {
    const now: Date = new Date()
    const start: Date = new Date(now.getFullYear(), 0, 1)
    const end: Date = new Date(now.getFullYear() + 1, 0, 1)
    const done: number =
      (now.getTime() - start.getTime()) / (end.getTime() - start.getTime())
    let percentStr: string = (100.0 * done).toString()
    if (done < 0.1) {
      percentStr = percentStr.slice(0, 9)
    } else {
      percentStr = percentStr.slice(0, 10)
    }

    return done * 100
  }

  return (
    <section className="container flex flex-col gap-6 pb-8">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden md:h-screen md:flex-row">
        <Meteors number={20} />

        <div className="flex h-screen flex-col items-center justify-center gap-4 md:h-fit md:w-3/5">
          <h1 className="mt-20 text-center text-5xl font-bold md:mt-0 md:w-4/5 md:text-6xl">
            How long before the end of the year?
          </h1>

          <RealtimeCountdown></RealtimeCountdown>

          {/* Tags */}
          <div className="flex h-fit w-60 gap-2 overflow-auto px-4 py-2 md:w-fit">
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

        <p className="mb-16 text-3xl font-bold md:hidden">Year Progress</p>

        <div className="mt-14 flex items-center justify-center gap-2 md:mt-0 md:w-2/5">
          <WaveProgressbar value={progress()}></WaveProgressbar>

          <h2 className="ml-4 flex text-3xl font-bold md:text-7xl">
            <SpinningNumber value={Math.floor(progress())}></SpinningNumber>%
          </h2>
        </div>
      </section>

      <CounterSection></CounterSection>
    </section>
  )
}
