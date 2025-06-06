import { FahrenhietToCelsiousPipe } from './pipes/fahrenhiet-to-celsious.pipe';

describe('FahrenhietToCelsiousPipe', () => {
  it('create an instance', () => {
    const pipe = new FahrenhietToCelsiousPipe();
    expect(pipe).toBeTruthy();
  });
});
