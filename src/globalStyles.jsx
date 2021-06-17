import {createGlobalStyle} from 'styled-components'
import PrimaryFont from './utils/fuentes/Atma-SemiBold.woff'

const GlobalStyles = createGlobalStyle`
    .cabeText{
        background-color: #6B6B6B;
        height: 13vh;
        padding-bottom: 20px;
    }
    .footerr{
    background-color: #6B6B6B;
    height: 13vh;
    }
    .cabeText img{
    margin: 10px 0px 10px 10px;
    height: 100%;
    }
    h1{
        font-family: Atma;
        font-size: 40px;
        margin-bottom: 0%;
        }

// fuentes
@font-face{
    font-family: 'Atma';
    src: local('Atma'), url (${PrimaryFont}) format('woff');
}
`;

export default GlobalStyles;