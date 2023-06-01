export const GET_TOP = "GET_TOP";
export const GET_PADDING = "GET_PADDING";

export const getTop = (top) => ({
    type: GET_TOP,
    top,
})

export const getPadding = (padding) => ({
    type: GET_PADDING,
    padding,
})