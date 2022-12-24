import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import style from "../../styles/Home.module.css"
const Map = ()=>{
return(
  <>
  <div className={style.divteste}>TESTE NEXTJS LEAFLET</div>
  <div className={style.map}>
  <MapContainer  
    style={{height: "30%", width: "100%"}}
    center={[-8.11389, -35.2915]} 
    zoom={8} 
    scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[-8.11623995128, -35.2719688109]}>
    <Popup>
      Localização Marcada.
    </Popup>
  </Marker>
</MapContainer>
<div className={style.divteste}>END</div>
</div>
</>
)
}
export default Map