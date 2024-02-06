function hireEmployee() {
  const employeeDetails = JSON.parse(localStorage.getItem('details')) || []

  let obj = {}

  obj.employeeNameValue = document.getElementById('employeeName').value

  obj.jobRoleValue = document.getElementById('jobRole').value

  obj.departmentValue = document.getElementById('department').value

  obj.monthlySalaryValue = document.getElementById('monthlySalary').value

  obj.experienceValue = document.getElementById('experience').value

  obj.contactEmailValue = document.getElementById('contactEmail').value

  if (
    !obj.employeeNameValue ||
    !obj.jobRoleValue ||
    !obj.departmentValue ||
    !obj.monthlySalaryValue ||
    !obj.experienceValue ||
    !obj.contactEmailValue
  ) {
    alert('please fill all the fields')
    return
  }

  if (obj.monthlySalaryValue <= 5000) {
    alert('salary at least will be 5k')
    return
  }

  const emailValidation = /@/

  if (!emailValidation.test(obj.contactEmailValue)) {
    alert('email should be in @ gmail.com')
    return
  }

  employeeDetails.push(obj)

  localStorage.setItem('details', JSON.stringify(employeeDetails))

  window.location.href = 'localStorage.html'
}
