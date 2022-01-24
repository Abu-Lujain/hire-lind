import Jobs from "../../components/jobs/Jobs";
import WelcomeMsg from "../../components/welcome/WelcomeMsg";

const HomeScreen = () => {
  return (
    <div className=" home row ">
      {/* <SideBar /> */}
      {/* <div className="sidebar  col-md-2 d-sm-none d-none d-md-block  "></div> */}

      <Jobs />
      <WelcomeMsg />
    </div>
  );
};

export default HomeScreen;
