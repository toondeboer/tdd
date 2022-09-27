import {
    NumConv
} from './RomNumCon';

describe('test first rom num com', () =>{
    it.each([
            { input: 1, output: 'I' }
    ])('check first number', (number_set) => {
        const RomNum = NumConv(number_set.input);
        expect(RomNum).toStrictEqual(number_set.output);
    })
});
