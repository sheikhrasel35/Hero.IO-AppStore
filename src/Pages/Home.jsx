import { useEffect } from "react";
import MainBody from "../components/MainBody";
import TrendingApps from "../components/TrendingApps";

const Home = () => {
  useEffect(() => {
    document.title = "Hero.IO - Home";
  }, []);

  return (
    <div>
      <MainBody />
      <TrendingApps />
    </div>
  );
};

export default Home;
