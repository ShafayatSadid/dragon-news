import { redirect } from "next/navigation";


const HomePage = () => {

  const defaultCategory = "01";
  redirect(`/category/${defaultCategory}`)
};

export default HomePage;