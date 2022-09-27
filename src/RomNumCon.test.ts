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
        ${50} | ${'L'}
        ${51} | ${'LI'}
        ${89} | ${'LXXXIX'}
        ${90} | ${'XC'}
        ${91} | ${'XCI'}
        ${99} | ${'XCIX'}
        ${100} | ${'C'}
        ${101} | ${'CI'}
        ${399} | ${'CCCXCIX'}
        ${400} | ${'CD'}
        ${401} | ${'CDI'}
        ${499} | ${'CDXCIX'}
        ${500} | ${'D'}
        ${501} | ${'DI'}
        ${899} | ${'DCCCXCIX'}
        ${900} | ${'CM'}
        ${901} | ${'CMI'}
        ${999} | ${'CMXCIX'}
        ${1000} | ${'M'}
        ${1001} | ${'MI'}
        ${3999} | ${'MMMCMXCIX'}
        `(`should parse $input to $output`, ({input, output}) => {
        const RomNum = NumConv(input);
        expect(RomNum).toStrictEqual(output);
    })
});
