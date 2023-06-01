import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getTop } from '../store/actions/HeaderAction';
import { ejemplo1 } from '../constants/moc';

const Container = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: ${({ paddingTop }) => paddingTop}px;
    width: 100%;
`;
const ContainerJustify = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #fff;
    width: 95%;
`;
const Aside = styled.aside`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #dddd00;
    flex: 1 0 24%;
    margin: 0 1%;
`;
const Section = styled.section`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: flex-start;
    background-color: inherit;
    flex: 1 0 74%;
    margin: 0 1%;
`;
const Card = styled.article`
    display: flex;
    flex-flow: column wrap;
    flex: 1 0 30%;
    max-width: 50%;
    min-width: 20rem;
    margin: 1%;
    height: auto;
    padding: 1% 2%;
    //border: 0.2rem solid #ff0000;
    border-radius: 1rem;
    gap: 1rem;
`;
const H2Title = styled.h2`
    text-align: center;
    font-weight: bold;
    font-size: 25px;
`;
const Imagen = styled.img`
    width: 100%;
    height: auto;
    max-height: 20rem;
`;
const Contenido = styled.p`

`;
const Fecha = styled.p`
    align-self: flex-end;
    font-weight: bold;
`;

const Home = () => {

    const paddingTop = useSelector((state) => state.HeaderRootReducer.headerPadding)
    const componenteRef = useRef(null);
    const dispatch = useDispatch();

    //pasar el useEffect a todas las pages, con su componenteRef
    useEffect(() => {
        const handleScroll = () => {
            if (componenteRef.current) {
                const { top } = componenteRef.current.getBoundingClientRect();
                dispatch(getTop(top))
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Container paddingTop={paddingTop} ref={componenteRef}>
            <ContainerJustify>
                <Section>
                    {ejemplo1.map((item)=>(
                        <Card key={item.id}>
                            <H2Title>{item.titulo}</H2Title>
                            <Imagen src={item.img} alt="" />
                            <Contenido>{item.contenido}</Contenido>
                            <Fecha>{item.fecha}</Fecha>
                        </Card>
                    ))
                        
                    }
                </Section>
            </ContainerJustify>
        </Container>
    )
}

export default Home