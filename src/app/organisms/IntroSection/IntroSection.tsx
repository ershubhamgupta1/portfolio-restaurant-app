import React from 'react'
import ParaCard from '../../molecules/ParaCard/ParaCard'

const IntroSection = () => {
  return (
    <section className="introSection" style={{ backgroundColor: '#f5f5f5', padding: '50px 0' }}>
    <div className="container text-center">
      <div className="row">
        <ParaCard />
        <ParaCard />
        <ParaCard />
      </div>
    </div>
  </section>
)
}

export default IntroSection
