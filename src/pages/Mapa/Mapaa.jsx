import "./styles.css"
import "leaflet/dist/leaflet.css"

import React, {useState} from "react";

import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import { Icon, divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

import Header from "../../componets/Header/Header";
import BotaoE from "../../componets/Botao/BotaoExportar";


function Map() {

  const markers = [
    {
      geocode: [-23.001547759121728, -43.365667493553055],
      popUp: "Barra da Tijuca"
    },
    {
      geocode: [-22.965401512296896, -43.388763402315206],
      popUp: "Jacarepaguá"
    },
    {
      geocode: [-22.920205112479866, -43.373173663900765],
      popUp: "Taquara"
    },
    {
      geocode: [-23.016428694227525, -43.473640869339484],
      popUp: "Recreio dos Bandeirantes"
    },
    {
      geocode: [-22.98347584332029, -43.20861531629378],
      popUp: "Ipanema"
    },
    {
      geocode: [-22.969122894601405, -43.189561191565005],
      popUp: "Copacabana"
    },
    {
      geocode: [-22.93018937984022, -43.238746412364605],
      popUp: "Tijuca"
    },
    {
      geocode: [-22.901567791383112, -43.28292979452825],
      popUp: "Méier"
    }
  ];

  const customIcon = new Icon({
    iconUrl: require("./marcadores/placeholder.png"),
    iconSize: [35,35]
  });

  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true)
    });
  };

  const [filtro, setFiltro] = useState('')

  return (
    <div>
      <Header/>

      <input
        type="text"
        placeholder="Filtrar por nome"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />
      
        <MapContainer center={[-22.95541525373452, -43.29105179333064]} zoom={12}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          <MarkerClusterGroup
            chunkedLoading
            iconCreateFunction={createCustomClusterIcon}
          >
            
            {markers
              .filter((marker) => marker.popUp.includes(filtro)) 
              .map((filteredMarker) => (
                <Marker key={filteredMarker.geocode} position={filteredMarker.geocode} icon={customIcon}>
                  <Popup>{filteredMarker.popUp}</Popup>
                </Marker>
            ))}
          </MarkerClusterGroup>
        </MapContainer>

        <BotaoE/>
    </div>
  );
}

export default Map;
