export function NumConv(num: number) {

    const numbers = [1,4,5,9,10,40];
    const symbols = ['I', 'IV', 'V', 'IX', 'X', 'XL'];

    let index = symbols.length -1;
    let result = '';

    while (num > 0) {
        while (num >= numbers[index]) {
            result += symbols[index]
            num -= numbers[index]
        }
        index--;
    }

    return result;
}

