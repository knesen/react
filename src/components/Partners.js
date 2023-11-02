import React from 'react'
import paperz from '../assets/images/paperz.svg'
import dorfus from '../assets/images/dorfus.svg'
import martino from '../assets/images/martino.svg'
import square from '../assets/images/square.svg'
import gobona from '../assets/images/gobona.svg'

const Partners = () => {
  return (
    <section className="container partners">
        <img src={paperz} alt="paperz company logo" />
        <img src={dorfus} alt="dorfuz company logo" />
        <img src={martino} alt="martino company logo" />
        <img src={square} alt="square company logo" />
        <img src={gobona} alt="gobona company logo" />
    </section>
  )
}

export default Partners