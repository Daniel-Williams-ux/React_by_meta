function PromoHeading(props) {
  const divStyle  = {
    backgroundColor: "azure",
  }

  const container = {
    width: "80%",
  }

  const hero = {
    color: "red",
  }
  return (
    <div 
      style={divStyle}>
      <div 
        style={container}>
        <h1 
          style={hero}>
          Heading
        </h1>
        <h2>{props.heading}</h2>
        <h3>{props.callToAction}</h3>
      </div>
    </div>
  )
}

export default PromoHeading;