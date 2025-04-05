const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];
  
  let currentMonth = new Date().getMonth();  // Get current month (0-11)
  let currentYear = new Date().getFullYear(); // Get current year
  const today = new Date(); // Get today's date
  const todayDate = today.getDate(); // Get today's day (1-31)
  
  // Function to generate the calendar for the given month and year
  function generateCalendar(month, year) {
    const firstDay = new Date(year, month, 1).getDay();  // Get first day of the month
    const daysInMonth = new Date(year, month + 1, 0).getDate();  // Get number of days in the month
    
    const calendarDays = document.getElementById('calendar-days');
    calendarDays.innerHTML = '';  // Clear existing calendar days
  
    // Fill in empty days at the beginning of the month
    for (let i = 0; i < firstDay; i++) {
      const emptyDay = document.createElement('div');
      calendarDays.appendChild(emptyDay);
    }
  
    // Add actual days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dayElement = document.createElement('div');
      dayElement.textContent = day;
  
      // Check if this is today's date and highlight it
      if (day === todayDate && month === today.getMonth() && year === today.getFullYear()) {
        dayElement.classList.add('today'); // Add the "today" class for styling
      }
  
      calendarDays.appendChild(dayElement);
    }
  
    // Update the month name in the header
    document.getElementById('month-name').textContent = months[month] + " " + year;
  }
  
  // Function to change the month when user clicks next/previous button
  function changeMonth(delta) {
    currentMonth += delta;  // Modify the month by delta
  
    // Handle overflow of month index
    if (currentMonth > 11) {
      currentMonth = 0;  // January (0)
      currentYear++;     // Increment the year
    } else if (currentMonth < 0) {
      currentMonth = 11; // December (11)
      currentYear--;     // Decrement the year
    }
  
    generateCalendar(currentMonth, currentYear);  // Regenerate calendar with new month and year
  }
  
  // Initial render of the calendar for the current month and year
  generateCalendar(currentMonth, currentYear);