import { Link } from "react-router-dom"
import Fragment from "../../components/Fragment.js"
import StyledButton from "../../components/Button/Button.jsx"

export default function NotFoundPage() {
    return (
        <Fragment>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 832" preserveAspectRatio="none" id="background">
                <g filter="url(#filter0_n_706_1382)">
                    <rect width="100%" height="100%" fill="#C0F6C4" />
                </g>
                <defs>
                    <filter id="filter0_n_706_1382" x="0" y="0" width="100%" height="100%" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feTurbulence type="fractalNoise" baseFrequency="0.16949152946472168 0.16949152946472168" stitchTiles="stitch" numOctaves="3" result="noise" seed="914" />
                        <feComponentTransfer in="noise" result="coloredNoise1">
                            <feFuncR type="linear" slope="2" intercept="-0.5" />
                            <feFuncG type="linear" slope="2" intercept="-0.5" />
                            <feFuncB type="linear" slope="2" intercept="-0.5" />
                            <feFuncA type="discrete" tableValues="0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 " />
                        </feComponentTransfer>
                        <feComposite operator="in" in2="shape" in="coloredNoise1" result="noise1Clipped" />
                        <feComponentTransfer in="noise1Clipped" result="color1">
                            <feFuncA type="table" tableValues="0 0.2" />
                        </feComponentTransfer>
                        <feMerge result="effect1_noise_706_1382">
                            <feMergeNode in="shape" />
                            <feMergeNode in="color1" />
                        </feMerge>
                    </filter>
                </defs>
            </svg>

            <div className="tittle">
                <h2>Não era pra você tá aqui não paizão</h2>
            {/* Utilizar a função Link faz com que essa tag vire uma âncora(<a>) que não recarrega á página ao clickar nela*/}
            <StyledButton content=<Link to="/">Volta pra página inicial ae</Link> />

            </div>


        </Fragment>
    )
}