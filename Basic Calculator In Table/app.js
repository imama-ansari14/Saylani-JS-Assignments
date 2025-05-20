let a = +prompt("Enter the first number");
let b = +prompt("Enter the second number");

let add = a + b;
let sub = a - b;
let mul = a * b;
let div = a / b;
let mod = a % b;

document.write(`<table style="border: 4px solid black"> 
    <tr  style="background-color: rgb(158, 158, 212);"> <th>Addition</th>
    <th>Subtraction</th>
    <th>Multiplication</th>
    <th>Division</th>
    <th>Modulus</th>
    </tr>`+ `<tr  style="background-color: gainsboro;">
        <td>`+add+`</td>
        <td>`+sub+`</td>
        <td>`+mul+`</td>
        <td>`+div+`</td>
        <td>`+mod+`</td>
    </tr>
   </table>
`);
