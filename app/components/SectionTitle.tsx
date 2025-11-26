import React from 'react'

type Props = {
  title: string
}

function SectionTitle({ title }: Props) {
  return (
    <span className='rounded-full border border-zinc-300 px-5 py-4 font-semibold text-sm text-zinc-950 uppercase'>{title}</span>
  )
}

export default SectionTitle
