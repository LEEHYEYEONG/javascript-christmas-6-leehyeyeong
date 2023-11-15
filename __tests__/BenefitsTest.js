import { findCategory, findMenu, badge, weekendDiscount } from "../src/Benefits";
import { MESSAGE, NUMBER } from "../src/Constant";

describe('findCategory', () => {
  it('MENU에 존재하는 카테고리를 반환하는지 테스트', () => {
    const menu = "티본스테이크";
    expect(findCategory(menu)).toBe("MAIN");
  });
});

describe('findMenu', () => {
  it('target과 카테고리가 일치하면 개수만큼 2023원씩 할인', () => {
    const menu = { 티본스테이크: 1, 타파스: 2, 제로콜라: 1 };
    const target = "APPETIZER"
    expect(findMenu(menu, target)).toBe(4046);
  });
});

describe('weekendDiscount', () => {
  it('weekend가 true일 때는 MAIN 음식이 있으면 메뉴당 한개씩 2023원 할인', () => {
    const menu = { 티본스테이크: 1, 타파스: 2, 제로콜라: 1 };
    expect(weekendDiscount(true, menu)).toBe(2023);
  });

  it('weekend가 false일 때는 DESSERT 음식이 있으면 메뉴당 한개씩 2023원 할인', () => {
    const menu = { 티본스테이크: 1, 타파스: 2, 제로콜라: 1 };
    expect(weekendDiscount(false, menu)).toBe(0);
  });
});


describe('badge', () => {
  it('totalBenefit이 NUMBER.SANTA보다 크면 MESSAGE.SANTA를 반환해야 합니다.', () => {
    expect(badge(NUMBER.SANTA + 1)).toBe(MESSAGE.SANTA);
  });

  it('totalBenefit이 NUMBER.TREE보다 크면 MESSAGE.TREE를 반환해야 합니다.', () => {
    expect(badge(NUMBER.TREE + 1)).toBe(MESSAGE.TREE);
  });

  it('totalBenefit이 NUMBER.STAR보다 크면 MESSAGE.STAR를 반환해야 합니다.', () => {
    expect(badge(NUMBER.STAR + 1)).toBe(MESSAGE.STAR);
  });

  it('totalBenefit이 NUMBER.STAR보다 작거나 같으면 MESSAGE.NOTHING을 반환해야 합니다.', () => {
    expect(badge(NUMBER.STAR)).toBe(MESSAGE.NOTHING);
    expect(badge(NUMBER.STAR - 1)).toBe(MESSAGE.NOTHING);
  });
});