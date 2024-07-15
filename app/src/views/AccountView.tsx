const AccountView = () => {
  let data = [
    {label: "First name", content: "John"},
    {label: "Last name", content: "Doe"},
    {label: "Email", content: "john.doe@example.com"}
  ]

  return (<div>
    <h1 className="text-3xl text-pink-300">Account View</h1>
    {/* create elements here */}
    {data.map(dataElement => {
      return (
        <div className="flex bg-neutral-900">
        <span>{dataElement.label}</span>
        <span className="flex"><br></br>{dataElement.content}</span>
        </div>)
    }
      )
    }

  </div>)
}

export default AccountView