function passwordValidator(password) {
  const lettersAndDigitsRegex = /^[a-zA-Z0-9]+$/;
  const digitsRegex = /\d/g;
  const errors = [];

  if (!(password.length >= 6 && password.length <= 10))
    errors.push("Password must be between 6 and 10 characters");
  if (!lettersAndDigitsRegex.test(password))
    errors.push("Password must consist only of letters and digits");
  if ((digitsRegex.test(password) || []).length < 2)
    errors.push("Password must have at least 2 digits");

  if (errors.length > 0) {
    console.log(errors.join("\n"));
  } else console.log("Password is valid");
}

passwordValidator("logIn");
passwordValidator("MyPass123");
passwordValidator("Pa$s$s");
