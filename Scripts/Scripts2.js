const returnData = localStorage.getItem('data_string');
const returnDataparsed = JSON.parse(returnData);


document.getElementById("Nametitle").textContent = returnDataparsed.Name; 
document.getElementsByClassName("loc")[0].innerText = returnDataparsed.Location;
document.getElementsByClassName("Phno")[0].innerText = returnDataparsed.phone;
document.getElementsByClassName("email")[0].href = `mailto:${returnDataparsed.Email}`;
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
for (var i = 0; i< returnDataparsed.Aff.length; i++){  
    if(returnDataparsed.Aff[i]) 
    document.getElementById("aff").innerHTML += '<li>' + returnDataparsed.Aff[i] +'</li>' ;
}

for (var i = 0; i < returnDataparsed.wh.length; i++) {

    if (returnDataparsed.wh[i])
        var Content = returnDataparsed.wh[i].split('\n');
        var Title = Content[0];
        var Location = Content[1];
        Content.splice(0,2);
        var Content = Content.join('\n');   

    var li = document.createElement("li");   
    var title = document.createElement("div");
    var loc = document.createElement("div");
    var con = document.createElement("div");
    
    li.className = 'Workdetails';
    title.className = 'title';
    loc.className = 'location';
    con.className = 'workcontent';

    title.innerHTML = Title;
    loc.innerHTML = Location;
    con.innerHTML = Content;

    li.appendChild(title);
    li.appendChild(loc);
    li.appendChild(con);

    var ul = document.getElementById("workhis");
    ul.appendChild(li);
}