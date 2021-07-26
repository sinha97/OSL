const username = document.getElementById('username');
const intpass = document.getElementById('password');
const cnfrmpass = document.getElementById('confirm-password');
const next = document.getElementById('next');
const p1 = document.getElementById('page1');
const p2 = document.getElementById('p2');
const p3 = document.getElementById('p3');

function valid1(){
    if(((username.value).length >= 6) && intpass.value.length > 4 && intpass.value === cnfrmpass.value){
        
        p1.classList.remove('show');
        p2.classList.add('show');
        
    }else{
        if((username.value).length < 6) alert('username sould be of atleast 6 characters');
        else if(intpass.value === cnfrmpass.value) {

            if(intpass.value.length < 4 ){
                alert('password should be of atleast 4 characters');
            } 
        }
        else if(intpass.value !== cnfrmpass.value)alert("password doesn't matches");
    }
}

next.addEventListener('click',valid1);
username.addEventListener('keyup', ()=>{
    console.log("called")
    if(username.value.length < 6){
        username.setAttribute('data-error', 'minimum 6 characters required');
    }
})


const previous = document.getElementById('prevbtn');
const next2 = document.getElementById('n2');

const edu = document.getElementById('eduction'); // required
const field = document.getElementById('field'); //required
const uni = document.getElementById('university'); // required


function valid2(){
    let v1 = edu.value;
    let v2 = field.value;
    let v3 = uni.value;

    if(v1.length < 1 || v2.length < 1 || v3.length < 1){
        alert('please enter the valid inputs');
        return;
    }
    p2.classList.remove('show');
    p3.classList.add('show');
}


previous.addEventListener('click', () =>{
    p2.classList.remove('show');
    p1.classList.add('show');
})

next2.addEventListener('click', valid2);


const jobtitle = document.getElementById('job-title');
const company = document.getElementById('company');
const city = document.getElementById('city');
const back2 = document.getElementById('pp3');

function valid3(){
    let job = jobtitle.value;
    let cmpny = company.value;
    let place = city.value;

    if(job.length < 1 || cmpny.length < 1 || place.length < 1){
        alert('all the fields are required');
        return false;
    }
    return true;
}

back2.addEventListener('click', () => {
    p3.classList.remove('show');
    p2.classList.add('show');
})


const fsubmit = document.getElementById('submit');

fsubmit.addEventListener('click', () =>{
    if(valid3){
        console.log(job.length);

        alert('form submitted');
    }else{
        alert('else called');
    }
})