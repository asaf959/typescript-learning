let useInput: unknown;
let userName: string;

useInput = 5;
useInput = 'Max';
if (typeof useInput === 'string') {
  userName= useInput;
}

function generateError(message: string, code: number) {
  throw { message: message, errorCode: code }
}

generateError('An error occured', 500)