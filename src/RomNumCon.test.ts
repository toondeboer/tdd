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
        ${6} | ${'VI'}
        ${7} | ${'VII'}
        ${8} | ${'VIII'}
        ${9} | ${'IX'}
        ${10} | ${'X'}
        ${11} | ${'XI'}
        ${12} | ${'XII'}
        ${13} | ${'XIII'}
        ${14} | ${'XIV'}
        ${15} | ${'XV'}
        ${16} | ${'XVI'}
        ${17} | ${'XVII'}
        ${18} | ${'XVIII'}
        ${19} | ${'XIX'}
        ${20} | ${'XX'}
        ${39} | ${'XXXIX'}
        ${40} | ${'XL'}
        ${41} | ${'XLI'}
        ${49} | ${'XLIX'}
        `(`should parse $input to $output`, ({input, output}) => {
        const RomNum = NumConv(input);
        expect(RomNum).toStrictEqual(output);
    })
});
