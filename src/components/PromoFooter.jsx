import { StyleSheet, css } from 'aphrodite';

function PromoFooter(props) {
  return (
    <div className={css(styles.footer)}>
      <div className={css(subFooter.container)}>
        <h1>Footer</h1>
        <h2>{props.heading}</h2>
        <h3>{props.callToAction}</h3>
      </div>
    </div>
  )
}

export default PromoFooter;

const styles = StyleSheet.create({
  footer: {
    background: 'gray',
  }
})

const subFooter = StyleSheet.create({
  container: {
    background: "skyblue",
    width: "80%",
    maxWidth: "780px",
    margin: "0 auto",
  }
})