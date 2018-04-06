import { CommaSepNumPipe } from './comma-sep-num.pipe';

describe('CommaSepNumPipe', () => {
  it('create an instance', () => {
    const pipe = new CommaSepNumPipe();
    expect(pipe).toBeTruthy();
  });
});
