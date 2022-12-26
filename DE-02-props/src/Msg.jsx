const Msg = (props) => {
  // props=>{nameMsg="Emily Kurnikov"}
  console.log(props);
  return (
    <div>
        <h1>Hello, I am {props.nameMsg}</h1>
        <h1>My Phone number {props.telMsg}</h1>
    </div>

  )

};

export default Msg;
