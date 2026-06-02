// importando a função createGlobalStyle em chaves porque não é uma função export default
import { createGlobalStyle } from "styled-components";

// definindo o reset e variáveis globais normalmente
const GlobalStyle = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
    }

    :root {
        --logo-font:"Irish Grover", system-ui;
        --main-font:"Archivo", sans-serif;
        --primary-font: "League Spartan", sans-serif;

        --clr-green-50: #EBF9EC;
        --clr-green-100: #C8EFCA;
        --clr-green-200: #A4E5A8;
        --clr-green-300: #81DA87;
        --clr-green-400: #5DD065;
        --clr-green-500: #39C442;
        --clr-green-600: #2FA237;
        --clr-green-700: #257E2B;
        --clr-green-800: #1A5B1F;
        --clr-green-900: #103713;
        --clr-green-1000: #061407;
       
        --clr-magenta-50: #F8ECF8;
        --clr-magenta-100: #ECCBEC;
        --clr-magenta-200: #DFA9DF;
        --clr-magenta-300: #D388D3;
        --clr-magenta-400: #C766C7;
        --clr-magenta-500: #BD4BBD;
        --clr-magenta-600: #993899;
        --clr-magenta-700: #772C77;
        --clr-magenta-800: #562056;
        --clr-magenta-900: #341334;
        --clr-magenta-1000: #130713;
       
        --clr-cyan-50: #E8FCFC;
        --clr-cyan-100: #BFF8F8;
        --clr-cyan-200: #95F3F3;
        --clr-cyan-300: #6CEFEF;
        --clr-cyan-400: #43EAEA;
        --clr-cyan-500: #18DEDE;
        --clr-cyan-600: #15BCBC;
        --clr-cyan-700: #109393;
        --clr-cyan-800: #0C6A6A;
        --clr-cyan-900: #074040;
        --clr-cyan-1000: #031717;
       
        --clr-blue-50: #EAEAFB;
        --clr-blue-100: #C3C3F3;
        --clr-blue-200: #9D9DEC;
        --clr-blue-300: #7777E4;
        --clr-blue-400: #5050DC;
        --clr-blue-500: #2828C9;
        --clr-blue-600: #2323AF;
        --clr-blue-700: #1B1B88;
        --clr-blue-800: #131362;
        --clr-blue-900: #0C0C3C;
        --clr-blue-1000: #040415;
       
        --clr-yellow-50: #FCF9E9;
        --clr-yellow-100: #F6EEC1;
        --clr-yellow-200: #F0E398;
        --clr-yellow-300: #EBD870;
        --clr-yellow-400: #E5CD48;
        --clr-yellow-500: #E0C528;
        --clr-yellow-600: #B79F1A;
        --clr-yellow-700: #8F7C14;
        --clr-yellow-800: #67590F;
        --clr-yellow-900: #3E3609;
        --clr-yellow-1000: #161303;

        --clr-red-50: #FBE9E9;
        --clr-red-100: #F5C2C2;
        --clr-red-200: #EE9B9B;
        --clr-red-300: #E77373;
        --clr-red-400: #E14C4C;
        --clr-red-500: #CC2323;
        --clr-red-600: #B31E1E;
        --clr-red-700: #8C1818;
        --clr-red-800: #641111;
        --clr-red-900: #3D0A0A;
        --clr-red-1000: #160404;
        
        --clr-neutral-100: #FFFFFF;
        --clr-neutral-200: #E3E3E3;
        --clr-neutral-300: #C6C6C6;
        --clr-neutral-400: #AAAAAA;
        --clr-neutral-500: #8E8E8E;
        --clr-neutral-600: #717171;
        --clr-neutral-700: #555555;
        --clr-neutral-800: #393939;
        --clr-neutral-900: #1C1C1C;
        --clr-neutral-1000: #000000;

        --gShadow-min: 2px 2px #061407;
    }
`

export default GlobalStyle