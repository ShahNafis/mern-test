import {clickDown,clickUp} from '../site/components/counter'

test('Test clickDown(0)', () => {
    expect(clickDown(0)).toBe(-1111);
});

test('Test clickUp(0)', () => {
    expect(clickUp(0)).toBe(1);
});