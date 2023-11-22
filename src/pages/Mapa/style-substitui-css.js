import { styled } from "styled-components";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";

const Container = styled.div`
  font-family: sans-serif;
  text-align: center;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;

const lContainer = styled(Popup)`
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  background-color: #ffff;
  transform: translate(-25%, -25%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  font-size: 1.5rem;
`;

export {Container, lContainer}
