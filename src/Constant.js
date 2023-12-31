export const MESSAGE = {
  GREET: "안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.",
  INPUTDAY: "12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n",
  INPUTMENU: "주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n",
  PREVIEW: "12월 26일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!",
  PRINTMENU: "<주문 메뉴>",
  PREDISCOUNT: "<할인 전 총주문 금액>",
  GIVEITEM: "<증정 메뉴>",
  BENEFITLIST: "<혜택 내역>",
  TOTALBENEFIT: "<총혜택 금액>",
  EXPECTPRICE: "<할인 후 예상 결제 금액>",
  BADGE: "<12월 이벤트 배지>",
  NOTHING: "없음",
  NUM: "개",
  WON: "원",
  CHAMPAGNE: "샴페인 1개",
  SPACE: " ",
  COMMA: ",",
  MINUS: "-",
  SANTA: "산타",
  TREE: "트리",
  STAR: "별",
  MAIN: "MAIN",
  DESSERT: "DESSERT",
  DRINK: "DRINK",
  DISCOUNT: {
    DDAY: "크리스마스 디데이 할인: -",
    WEEKEND: "주말 할인: -",
    WEEKDAY: "평일 할인: -",
    SPECIAL: "특별 할인: -",
    GIVEITEM: "증정 이벤트: -",
  },
  ERROR: {
    DAY: "[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.",
    ORDER: "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.",
  },
}

export const NUMBER = {
  ZERO: 0,
  ONE: 1,
  TWO: 2,
  TWENTY: 20,
  THIRTYONE: 31,
  TWENTYFIVE: 25,
  ONEHUNDRED: 100,
  ONETHOUSAND: 1000,
  DISCOUNTCRITERIA: 10000,
  DISCOUNT: 2023,
  SPECIALDISCOUNT: 1000,
  ITEMCRITERIA: 120000,
  ITEMBENEFIT: 25000,
  SANTA: 20000,
  TREE: 10000,
  STAR: 5000,
}

export const BOOL = {
  TRUE: true,
  FALSE: false,
}

export const KEY = {
  DDAY: "dday",
  WEEKEND: "weekend",
  SPECIAL: "special",
}

export const MENU = {
  APPETIZER: { 양송이수프: 6000, 타파스: 5500, 시저샐러드: 8000 },
  MAIN: { 티본스테이크: 55000, 바비큐립: 54000, 해산물파스타: 35000, 크리스마스파스타: 25000 },
  DESSERT: { 초코케이크: 15000, 아이스크림: 5000 },
  DRINK: { 제로콜라: 3000, 레드와인: 60000, 아이스크림: 25000 }
}

export const WEEKDAY = [3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 17, 18, 19, 20, 21, 24, 25, 26, 27, 28, 31]

export const WEEKEND = [1, 2, 8, 9, 15, 16, 22, 23, 29, 30]

export const SPECIAL = [3, 10, 17, 24, 25, 31]

export default { MESSAGE, NUMBER, BOOL, KEY, MENU, WEEKDAY, WEEKEND, SPECIAL }