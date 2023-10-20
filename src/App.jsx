import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className="paddingX flexCenter">
      <div className="boxWidth">
        <Navbar />
      </div>
    </div>
    <div className="bg-primary flexStart">
      <div className="boxWidth">
        <Hero />
      </div>
    </div>
    <div className="bg-primary paddingX flexStart">
      <div className="boxWidth">
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
