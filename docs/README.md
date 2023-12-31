# 기능 요구 사항

## 입력

### 날짜 입력

`12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)`

- 1 ~ 31 사이의 수가 입력되어야 함
  - 아니라면 `[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.` 출력

<br>

### 주문 메뉴와 개수

#### 메뉴 목록

<애피타이저>

양송이수프(6,000), 타파스(5,500), 시저샐러드(8,000)

<메인>

티본스테이크(55,000), 바비큐립(54,000), 해산물파스타(35,000), 크리스마스파스타(25,000)

<디저트>

초코케이크(15,000), 아이스크림(5,000)

<음료>

제로콜라(3,000), 레드와인(60,000), 샴페인(25,000)

- 없는 메뉴를 입력하는 경우
- 메뉴의 개수는 0이하일 경우
- 메뉴 형식이 예시와 다른 경우
- 중복 메뉴를 입력한 경우
- 음료만 주문시 주문 x
- 메뉴는 한 번에 최대 20개까지
  - `[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.`
- 만원 이상부터 이벤트 적용

## 기능

### 디데이 할인

- 총 주문 금액에서 해당 금액만큼 할인(1일 ~ 25일일 경우)
  - 1일: 1,000원, 2일: 1,100원 ... 25일에 3,400원 할인

### 평일 할인(일요일 ~ 목요일)

평일에는 디저트 메뉴를 1개당 2,023원 할인
3일 ~ 7일, 10일 ~ 14일, 17일 ~ 21일, 24일 ~ 28일, 31일

### 주말 할인(금요일, 토요일)

주말에는 메인 메뉴를 메뉴 1개당 2,023원 할인
1일, 2일, 8일, 9일, 15일, 16일, 22일, 23일, 29일, 30일

### 특별 할인

이벤트 달력에 별이 있으면 총주문 금액에서 1,000원 할인
-> 3일, 10일, 17일, 24일, 25일, 31일

### 증정 이벤트

할인 전 총주문 금액이 12만 원 이상일 때, 샴페인 1개 증정

### 이벤트 배지

총 혜택 금액에 따라 이벤트 배지 부여

- 5천 원 이상: 별
- 1만 원 이상: 트리
- 2만 원 이상: 산타

## 출력

### 주문 메뉴 출력

출력 순서는 자유

### 증정 메뉴 출력

증정 이벤트에 해당하지 않는 경우 `없음` 출력

### 혜택 내역 출력

- 적용된 이벤트 내역 출력
- 이벤트가 하나도 없다면 `없음` 출력
- 여러 개의 이벤트가 적용된 경우 출력 순서는 자유롭게

### 총 혜택 금액 출력

- 할인 금액의 합계 + 증정 메뉴의 가격

### 할인 후 예상 결제 금액 출력

- 할인 전 총주문 금액 - 할인 금액

### 12월 이벤트 배지 출력

- 이벤트 배지가 부여되지 않은 경우 `없음` 출력
