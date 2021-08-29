console.log('hello');

$(document).ready(readyNow);


let monthlyTotal = [];
function readyNow() {
$('#Submit-button').on('click',addEmployee);
$('#tableEmployee').on('click','#delete-button',removeEmployee);

 
}

function addEmployee() {

    let firstName = $('#firstname').val();
    let lastName = $('#lastname').val();
    let id = $('#id').val();
    let title = $('#title').val();
    let annualSalary = $('#annualsalary').val();
    $('#tableEmployee').append(`<tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${id}</td>
    <td>${title}</td>
    <td>${annualSalary}</td>
    <td><button id= "delete-button">Delete</button></td>
    </tr>
    `);
   
    monthlyTotal.push(annualSalary);
    let total = 0;
    for (i of monthlyTotal) {
        total += Number(i);
    }
    $('#monthly-total').text(`Monthly Total: $${total}`);

$('#firstname').val('');
$('#lastname').val('');
$('#id').val('');
$('#title').val('');
$('#annualsalary').val('');
    
}
function removeEmployee(){
    //console.log($(this));
    $(this).parent().parent().remove();
}


