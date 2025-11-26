import React from 'react'
import SectionTitle from '../SectionTitle'
import Heading from '../common/Heading'

type Props = {}

function OurExpertiseSection({ }: Props) {
  return (
    <section className='flex flex-col items-center justify-center py-16'>
      <SectionTitle title='Our Expertise' />
      <Heading>
        Building Digital Experiences That Inspire Growth
      </Heading>
    </section>
  )
}

export default OurExpertiseSection