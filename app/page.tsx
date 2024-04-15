import WaveProgressbar from "@/components/ui/wave-progressbar"
import { CounterSection } from "@/components/counters/counters-section"

export default async function IndexPage() {
  return (
    <section className="container flex flex-col gap-6 pb-8">
      <CounterSection></CounterSection>
    </section>
  )
}
