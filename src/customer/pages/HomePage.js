import { mens_kurta } from "../../data/mens_kurta";
import MainCarousel from "../components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../components/HomeSectionCarousel/HomeSectionCarousel";

const HomePage = () => {
  return (
    <div>
      <MainCarousel />

      <div className="py-20 space-y-10 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shoes"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shirt"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Saree"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Women's dress"}/>
      </div>
    </div>
  );
};

export default HomePage;
