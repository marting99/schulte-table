import React from 'react'
import styled from 'styled-components';
import Tile from '../tile/tile';

const Board = styled.div`
 width:450px;
 height:450px;
 display:flex;
 flex-wrap:wrap;

`

export default function Table() {
    const numbers = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25"]

    return (
        <Board>
            {numbers.map(number=>(
                <Tile number={number}/>
            ))}
        </Board>
    )
  }