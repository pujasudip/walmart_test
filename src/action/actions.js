import actionTypes from './types';

export function add_image(src, title) {
    return {
        type: actionTypes.ADD_IMAGE,
        payload: {src, title}
    }
}