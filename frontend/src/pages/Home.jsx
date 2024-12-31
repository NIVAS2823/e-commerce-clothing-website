import React from 'react'
import Hero from '../components/Hero'
import Bestseller from '../components/Bestseller'
import OurPolicy from '../components/OurPolicy'
import NewsLetterBox from '../components/NewsLetterBox'
import Title from '../components/Title'
import Latestcollection from '../components/LatestCollection'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Latestcollection/>
      <Bestseller/>
      <OurPolicy/>
      <NewsLetterBox/>
      <Title/>
    </div>
  )
}

export default Home
