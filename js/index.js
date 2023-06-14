 let url = "https://randomuser.me/api";
 let image = document.getElementById("image");
 let fullName = document.getElementById("fullname");
 let Age = document.getElementById("age");
 let phoneNumber = document.getElementById("phoneNumber");
 let streetAddress = document.getElementById("streetAddress");
 let emailAddress = document.getElementById("emailAddress")
 let submit = document.getElementById("submit-btn");



const getInfo = () => {
   fetch(url).then(response =>{
      return response.json()
   }).then( data => {
      console.log(data)
   })
};
image.src 
fullName
Age
phoneNumber
streetAddress
emailAddress


submit.addEventListener("click", ()=>{
   return getInfo() 
})