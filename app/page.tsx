import WaveProgressbar from "@/components/ui/wave-progressbar"
import { CounterSection } from "@/components/counters/counters-section"

export default async function IndexPage() {
  return (
    <section className="container flex flex-col gap-6 pb-8 pt-6 md:py-10">
      <div className="flex items-center justify-center gap-2">
        <div className="flex w-1/2 flex-col items-start p-8">
          <h1 className="bg-clip-text text-center text-5xl font-bold ">
            Year Progress
          </h1>
        </div>

        <div className="flex w-1/2 items-center justify-center">
          <WaveProgressbar value={80}></WaveProgressbar>
        </div>
      </div>

      <CounterSection></CounterSection>
    </section>
  )
}
