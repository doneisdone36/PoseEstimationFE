interface Sizes {
    xs?: { span: number };
    sm?: { span: number };
    md?: { span: number };
    lg?: { span: number };
    xl?: { span: number };
}


function setGridSizes(sizes: Sizes) {
    return {
        xs: sizes.xs?.span,
        sm: sizes.sm?.span,
        md: sizes.md?.span,
        lg: sizes.lg?.span,
        xl: sizes.xl?.span,
    }
}

export default setGridSizes;