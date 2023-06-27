

export const cubieLoader = ({src}: { src: String }) => {
    return `/assets/images/cubies/60px/${String(src).toLowerCase().replaceAll(' ', '_')}.png`;
}

export const blueprintLoader = ({src}: { src: String }) => {
    return `/assets/images/blueprints/60px/${String(src).toLowerCase().replaceAll(' ', '_')}.png`;
}