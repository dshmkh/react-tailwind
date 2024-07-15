import { FormEvent } from "react"
import { FormInput, GenerateFormElements } from "./SignIn";


const SignUp = () => {
  let formInputs: FormInput[] = [
    {label: "First Name", id: "firstName", type: "text"},
    {label: "Last Name", id: "lastName", type: "text"},
    {label: "Email", id: "email", type: "email"},
    {label: "Password", id: "password", type: "password"},
    {label: "Confirm Password", id: "confirmPassword", type: "password"}
  ];
  
  // write code here

  const signUp = (event: FormEvent) => {
    event.preventDefault();
    
    // @ts-ignore
    const elementsArray = [...event.target.elements];
    // write function code here
    const data = elementsArray.reduce((acc,element) => {
      if (element.id) {
        acc[element.id] = element.value;
      }
      return acc;
    }, {})

    try {
      if (data.firstName === "") throw("Please enter a first name");
      if (data.lastName === "") throw("Please enter a last name");
      if (data.email === "") throw("Please enter a email");
      if (data.password === "") throw("Please enter a password");
      if (data.confrimPassword === "") throw("Please enter a password");
    } catch (error) {
      alert(error);
    // write function code here
  }
  }

  return (<form onSubmit={signUp}>
    <h1 className="text-3xl text-pink-300">Sign up</h1>
    {GenerateFormElements(formInputs)}
    <button>Submit</button>
  </form>)
}

export default SignUp