import { StyleSheet, css } from  'aphrodite';

function PromoHeading(props) {
  return (
    <div className={css(styles.header)}>
      <div className={css(subHeader.container)}>
        <h1>Heading</h1>
        <h2>{props.heading}</h2>
        <h3>{props.callToAction}</h3>
      </div>
    </div>
  )
}

export default PromoHeading;

const styles = StyleSheet.create({
  header: {
     background: "gray",
  }
})

const subHeader = StyleSheet.create({
  container: {
    background: "skyblue",
    width: "80%",
    maxWidth: "780px",
    margin: "0 auto",
  }
})