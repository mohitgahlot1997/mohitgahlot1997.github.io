const firebaseConfig = {
    apiKey: "AIzaSyA3pRLNKfbZlmhSxHls1pMbtxi3ohuPln0",
    authDomain: "portfolio-mohitgahlot.firebaseapp.com",
    databaseURL: "https://portfolio-mohitgahlot-default-rtdb.firebaseio.com",
    projectId: "portfolio-mohitgahlot",
    storageBucket: "portfolio-mohitgahlot.appspot.com",
    messagingSenderId: "144630457054",
    appId: "1:144630457054:web:2ef02c82b53d2a81a2584f"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msg = getElementVal("msg");
    var subject = getElementVal("subject"); // Added subject field

    if (name === "" || emailid === "" || msg === "" || subject === "") {
        alert("Please fill in all fields before submitting.");
        return; // Do not proceed further
    }

    saveMessages(name, emailid, msg, subject);

    // Enable alert
    document.querySelector(".alert").style.display = "block";

    // Remove the alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    // Reset the form
    document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msg, subject) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        emailid: emailid,
        msg: msg,
        subject: subject // Added subject field
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};
