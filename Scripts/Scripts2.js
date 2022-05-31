const returnData = localStorage.getItem('data_string');
const returnDataparsed = JSON.parse(returnData);

document.getElementById("Nametitle").textContent = returnDataparsed.Name; 
document.getElementsByClassName("loc")[0].innerText = returnDataparsed.Location;
document.getElementsByClassName("Phno")[0].innerText = returnDataparsed.phone;
document.getElementsByClassName("email")[0].innerText = returnDataparsed.Email;
document.getElementById("summary").innerText = returnDataparsed.summary;


for (var i = 0; i< returnDataparsed.skills.length; i++){    
    if (returnDataparsed.skills[i])   
    document.getElementById("skills").innerHTML += '<li>' + returnDataparsed.skills[i] +'</li>' 
}
for (var i = 0; i< returnDataparsed.education.length; i++){ 
    if (returnDataparsed.education[i])    
    document.getElementById("Education").innerHTML += '<li>' + returnDataparsed.education[i] +'</li>' 
}
for (var i = 0; i< returnDataparsed.skills.length; i++){  
    if(returnDataparsed.Aff[i]) 
    document.getElementById("aff").innerHTML += '<li>' + returnDataparsed.Aff[i] +'</li>' ;
}
///
for (var i = 0; i < returnDataparsed.skills.length; i++) {
    if (returnDataparsed.wh[i])
        document.getElementById("workhis").innerHTML += '<li>' + returnDataparsed.wh[i] + '</li>';
}