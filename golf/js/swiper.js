const prevMonthButton = document.getElementById("prevMonth");
const nextMonthButton = document.getElementById("nextMonth");
const currentMonthYear = document.getElementById("currentMonthYear");
const calendarBody = document.getElementById("calendarBody");

let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();

function renderCalendar() {
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  currentMonthYear.textContent = `${currentYear}년 ${currentMonth + 1}월`;

  calendarBody.innerHTML = "";

  for (let i = 0; i < firstDay; i++) {
    const emptyDayCell = document.createElement("div");
    emptyDayCell.classList.add("calendar-cell", "empty-cell");
    calendarBody.appendChild(emptyDayCell);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const dayCell = document.createElement("div");
    dayCell.classList.add("calendar-cell");
    dayCell.textContent = i;
    calendarBody.appendChild(dayCell);
  }
}

prevMonthButton.addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentYear--;
    currentMonth = 11;
  }
  renderCalendar();
});

nextMonthButton.addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentYear++;
    currentMonth = 0;
  }
  renderCalendar();
});

renderCalendar();
