import { FormEvent } from "react"

export type FormInput = {
  label: string, 
  id: string, 
  type: string
}

export const GenerateFormElements = (formInputs: FormInput[]) => {
  // write element generation code here
  return formInputs.map(formInput => {
   return (<div className="flex">
      <label >{formInput.label}</label>
      <input id={formInput.id} type={formInput.type}/>
    </div>)
})
}

const SignIn = () => {
  let formInputs = [
    {label: "Email", id: "email", type: "email"},
    {label: "Password", id: "password", type: "password"}
  ];

  // write code here

  const signIn = (event: FormEvent) => {
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
      if (data.email === "") throw("Please enter an email");
      if (data.password === "") throw("Please enter a password");
      if (data.password.length < 8) throw("The password must be atleast 8 characters long");
    } catch (error) {
      alert(error);
    }

  }

  return (<form onSubmit={signIn}>
    <h1 className="text-3xl text-pink-300">Sign in</h1>
    {GenerateFormElements(formInputs)}
    <button>Submit</button>
    {/* create components here */}
  </form>)
}

export default SignIn