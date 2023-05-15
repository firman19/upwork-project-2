// script.js
try {
  // page login
  document
    .getElementById("login-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      let elmts = document.querySelectorAll(".display-error");
      elmts.forEach((e) => {
        e.style.display = "none";
      });
      document.querySelector(".form-control").classList.remove("invalid");
      document.querySelector(".cta .signup").style.display = "block";

      if (email === "") {
        elmts = document.querySelectorAll(".display-error");
        console.log(elmts);

        // elmts is array of DOM
        elmts.forEach((e) => {
          // e represents each element/DOM
          // we want to make each element to diplay:block
          e.style.display = "block";
        });
        document.querySelector(".form-control").classList.add("invalid");
        document.querySelector(".cta .signup").style.display = "none";
      } else {
        // comment this line below to get rid of validation
        // validateEmailPassword(email, password);
      }
    });

} catch (error) {}

try {
  // page forgotten password
  document
    .getElementById("find-account")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission
      const email = document.getElementById("email").value;

      let elmts = document.querySelectorAll(".display-error");
      elmts.forEach((e) => {
        e.style.display = "none";
      });

      if (email === "") {
        elmts = document.querySelectorAll(".display-error");
        elmts.forEach((e) => {
          e.style.display = "block";
        });
      }
    });
} catch (error) {}

function validateEmailPassword(email, password) {
  if (email) {
    if (validateEmail(email)) {
      document.querySelector(".error-message.email").style.display = "none";
    } else {
      document.querySelector(".error-message.email").style.display = "block";
    }
  }

  if (password) {
    if (invalidPassword(password)) {
      document.querySelector(".error-message.password").innerHTML =
        "Your password must " + invalidPassword(password);
      document.querySelector(".error-message.password").style.display = "block";
    } else {
      document.querySelector(".error-message.password").style.display = "none";
    }
  }
}

function invalidPassword(str) {
  errors = [];
  if (str.length < 8) {
    errors.push("be at least 8 characters");
  }
  if (str.search(/[a-z]/i) < 0) {
    errors.push("contain at least one letter.");
  }
  if (str.search(/[0-9]/) < 0) {
    errors.push("contain at least one digit.");
  }
  if (errors.length > 0) {
    return errors.join(", ");
  }
  return false;
}

function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
