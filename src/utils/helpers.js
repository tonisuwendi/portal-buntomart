/* eslint-disable import/prefer-default-export */

export const catchError = (e) => {
    let message = 'Something went wrong.';
    if (typeof e === 'string') message = e;
    if (Object.prototype.hasOwnProperty.call(e, 'message') && typeof e.message === 'string') ({ message } = e);
    if (Object.prototype.hasOwnProperty.call(e, 'error') && typeof e.error === 'string') ({ error: message } = e);
    if (Object.prototype.hasOwnProperty.call(e, 'msg') && typeof e.msg === 'string') ({ msg: message } = e);
    return message;
};
