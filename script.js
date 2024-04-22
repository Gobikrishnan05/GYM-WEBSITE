-
  firebase.initializeApp({
        apiKey: "AIzaSyCr7GhB32Xi3pUs73_5YkQYoNh7d0C7F2w",
        authDomain: "contactform-381e9.firebaseapp.com",
        databaseURL: "https://contactform-381e9-default-rtdb.firebaseio.com",
        projectId: "contactform-381e9",
        storageBucket: "contactform-381e9.appspot.com",
        messagingSenderId: "148969713932",
        appId: "1:148969713932:web:8adaff8103adf129711929",
        measurementId: "G-V8C37YE8VM"
     });

  var contactformdb = firebase.database().ref(contactform);
 var btn=document.getElementById("contactForm");
 btn.addEventListener("submit",submitForm );
 function submitForm(){
    preventdefault();

    var name = document.getElementval('name');
    var email = document.getElementval('email');
    var message = getElementval('message')
     alert(name+" "+email+" "+message);
    savemessages(name, email,message);

 }
 const savemessages = (name, email,message) =>{
    var newcontactform = contactformdb.push();

    newcontactform.set({
        name: name,
        email: email,
        message: message,
    });
 }
 const getElementval =  (id) =>{
    return document.getElementById(id).value;  
 }
