// SEARCH BUTTON
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");
// document = html 자체, 요소 안에서 querySelector 가능

searchEl.addEventListener("click", function () {
  // Logic...
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  // setAttribute : 속성 + 값 추가
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

// THISYEAR
const thisYear = document.querySelector(".this-year");

thisYear.textContent = new Date().getFullYear(); // 2022
