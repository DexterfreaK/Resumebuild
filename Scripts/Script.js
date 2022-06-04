
function GetData() {
    
    const data =  {
        Name: document.getElementById("Name").value,
        Email : document.getElementById("Email").value,
        Location : document.getElementById("Location").value,
        phone : document.getElementById("Phno").value,
        summary : document.getElementById("Profess").value,
        skills: returnlist("#Skill"),
        education : returnlist("#Education"),
        Aff: returnlist("#Affiliations"),
        wh: returnlist('#workhis'),
    };
    const data_string =  JSON.stringify(data);
    console.log(data_string);
    localStorage.setItem('data_string', data_string);
    var choices = document.getElementsByName('inlineRadioOptions');
        console.log(choices[0].checked);
        console.log(choices[1].checked);
        if(choices[0].checked)
            window.open('Resume.html');
        if(choices[1].checked)
            window.open('Resume2.html');
    
}

function NewDatafield(name,list,type = true ){
    var field = document.getElementById(list);
    if(type)
        field.innerHTML += `<li> <input type="text" class="form-control mt-3 " id="${name}" placeholder="${name}"></li>`;
    else
        field.innerHTML += `<li><textarea class="form-control" id="workhis" rows="5"></textarea></li>`;
}

function returnlist(id){
    element = document.querySelectorAll(id);
    const elementlist = [];
    for (var i = 0; i < element.length; i++) {
        elementlist.push(element[i].value);
    }
    return elementlist;
}