import HomeLayout from "layouts/home/HomeLayout";
import BackgroundImg from "assets/images/curved-images/curved14.jpg";

const Homepage = () => {
  return (
    <HomeLayout
      title="DocuCraft - Your Ultimate API Documentation Solution"
      description="Are you tired of the hassle and complexity involved in documenting and publishing APIs? Look no further! Welcome to DocuCraft, your go-to web application designed to revolutionize the way you handle API documentation."
      image={BackgroundImg}
    ></HomeLayout>
  );
};

export default Homepage;
