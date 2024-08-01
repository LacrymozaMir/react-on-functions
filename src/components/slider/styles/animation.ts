import { css } from "styled-components"

export const slideRight = css`
    animation: slideRight 1s ease-out;

    @keyframes slideRight {
        from {
            transform: translate(0, 0);
        }
        to {
            transform: translate(616px,0);
        }
    }
` 

export const slideLeft = css`
    animation: slideLeft 1s ease-out;

    @keyframes slideLeft {
        from {
            transform: translate(0, 0);
        }
        to {
            transform: translate(-616px,0);
        }
    }
`