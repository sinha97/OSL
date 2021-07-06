if (localStorage.getItem("firstname") != null && localStorage.getItem("lastname") != null && localStorage.getItem("gender") != null && localStorage.getItem("DOB") != null && localStorage.getItem("Mobile") != null && localStorage.getItem("Address") != null && localStorage.getItem("Email") != null && localStorage.getItem("Country") != null && localStorage.getItem("State") != null) {
    document.getElementById("n1").value = localStorage.getItem("firstname");
    document.getElementById("n2").value = localStorage.getItem("lastname");
    document.getElementById("gender").value = localStorage.getItem("gender");
    document.getElementById("d1").value = localStorage.getItem("DOB");
    document.getElementById("m1").value = localStorage.getItem("Mobile");
    document.getElementById("a1").value = localStorage.getItem("Address");
        
    document.getElementById("e1").value = localStorage.getItem("Email");
    document.getElementById("country").value = localStorage.getItem("Country");
    document.getElementById("state").value = localStorage.getItem("State");

}

function onSubmit() {
    var name1 = document.getElementById("n1").value;
    var name2=document.getElementById("n2").value;  
    var gender=document.getElementById("gender").value;  
    var dob = document.getElementById("d1").value;
    var mobile=document.getElementById("m1").value;  
    var add=document.getElementById("a1").value;  
    var email = document.getElementById("e1").value;
    var country = document.getElementById("country").value;
    var state = document.getElementById("state").value;
    
    var letters = /^[A-Za-z]+$/;

    var mNumber = /^[1-9]\d{9}$/;
     
    var email_val = /^\S+@\S+\.\S+$/;

    
    if (name1 == '' || name2 == '' || email == '' || mobile == '' || add == '' || gender == '' || dob == '' || country == 'Select country' || state == "Select state") {
        alert("Please,enter every details..");
    }
    
    if (mNumber.test(mobile)===false) {
        alert('Please put 10  digit mobile number');
    }
    
    if (email_val.test(email) === false) {
        alert('Invalid email format please enter valid email id');
    }

    else {
        let UserData = "You have enterd : \n" +
            "First Name : " + name1 + "\n" +
            "Last Name : " + name2 + "\n" +
            "Email : " + email + "\n" +
            "Mobile : " + mobile + "\n" +
            "DOB : " + dob + "\n" +
            "Gender : " + gender + "\n" +
            "Address : " + add + "\n" +
            "Country : " + country + "\n" +
            "State : " + state + "\n";
    
        alert(UserData);
    }

    localStorage.setItem("firstname", name1);
    localStorage.setItem("lastname", name2);
    localStorage.setItem("gender", gender);
    localStorage.setItem("DOB", dob);
    localStorage.setItem("Mobile", mobile);
    localStorage.setItem("Address", add);
    localStorage.setItem("Email", email);
    localStorage.setItem("Country", country);
    localStorage.setItem("State", state);
};

function onReset() {
    name1 =""
    name2 =""
    gender  = ""
    dob = ""
    mobile  = ""
    add = ""
    email = ""
    country = "Select country"
    state = "Select state"
};

var countryState = {
    "India":{
        "Andaman and Nicobar Islands":"AN",
        "Andhra Pradesh":"AP",
        "Arunachal Pradesh":"AR",
        "Assam":"AS",
        "Bihar":"BR",
        "Chandigarh":"CG",
        "Chhattisgarh":"CH",
        "Dadra and Nagar Haveli":"DN",
        "Daman and Diu":"DD",
        "Delhi":"DL",
        "Goa":"GA",
        "Gujarat":"GJ",
        "Mizoram":"MZ",
        "Nagaland":"NL",
        "Odisha":"OR",
    },
    "USA":{
         "Alabama":"AL",
         "Alaska":"AK",
         "American Samoa":"AS",
         "Arizona":"AZ",
         "Arkansas":"AR",
         "California":"CA",
         "Indiana":"IN",
         "Iowa":"IA",
         "Kansas":"KS",
        "Kentucky":"KY",
         "Louisiana":"LA",
         "Maine":"ME",
         "Marshall Islands":"MH",
         "Maryland":"MD",
         "Massachusetts":"MA",
         "Michigan":"MI",
         "Minnesota":"MN",
    }
}
        
window.onload = function(){
    for (var x in countryState) {
            country.options[country.options.length] = new Option(x, x);
        }
        country.onchange = function () {
            state.length = 1;
            for (var y in countryState[this.value]) {
                state.options[state.options.length] = new Option(y, y);
            }
        }
}

function onSetURL() {
    //const params = new URLSearchParams(window.location.search);
    var params = new URLSearchParams(window.location.href);
    console.log(params);
    var name = localStorage.getItem('firstname');
    params = params + "?fname=" + name;
    console.log(params);
    
}

// function onSetURL (string) {
// let parsed = {};
//     if (string != "") {
//       string = string.substring(string.indexOf("?") + 1);
//       let p1 = string.split("&");
//       p1.map(function (value) {
//         let params = value.split("=");
//         parsed[params[0]] = params[1];
//       });
//     }
//     return parsed;
// }
// var fname = localStorage.getItem('firstname');
// onSetURL(fname);