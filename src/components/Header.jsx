import React, { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getPadding } from '../store/actions/HeaderAction';

const Container = styled.header`
  background-color: #000;
  display: flex;
  flex-flow: ${({headerDiff})=> headerDiff ? "row nowrap" : "column nowrap" };
  position: fixed;
  height: ${({headerDiff})=> headerDiff ? "4rem" : "9rem" };
  width: 100%;
`;
const BoxLogo = styled.div`
  background-color: inherit;
  display: flex;
  align-items: center;
  flex: ${({headerDiff})=> headerDiff ? "1 0 29%" : "1 60%" };
`;
const NavBar = styled.nav`
  background-color: inherit;
  display: flex;
  flex-flow: row nowrap;
  flex: ${({headerDiff})=> headerDiff ? "1 0 69%" : "1 0 40%" };
`;
const Tabla = styled.ul`
  background-color: inherit;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: ${({headerDiff})=> headerDiff ? "flex-end" : "flex-start" };
  padding-left: ${({headerDiff})=> headerDiff ? "0" : "2rem" };
  width: 100%;
  padding-right: 1rem; // cambiar a dinamico si trae problemas
`;
const Li = styled.li`
  background-color: inherit;
  display: flex;
  align-items: center;
  list-style: none;
  height: 100%;
`;
const Linker = styled(Link)`
  background-color: inherit;
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;

  :hover{
    background-color: #444;
  }
`;
const Title = styled(Linker)`
  background-color: inherit;
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  margin-left: 2rem;
`;

const Header = () => {

  const componenteRef = useRef(null);
  const topDistance = useSelector((state)=> state.HeaderRootReducer.headerTop)
  const [headerDiff, setHeaderDiff] = useState(false)
  const dispatch = useDispatch();

  useEffect(() => {
    if (topDistance < -150) {
      setHeaderDiff(true)
    } else {
      setHeaderDiff(false)
    }
    const headerHeight = componenteRef.current.offsetHeight;
    dispatch(getPadding(headerHeight))
  }, [topDistance]);

  return (
    <Container ref={componenteRef} headerDiff={headerDiff}>
      <BoxLogo headerDiff={headerDiff}>
        <Title to="/">MASISO</Title>
      </BoxLogo>
      <NavBar headerDiff={headerDiff}>
        <Tabla headerDiff={headerDiff}>
          <Li>
            <Linker to="/">Home</Linker>
          </Li>
          <Li>
            <Linker to="/dashboard">News</Linker>
          </Li>
          <Li>
            <Linker to="/dashboard">Trend</Linker>
          </Li>
          <Li>
            <Linker to="/dashboard">About us</Linker>
          </Li>
          <Li>
            <Linker to="/dashboard">Contact</Linker>
          </Li>
          <Li>
            <Linker to="/dashboard">Sing Up</Linker>
          </Li>
        </Tabla>
      </NavBar>
    </Container>
  );
};

export default Header;