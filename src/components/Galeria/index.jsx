import styled from "styled-components";
import Titulo from "../Titulo";
import Tag from "./Tags";
import Populares from "./Populares";
import Imagen from "./Imagen";

const GaleriaContainer = styled.div`
  display: flex;
`;

const SeccionFuida = styled.section`
  flex-grow: 1;
`;

const ImagenesContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
`;

const Galeria = ({ fotos = [], alSeleccionarFoto }) => {
  return (
    <>
      <Tag />
      <GaleriaContainer>
        <SeccionFuida>
          <Titulo>Navegue por la galería</Titulo>
          <ImagenesContainer>
            {fotos.map((foto) => (
              <Imagen 
                alSolicitarZoom = { alSeleccionarFoto }
                key={foto.id} 
                foto={foto} />
            ))}
          </ImagenesContainer>
        </SeccionFuida>
        <Populares />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
