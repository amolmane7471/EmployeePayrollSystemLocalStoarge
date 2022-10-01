window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
  });
  
  const createInnerHtml = () => {
  
    const headerHtml = `
      <th></th>
      <th>Name</th>
      <th>Gender</th>
      <th>Department</th>
      <th>Salary</th>
      <th>Start Date</th>
      <th>Actions</th>`;
    
    let innerHtml = `${headerHtml}`;
    let employeePayrollList = createEmployeePayrollJSON();
  
    for(const employeePayrollData of employeePayrollList){
      
      innerHtml = `${innerHtml}
        <tr>
          <td><img class="profile" src="${employeePayrollData._profilePic}" alt=""></td>
          <td>${employeePayrollData._name}</td>
          <td>${employeePayrollData._gender}</td>
          <td>
          <div class='dept-label' >${employeePayrollData._department[0]}</div>
          <div class='dept-label' >${employeePayrollData._department[1]}</div>
          </td>
          
          <td>${employeePayrollData._salary}</td>
          <td>${employeePayrollData._startDate}</td>
          <td>
            <img name="${employeePayrollData._id}" src="../assets/icons/delete.svg" alt="delete" onclick="remove(this)">
            <img name="${employeePayrollData._id}" src="../assets/icons/edit.svg" alt="edit" onclick="update(this)">
          </td>
        </tr>`;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
  }
  
  const createEmployeePayrollJSON = () => {
    let employeePayrollListLocal = [
      {
        _name: 'Sumit',
        _gender: 'Male',
        _department: [
          'HR',
          'Sales',
          'Finance'
        ],
        _salary: 1000000,
        _startDate: '28 Sept 2022',
        _note: 'this is note a',
        _id: new Date().getTime(),
        _profileImage: '../assets/profile-images/profile_img-4.png'
      },
      {
        _name: 'Ramesh',
        _gender: 'Male',
        _department: [
          'Finance'
        ],
        _salary: 500000,
        _startDate: '30 Sept 2022',
        _note: 'this is note',
        _id: new Date().getTime() + 1,
        _profileImage: '../assets/profile-images/profile_img-2.png'
      }
    ];
    return employeePayrollListLocal;
  }
  const getDepartmentHtml = (departmentList) => {
    let departmentHtml = '';
    for(const department of departmentList){
      departmentHtml = `${departmentHtml} <div class='dept-label'>${department}</div>`
    }
    return departmentHtml
  }