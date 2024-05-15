// function foo(){
//     var firstName = document.getElementById("firstname").value;
//     var lastName = document.getElementById("lastname").value;
//     var email = document.getElementById("mail").value;
//     var location = document.getElementById("location").value;    
    
//     console.log("First Name: " + firstName);
//     console.log("Last Name: " + lastName);
//     console.log("Email: " + email);
//     console.log("Location: " + location);
// }


function label(tagname, attrname, attrval, content) {
    var label = document.createElement(tagname);
    label.setAttribute(attrname, attrval);
    label.innerHTML = content; 
    return label;
}

function break1() {
    return document.createElement("br"); 
}

function input(tagname, attrname, attrval, attrname1, attrval1, attrname2, attrval2) {
    var input = document.createElement(tagname);
    input.setAttribute(attrname, attrval);
    input.setAttribute(attrname1, attrval1);
    input.setAttribute(attrname2, attrval2); 
    return input;
}



// Call the functions and append the elements to the document
var firstNameLabel = label("label", "for", "firstname", "First Name:");
var firstNameInput = input("input", "type", "text", "id", "firstname", "name", "firstname");

var middleNameLabel = label("label", "for", "middlename", "Middle Name:");
var middleNameInput = input("input", "type", "text", "id", "middlename", "name", "middlename");

var lastNameLabel = label("label", "for", "lastname", "Last Name:");
var lastNameInput = input("input", "type", "text", "id", "lastname", "name", "lastname");

var mailLabel = label("label", "for", "mail", "Mail:");
var mailInput = input("input", "type", "text", "id", "mail", "name", "mail");

var locationLabel = label("label", "for", "location", "Location:");
var locationInput = input("input", "type", "text", "id", "location", "name", "location");



// Append the elements to the document
document.body.appendChild(firstNameLabel);
document.body.appendChild(break1());
document.body.appendChild(firstNameInput);
document.body.appendChild(break1());


document.body.appendChild(middleNameLabel);
document.body.appendChild(break1());
document.body.appendChild(middleNameInput);
document.body.appendChild(break1());

document.body.appendChild(lastNameLabel);
document.body.appendChild(break1());
document.body.appendChild(lastNameInput);
document.body.appendChild(break1());



document.body.appendChild(mailLabel);
document.body.appendChild(break1());
document.body.appendChild(mailInput);
document.body.appendChild(break1());

document.body.appendChild(locationLabel);
document.body.appendChild(break1());
document.body.appendChild(locationInput);
document.body.appendChild(break1());

 function submitform() {
    console.log("Form submitted!");

    var firstName = document.getElementById("firstname").value;
    var middleName = document.getElementById("middlename").value;
    var lastName = document.getElementById("lastname").value;
    var email = document.getElementById("mail").value;
    var location = document.getElementById("location").value;

    var outputDiv = document.createElement("div");
    outputDiv.innerHTML = `
        <p>First Name: ${firstName}</p>
        <p>Middle Name: ${middleName}</p>
        <p>Last Name: ${lastName}</p>
        <p>Email: ${email}</p>
        <p>Location: ${location}</p>
    `;
    document.body.appendChild(outputDiv);

}

var button = document.createElement("button");
button.setAttribute("type", "button"); 
button.setAttribute("onclick", "submitform()"); 
button.textContent = "Submit"; 
document.body.appendChild(button); 

