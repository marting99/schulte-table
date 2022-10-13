import Head from 'next/head'
import styled from 'styled-components'
import React from 'react'
import Table from '../components/table/table'
const Content = styled.div`
  width:100%;
  height:100%;
  color:white;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background:#0c4e56;
  h1{
    font-size:54px;
  }
  .container{
    display:flex;
    
  }
  .left{
    width:20%;
    padding-left:2%;
    display:flex;
    padding-top:2%;
    flex-direction:column;
    align-items:center;
    font-size:20px;
    color:white;
  }
  .game{
    width:65%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    
  }
  @media screen and (max-width: 1024px){
    .container{flex-direction:column-reverse;
    align-items:center;
    justify-content:center;
    }
    .left{
      width:80%;
      padding:20px;
    }
    .game h1{
      font-size:43px;
    }
  }
`
export default function Home() {
  return (
    <>
    <Head>
      <title>Schulte Table</title>
    </Head>
    <Content>
      <div className='container'>
        <div className='left'>
          <h2>About</h2>
          <p>Schulte Tables are considered one of the most efficient trainer for improving peripheral vision, attention and memory. Accordingly, they help to learn quick reading, to find easily the right information in the text and develop the mental resilience to external distraction while working.</p>
          <div className='objective'>
            <h2>How to Play</h2>
            <p>The task is to find the numbers in direct sequence from 1 to 25 in under 30 seconds</p>
        </div>
        </div>
        <div className='game'>
          <h1>Schulte Table</h1>
          <Table/>
        </div>
        
      </div>
      
    </Content>
    </>

  )
}
