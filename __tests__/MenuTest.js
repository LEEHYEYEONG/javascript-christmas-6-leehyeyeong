import Menu from '../src/Menu.js';

describe('Menu', () => {
  describe('menuValidate', () => {
    it('menu가 category에 없으면 에러', () => {
      const invalidMenu = "청국장-1";
      const instance = new Menu(invalidMenu);
      expect(() => instance.menuValidate()).toThrow(Error);
      expect(() => instance.menuValidate()).toThrow("[ERROR]");
    });

    it('중복된 menu가 있으면 에러', () => {
      const invalidMenu = "아이스크림-1,아이스크림-1";
      const instance = new Menu(invalidMenu);
      expect(() => instance.menuValidate()).toThrow(Error);
      expect(() => instance.menuValidate()).toThrow("[ERROR]");
    });

    it('메뉴의 개수가 0이하로 입력되면 에러', () => {
      const invalidMenu = "아이스크림-0";
      const instance = new Menu(invalidMenu);
      expect(() => instance.menuValidate()).toThrow(Error);
      expect(() => instance.menuValidate()).toThrow("[ERROR]");
    });

    it('메뉴의 개수의 합계가 20 초과로 입력되면 에러', () => {
      const invalidMenu = "아이스크림-20, 제로콜라-1";
      const instance = new Menu(invalidMenu);
      expect(() => instance.menuValidate()).toThrow(Error);
      expect(() => instance.menuValidate()).toThrow("[ERROR]");
    });

    it('음료만 입력되면 에러 발생', () => {
      const invalidMenu = "제로콜라-1";
      const instance = new Menu(invalidMenu);
      expect(() => instance.menuValidate()).toThrow(Error);
      expect(() => instance.menuValidate()).toThrow("[ERROR]");
    });
  });
});