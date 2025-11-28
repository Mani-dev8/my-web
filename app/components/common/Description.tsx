import React from 'react'

type Props = {
  text: string
  className?: string
}

function Description({ text, className }: Props) {
  return (
    <p className={`text-zinc-500 text-sm max-w-96 lg:text-base text-center leading-tight ${className}`}>{text}</p>
  )
}

export default Description