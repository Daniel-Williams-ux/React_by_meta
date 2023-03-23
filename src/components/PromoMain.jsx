import { StyleSheet, css } from 'aphrodite';

function PromoMain(props) {
  return (
    <div className={css(styles.main)}>
      <div className={css(subMain.container)}>
        <h1>Main</h1>
        <h2>{props.heading}</h2>
        <h3>{props.callToAction}</h3>
      </div>
    </div>
  )
}

export default PromoMain;

const styles = StyleSheet.create({
  main: {
    background: "gray",
  }
})

const subMain = StyleSheet.create({
    container: {
    background: "skyblue",
    width: "80%",
    maxWidth: "780px",
    margin: "0 auto",
  }
})