import { BOOL, KEY, MESSAGE, NUMBER, SPECIAL, WEEKEND } from "./Constant.js";

class Day {
  constructor(day) {
    this.day = parseInt(day);
  }
  dayValidate() {
    if (this.day > NUMBER.THIRTYONE || this.day < NUMBER.ONE) {
      throw new Error(MESSAGE.ERROR.DAY);
    } else if (isNaN(this.day)) {
      throw new Error(MESSAGE.ERROR.DAY);
    }
  }
  discount() {
    const dayDiscount = { dday: NUMBER.ZERO, weekend: false, special: false }
    dayDiscount[KEY.DDAY] = this.ddayDiscount();
    dayDiscount[KEY.WEEKEND] = this.weekendDisCount();
    dayDiscount[KEY.SPECIAL] = this.specialDiscount();
    return dayDiscount;
  }
  ddayDiscount() {
    let discount = NUMBER.ZERO
    if (this.day <= NUMBER.TWENTYFIVE) {
      discount = NUMBER.ONETHOUSAND + (this.day - NUMBER.ONE) * NUMBER.ONEHUNDRED
    }
    return discount
  }

  weekendDisCount() {
    if (WEEKEND.includes(this.day)) {
      return BOOL.TRUE
    }
    return BOOL.FALSE
  }
  specialDiscount() {
    if (SPECIAL.includes(this.day)) {
      return BOOL.TRUE
    }
    return BOOL.FALSE
  }
}

export default Day