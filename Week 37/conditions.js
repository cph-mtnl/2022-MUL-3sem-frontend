//Tænk over variabel og funktions navne

// Øvelse 1.1: (Conditions)
// Lav en funktion,
// der fortæller om en input string er minimum 3 karakterer.
function validateMinimumLength(input) {
  const resultat = input.length >= 3;
  return resultat;
}

// const isValidString = validateMinimumLength("abc");

// Øvelse 1.2: (Logical operators)
// Udvid funktionen med at den maksimum må være 8 karakterer.
function validateLength(input) {
  const resultat = input.length >= 3 && input.length <= 8;
  return resultat;
}
// const lengthRange = validateLength("1234567");
// console.log("lengthRange", lengthRange);

// Eksempel
// const variabel = 0;
// const test = (variabel == 0 || variabel == 1) && variabel > 0;

// Øvelse 1.3:
// Lav en funktion,
// om en string indeholder "cphbusiness.dk"
function isCorrectEmail(input) {
  const result = input.includes("cphbusiness.dk");
  return result;
}

// Øvelse 1.4:
// Lav en funktion om 2 strings matcher.
function matches(a, b) {
  const result = a === b;
  return result;
}

// Øvelse 2.1:
function onSubmit(event) {
  event.preventDefault();
  console.log("Hej jeg er blevet submitted");
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const verify = document.querySelector("#verify").value;

  const isEmailValid = isCorrectEmail(email);
  const isPasswordValid = validateLength(password);
  const isVerifyValid = matches(password, verify);

  if (!isEmailValid) {
    console.log("Email er forkert");
    document.querySelector("#email").style.border = "5px solid red";
  }

  if (!isPasswordValid) {
    console.log("Password er forkert");
  } else if (!isVerifyValid) {
    console.log("verify er forkert");
  }

  if (isVerifyValid && isEmailValid && isPasswordValid) {
    console.log("Tillykke, du har indtastet korrekt");
  }
}
// Lav en event listener på "submit" og indsamle værdierne.
const form = document.querySelector("#my-login-form");
form.addEventListener("submit", onSubmit);

// Øvelse 2.2:
// Sammensæt de tidligere funktioner med det nye event.
// Lav nogle if sætninger afhængig af resultatet af de enkelte funktioner

// Øvelse 2.3:
// Tilføj en klasse til input feltet, hvis det ikke valideres.
