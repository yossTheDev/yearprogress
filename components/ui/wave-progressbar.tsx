"use client"

import { useState } from "react"
import { motion } from "framer-motion"

type Props = {
  value: number
}

const WaveProgressbar: React.FC<Props> = ({ value }) => {
  const max = 300
  const min = 0
  const [val, setValue] = useState(300 - value * 3)

  return (
    <div className="flex items-center justify-center h-screen gap-4">
      <div className="bg-[#1b1b1d] w-32 h-72 rounded-lg flex items-center overflow-hidden justify-center relative cursor-pointer hover:bg-[#1b1b1d]/80">
        <motion.div
          animate={{ rotateZ: 360 }}
          style={{ backgroundColor: "rgb(147 51 234)", bottom: -val + "px" }}
          transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          className="absolute  rounded-[35%] w-72 aspect-square"
        />
      </div>
    </div>
  )
}

export default WaveProgressbar
