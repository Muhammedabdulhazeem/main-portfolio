import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map = () => {
  return (
    <MapContainer center={[8.537390888837303, 4.5186982338726]} zoom={15} scrollWheelZoom={false}>
      <TileLayer 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
       />
      <Marker position={[8.537390888837303, 4.5186982338726]}>
        <Popup>Tadaa ! Here's where i live. You are free to pay a visit</Popup>
      </Marker>
      <div className="map-content">
        <h3 className="switch__color">Abdulhazeem</h3>
        {/* <span>A.k.A Almarex</span> */}
        <br />
        <span>Location : 113 Ibrahim Taiwo Road Ilorin, Nigeria</span>
        <br />
        <span>Email: abdulhazeemmuhammed@gmail.com</span>
      </div>
    </MapContainer>
  )
}

export default Map
// 8.541751, 4.645874
// [6.5244, 3.3792]
// [51.505, -0.09]
// 8.537390888837303, 4.5186982338726