import './FormCheckout.css';

const FormCheckout = () => {
  return (
    <div className="billingform">
      <form className="billingInput">
        <label htmlFor="fullname">full name:</label>
        <input
          id="fullname"
          type="text"
          placeholder="enter your full name here!"
        />
        <label htmlFor="email">email:</label>
        <input id="email" type="email" placeholder="enter your email here!" />
        <label htmlFor="phonenumber">phone number:</label>
        <input
          id="phonenumber"
          type="tel"
          placeholder="enter your phone number here!"
        />
        <label htmlFor="address">address:</label>
        <input
          id="address"
          type="text"
          placeholder="enter your address here!"
        />
      </form>
      <button className="btnOrder">Place order</button>
    </div>
  );
};

export default FormCheckout;
