// Initialize Firebase
  const config = {
    apiKey: "AIzaSyDsGciOiDqq2GZFZbVP_dtYMS79MV35D6M",
    authDomain: "myresumeform-a1e86.firebaseapp.com",
    databaseURL: "https://myresumeform-a1e86.firebaseio.com",
    projectId: "myresumeform-a1e86",
    storageBucket: "myresumeform-a1e86.appspot.com",
    messagingSenderId: "893586272918"
  };
  firebase.initializeApp(config);

  const messageRef = firebase.database().ref('messages');
  
  document.getElementById('form').addEventListener('submit', submitForm);

  function submitForm(e){
    e.preventDefault();
    const name = getInputValue('name');
    const phone = getInputValue('phone');
    const email = getInputValue('email');
    const message = getInputValue('message');
    
    saveMessage(name, phone, email, message);

    if(getInputValue){
      clearFields();
      alert();
  }
   
  function getInputValue(id){
    return document.getElementById(id).value;
  }

  function clearFields(){
      document.getElementById('name').value = '';
      document.getElementById('phone').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = ''; 
  }

  function alert(){
    document.querySelector('.alert').style= "display: block"
      setTimeout(() => {
        document.querySelector('.alert').style= "display: none";
      }, 3000);
  }; 
}

function saveMessage(name, phone, email, message){
  const newMessageRef = messageRef.push();
  newMessageRef.set({
    name: name,
    phone: phone,
    email: email,
    message: message
  });  
}
 
