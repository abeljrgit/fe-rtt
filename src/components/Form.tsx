import useInputValidation from "../hooks/useInputValidation";

const isEmpty = (value: string) => value.trim() !== "";

const emailValidation = (value: string) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    return true;
  } else {
    return false;
  }
};

const passwordValidation = (value: string) => {
  if (
    /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{10,16}$/.test(
      value
    )
  ) {
    return true;
  } else {
    return false;
  }
};

const Form = () => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: firstNameReset,
  } = useInputValidation(isEmpty);
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useInputValidation(isEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInputValidation(emailValidation);
  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: passwordReset,
  } = useInputValidation(passwordValidation);

  const submitHandler = () => {
    if (
      firstNameIsValid &&
      lastNameIsValid &&
      emailIsValid &&
      passwordIsValid
    ) {
      console.log(firstNameValue);
    }

    firstNameReset();
    lastNameReset();
    emailReset();
    passwordReset();
  };

  return (
    <form
      className="bg-white shadow-md py-8 px-8 max-w-xl w-full"
      onSubmit={submitHandler}
    >
      <div className="flex flex-col mb-8">
        <label htmlFor="firstName" className="mb-1">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          className="border-2 border-black bg-slate-100 mb-1"
          value={firstNameValue}
          onChange={firstNameChangeHandler}
          onBlur={firstNameBlurHandler}
        />
        {firstNameHasError && (
          <p className="text-xs text-red-400">Please input valid first name</p>
        )}
      </div>
      <div className="flex flex-col mb-8">
        <label htmlFor="lastName" className="mb-1">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          className="border-2 border-black bg-slate-100 mb-1"
          value={lastNameValue}
          onChange={lastNameChangeHandler}
          onBlur={lastNameBlurHandler}
        />
        {lastNameHasError && (
          <p className="text-xs text-red-400">Please input valid last name</p>
        )}
      </div>
      <div className="flex flex-col mb-8">
        <label htmlFor="emailAddress" className="mb-1">
          Email
        </label>
        <input
          type="email"
          id="emailAddress"
          className="border-2 border-black bg-slate-100 mb-1"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <p className="text-xs text-red-400">
            Please input valid email address
          </p>
        )}
      </div>
      <div className="flex flex-col mb-8">
        <label htmlFor="password" className="mb-1">
          Password
        </label>
        <input
          type="email"
          id="password"
          className="border-2 border-black bg-slate-100 mb-1"
          value={passwordValue}
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
        />
        {passwordHasError && (
          <p className="text-xs text-red-400">
            Must contain at least one number and one uppercase, one lowercase
            letter, special symbol, and at least 8 or more characters
          </p>
        )}
      </div>
    </form>
  );
};

export default Form;
