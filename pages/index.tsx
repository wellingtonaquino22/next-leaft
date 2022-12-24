import Head from 'next/head'
import Map from '../components/Map'
// import { Map, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet-universal';

// const center = [10.771278605629783, 106.69012489341263];


export default function Home() {
  return (
    <>
    <Head>
      <title>NEXTJS APP</title>
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.2/dist/leaflet.css"
    integrity="sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14="
    crossOrigin=""/>
    </Head>
    <Map/>
    </>
  )
  }



