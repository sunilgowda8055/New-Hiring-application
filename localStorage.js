document.addEventListener('DOMContentLoaded', function() {
  const employeeDetails = JSON.parse(localStorage.getItem('details'));
  const tableBody = document.getElementById('employeeTableBody');

  employeeDetails.forEach(employee => {
    const row = tableBody.insertRow();
    for (const key in employee) {
      const cell = row.insertCell();
      cell.textContent = employee[key];
    }
  });
});

