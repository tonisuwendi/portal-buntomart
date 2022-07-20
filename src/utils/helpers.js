export const catchError = (e) => {
    let message = 'Something went wrong.';
    if (typeof e === 'string') message = e;
    if (Object.prototype.hasOwnProperty.call(e, 'message') && typeof e.message === 'string') ({ message } = e);
    if (Object.prototype.hasOwnProperty.call(e, 'error') && typeof e.error === 'string') ({ error: message } = e);
    if (Object.prototype.hasOwnProperty.call(e, 'msg') && typeof e.msg === 'string') ({ msg: message } = e);
    return message;
};

export const stringRpToNumber = (price) => Number(price.replace(/\./g, ''));

export const calculateDiscount = (price, discount) => {
    const result = (stringRpToNumber(price) * Number(discount)) / 100;
    return result;
};

export const formattedPrice = (price) => new Intl.NumberFormat('id-ID').format(price);
