import Constant from './constants';
export const mobileValidationFunction = (inputValue) => {
    if (!Constant.NUMBER_PATTERN.test(inputValue) || inputValue === '')
        return false;
    else
        return true;
}


