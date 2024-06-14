type SummaryDataProps = {
  fullName: string,
  email: string,
  phone: string,
  salary: string
}

function Summary({fullName, email, phone, salary}: SummaryDataProps) {
  return (
    <section>
      <p>Check your information:</p>
      <p>Your full name: {fullName}</p>
      <p>Your email: {email}</p>
      <p>Your phone number: {phone}</p>
      <p>Your salary: {salary}</p>
    </section>
  )
}

export default Summary