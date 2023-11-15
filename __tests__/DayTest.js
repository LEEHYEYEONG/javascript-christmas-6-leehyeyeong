import Day from '../src/Day.js';

describe('Day', () => {
  describe('dayValidate', () => {
    it('day가 31보다 크거나 1보다 작으면 Error', () => {
      const invalidDays = [-1, 0, 32, 33];
      invalidDays.forEach((day) => {
        const instance = new Day(day);
        expect(() => instance.dayValidate()).toThrow(Error);
        expect(() => instance.dayValidate()).toThrow("[ERROR]");
      });
    });

    it('day가 NaN이면 Error', () => {
      const instance = new Day('abc');
      expect(() => instance.dayValidate()).toThrow(Error);
      expect(() => instance.dayValidate()).toThrow("[ERROR]");
    });

    it('day가 유효한 값이면 에러발생하지 않음', () => {
      const validDays = [1, 15, 31];
      validDays.forEach((day) => {
        const instance = new Day(day);
        expect(() => instance.dayValidate()).not.toThrow(Error);
      });
    });
  });
});