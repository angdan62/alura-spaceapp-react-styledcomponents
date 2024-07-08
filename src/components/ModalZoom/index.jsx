import Imagen from "../Galeria/Imagen";
import styled from "styled-components";
import BotonIcono from "../BotonIcono"

const Overlay = styled.div`
    position: absolute;
    top: 294px;
    background: transparent;
    padding: 0;
    border: 0;
    width: 1156px;
    display: flex;
    justify-content: center;
    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
        }
    }
`;

const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 294px;
`;

const ModalZoom = ({ foto, close }) => {
    return (
        <>
            {foto && <>
                <Overlay />
                <DialogEstilizado open={!!foto} onClose={close}>
                    <Imagen foto={foto} expandida={true} />
                    <form method="dialog">
                        <BotonIcono formMethod="dialog">
                            <img src="/iconos/cerrar.png" alt="Ícono de cerrar" />
                        </BotonIcono>
                    </form>
                </DialogEstilizado>
            </>}
        </>
    )
};

export default ModalZoom;
