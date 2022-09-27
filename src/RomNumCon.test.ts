import {
    NumConv
} from './RomNumCon';

describe('test first rom num com', () =>{
    it('test number 1', () => {
        const num = 1;
        expect(NumConv(num)).toStrictEqual('I')
    });
});
