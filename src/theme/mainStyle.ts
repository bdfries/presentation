import { createGlobalStyle } from '@xstyled/styled-components';

const MainStyle = createGlobalStyle`
    :root {
        font-size: 9px;
    }

    @media (min-width: 768px) {
        :root {
            font-size: 10px;
        }
    }

    body {
        background-color: pageBackground;
        color: textColor;
        font-size: 1.3rem;
        font-family 'Open Sans', sans-serif;
    }
`;

export default MainStyle;
