import { FormatTimePipe } from './format-time.pipe';

fdescribe('FormatTimePipe', () => {
  it('create an instance', () => {
    const pipe = new FormatTimePipe();
    expect(pipe).toBeTruthy();
  });

  it('transform', () => {
    const pipe = new FormatTimePipe(); 
    expect(pipe.transform(1561442400)).toBe('7AM');
    expect(pipe.transform(1561453200)).toBe('10AM');
  });
});
