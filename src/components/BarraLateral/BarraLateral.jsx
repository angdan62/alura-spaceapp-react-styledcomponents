import styled from "styled-components"


const ListaEstilizada =styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

const BarraLateral = () =>{
    return (
        <aside>
            <nav>
                <ListaEstilizada>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Más vistas</a></li>
                    <li><a href="#">Más Me Gusta</a></li>
                    <li><a href="#">Nuevas</a></li>
                    <li><a href="#">Sorpréndeme</a></li>
                </ListaEstilizada>
            </nav>
        </aside>
    )
    }

export default BarraLateral