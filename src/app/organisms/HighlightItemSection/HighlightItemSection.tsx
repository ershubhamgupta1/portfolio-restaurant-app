import Image from 'next/image'
import React from 'react'

const HighlightItemSection = () => {
  return (
    <section className="highlightSection" style={{ backgroundColor: '#fff', padding: '50px 0' }}>
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-4">
            <div className='media'>
              <Image src="/restaurant-images/lam-tikka.png" alt="Nepalese Lamb Momo" width={150} height={150} />
              <h3 style={{ color: '#8BC34A' }}>NEPALESE LAMB MOMO</h3>
              <p>Steamed dumplings filled with slightly spiced minced meat served with special sauce.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className='media'>
              <Image src="/restaurant-images/gorkha-special-chicken.png" alt="Gurkha Special Chicken" width={150} height={150} />
              <h3 style={{ color: '#E91E63' }}>GURKHA SPECIAL CHICKEN</h3>
              <p>Boneless chicken marinated in mustard, smoked chili, herbs, and spices, slowly cooked in a tandoor.</p>

            </div>
          </div>
          <div className="col-lg-4">
            <div className='media'>
              <Image src="/restaurant-images/nepali-momo.png" alt="Lamb Tikka Special" width={150} height={150} />
              <h3 style={{ color: '#9C27B0' }}>LAMB TIKKA SPECIAL</h3>
              <p>Tender pieces of lamb mixed with our own spices and gently cooked in a clay oven.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HighlightItemSection
