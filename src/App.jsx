import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import SectionTitle from "./components/SectionTitle/SectionTitle";

function App() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <Header />
      <Banner />
      <SectionTitle
        title="Our Receipe"
        description="Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. "
      />
    </div>
  );
}

export default App;
