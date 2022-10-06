import Head from 'next/head'
import Nav from '../components/nav/nav'
import GlobalStyle from '../styles/globalStyles'
import styled from 'styled-components'
import React from 'react'
import Table from '../components/table/table'
const Content = styled.div`
width:100%;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
background:#0c4e56;
`
export default function Home() {
  return (
    <>
    <Nav/>
    <Content>
      <Table/>
    </Content>
    </>

  )
}
