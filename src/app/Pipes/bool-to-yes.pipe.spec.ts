import { BoolToYesPipe } from './bool-to-yes.pipe';

describe('BoolToYesPipe', () => {
  it('create an instance', () => {
    const pipe = new BoolToYesPipe();
    expect(pipe).toBeTruthy();
  });
});
