const SuccessPage = (props) => {
  return(
    <>
      <section className="d-flex align-items-center mt-5 flex-column">
        <p>Hello <span className="font-weight-bold">{props.firstName}</span> {props.lastName}, </p>
        <p>You have successfully submitted the form using <span className="font-weight-bold font-italic">{props.email}</span></p>
        <button onClick={props.onClick} className="btn btn-primary col-4">Resubmit Form</button>
      </section>
    </>
  )
}

export default SuccessPage