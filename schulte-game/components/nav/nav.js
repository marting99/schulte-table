
import styled from 'styled-components';
import logo from '../../public/logo.png'

const Navbar = styled.div`
margin:0;
padding:0;
width:100%;
height:50px;
background-color:#c8c8c8;
ul{
    margin:0;
    list-style:none;
}
ul li{
    display:inline-block;
}
`

export default function Nav() {
    return (
        <Navbar>
            <div className='logo'>

            </div>
            <div className='left'>
                <ul>
                    <li>Home</li>
                    <li>How To Play</li>
                    <li>About</li>
                </ul>
            </div>
        </Navbar>
    )
  }