import Head from 'next/head'
import Hero from '../components/hero'
import Slider from '../components/slider'
import {SliderData} from '../components/sliderData'
export default function Home() {
  return (
    <>
      <Head>
        <title>Photography App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading='Capture Photography' message='I capture moments in nature and keep them alive'  />
      <Slider slides={SliderData} />
    </>
  
  )
}
