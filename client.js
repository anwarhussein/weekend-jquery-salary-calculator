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
        total +=Number(i)
    }
    total =total/12;
    total > 20000 ? 
     $('#monthly-total').text(`Monthly Total:$ ${(total).toFixed(2)}`).css('background-color','red') :
     $('#monthly-total').text(`Monthly Total:$ ${(total).toFixed(2)}`);
    
    
   

$('#firstname').val('');
$('#lastname').val('');
$('#id').val('');
$('#title').val('');
$('#annualsalary').val('');
    
}

function removeEmployee(){
    $(this).parent().parent().remove();
    //console.log(monthlyTotal.pop());
   
    
    // let total = $("#monthly-total").text();
    // total = Array.from(total).slice(16);
    // total.pop()
    // let sum = 0;
    // for ( i of total) {
    //     sum += Number(i);
    // }
    // console.log(sum);
    
    // console.log(total);
    // let mTotal = '' ;
    // for(i of total){
    //     mTotal += i;
    // }
    // let salary = (Number(mTotal));
    // console.log(monthlyTotal);
    
//   $('#monthly-total').text(`Monthly Total: $${total}`);
}


