import React from 'react'

type Props = {
  text: string
  className?: string
}

function Description({ text, className }: Props) {
  return (
    <p className={`text-zinc-500 max-w-96 md:text-lg text-center ${className}`}>{text}</p>
  )
}

export default Description