import ipfs from 'ipfs-js';

export const LOADING_TASK = 'LOADING_TASK';
export const LOADED_TASK = 'LOADED_TASK';
export const FAILED_TO_LOAD_TASK = 'FAILED_TO_LOAD_TASK';

export function loadingTask(id) {
    return {
        type: LOADING_TASK,
        id: id
    };
}

export function loadedTask(id, data) {
    return {
        type: LOADED_TASK,
        id: id,
        data: data
    }
}

export function failedToLoadTask(id, error) {
    return {
        type: FAILED_TO_LOAD_TASK,
        id: id,
        error: error
    }
}

export function loadTask(id) {
    return (dispatch, getState) => {
        dispatch(loadingTask(id));

        ipfs.catJson(id, (err, data) => {
            if (err) {
                dispatch(failedToLoadTask(id, err));
            } else {
                dispatch(loadedTask(id, data));
            }
        });
    }
}
