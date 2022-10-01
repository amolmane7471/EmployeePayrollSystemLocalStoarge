//day45-UC4
window.addEventListener('DOMContentLoaded',(event)=>{
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<th></th>th>NAME</th><th>Gender</th><th>Department</th>"+
    "<th>Salary</th><th>start Date</th><th>Actions</th>";
    const innerHtml = `${headerHtml}
 
    <tr>
        <td><img class="profile" alt="" src="assets-20220927T065615Z-001\assets\profile-images\Ellipse -2.png">
         </td>
         <td>Narayan Mahadevan</td>
         <td>Male</td>
         <td>3000000</td>
         <td>1 Nov 2020</td>
         <td>
            <img id="1" onclick="remove(this)" alt="delete" 
            src="assets-20220927T065615Z-001\assets\icons\delete-black-18dp.svg">
            <img id="1" alt="edit" onclick="update(this)"  
            src="assets-20220927T065615Z-001\assets\icons\create-black-18dp.svg">   
            </td>
    </tr>`;
document.querySelector('#table-display').innerHTML = innerHtml;

}

