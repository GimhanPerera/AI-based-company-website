import Heading from "./Heading";
import PricingList from "./PricingList";
import Section from "./Section";
import { LeftLine, RightLine } from "./design/Pricing";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">

        <Heading
          title="Choose Your Plan Today"
          text="Enjoy all the features and benefits of our premium plans"
        />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center mt-10">
          <a
            className="text-n-2 font-bold uppercase border-b"
            to="/pricing"
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
