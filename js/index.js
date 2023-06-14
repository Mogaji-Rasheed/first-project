 //let url = "https://randomuser.me/api";
 let image = document.getElementById("image");
 let fullName = document.getElementById("fullName");
 let Age = document.getElementById("age");
 let phoneNumber = document.getElementById("phoneNumber");
 let streetAddress = document.getElementById("streetAddress");
 let emailAddress = document.getElementById("emailAddress")
 let submit = document.getElementById("submit-btn");



const getInfo = async () => {
   const userData = await fetch("https://randomuser.me/api", {});
      const data = await userData.json();

image.src = data.results[0].picture.large;
const gottenName = `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`;
fullName.textContent = gottenName;
Age.textContent = data.results[0].dob.age;
phoneNumber.textContent = data.results[0].cell;
const gottenLocation = `${data.results[0].location.city} ${data.results[0].location.state} ${data.results[0].location.country}`;
streetAddress.textContent = gottenLocation;
emailAddress.textContent = data.results[0].email;

};


getInfo();


submit.onclick = ()=>{
   getInfo() 
};