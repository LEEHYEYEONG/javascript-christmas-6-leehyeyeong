import { SPECIAL, WEEKEND } from "./Constant.js";

class Day {
  constructor(day) {
    this.day = parseInt(day);
  }
  dayValidate() {
    if (this.day > 31 || this.day < 1) {
      throw new Error("[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.");
    } else if (isNaN(this.day)) {
      throw new Error("[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.");
    }
  }
  discount() {
    const dayDiscount = { dday: 0, weekend: false, special: false }
    dayDiscount["dday"] = this.ddayDiscount();
    dayDiscount["weekend"] = this.weekendDisCount();
    dayDiscount["special"] = this.specialDiscount();
    return dayDiscount;
  }
  ddayDiscount() {
    let discount = 0
    if (this.day <= 25) {
      discount = 1000 + (this.day - 1) * 100
    }
    return discount
  }

  weekendDisCount() {
    if (WEEKEND.includes(this.day)) {
      return true
    }
    return false
  }
  specialDiscount() {
    if (SPECIAL.includes(this.day)) {
      return true
    }
    return false
  }
}

export default Day