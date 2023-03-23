import PromoHeading from './PromoHeading';
import PromoMain from './PromoMain';
import PromoFooter from './PromoFooter';

const data = {
  heading: "99% all items!",
  callToAction: "Everything must go!",
}

function Promo() {
  return(
    <div>
      <PromoHeading
        heading = {data.heading}
        callToAction = {data.callToAction}
      />
      <PromoMain 
        heading = {data.heading}
        callToAction = {data.callToAction}
      />  
      <PromoFooter
        heading = {data.heading}
        callToAction = {data.callToAction}
      />  
    </div>
  )
}

export default Promo;