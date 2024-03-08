import Logochat from "../../assets/icon-chat.svg";
import Logomoney from "../../assets/icon-money.svg";
import Logosecurity from "../../assets/icon-security.svg";
import Feature from "../Feature";

function Features() {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      <Feature
        img={Logochat}
        title="You are our #1 priority"
        alt="logo chat"
        content="Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes."
      />
      <Feature
        img={Logomoney}
        title="More savings means higher rates"
        alt="logo money"
        content="The more you save with us, the higher your interest rate will be!"
      />
      <Feature
        img={Logosecurity}
        title="Security you can trust"
        alt="logo security"
        content="We use top of the line encryption to make sure your data and money
            is always safe."
      />
    </section>
  );
}
export default Features;
