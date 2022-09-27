import {
    NumConv
} from './RomNumCon';

describe('test first rom num com', () =>{
    it.each`
        input | output
        ${1} | ${'I'}
        ${2} | ${'II'}
        ${3} | ${'III'}
        ${4} | ${'IV'}
        ${5} | ${'V'}
        `(`should parse $input to $output`, ({input, output}) => {
        const RomNum = NumConv(input);
        expect(RomNum).toStrictEqual(output);
    })
});
