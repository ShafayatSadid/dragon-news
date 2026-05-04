import Categories from "@/components/Categories/Categories";

const HomePage = () => {
  return (
    <div className="grid grid-cols-12 gap-5 max-w-[1140px] mx-auto py-[80px]">

      <div className="col-span-3">

        {/* heading */}
        <h2 className="text-[1.125rem] font-semibold text-[#403F3F]">All Categories</h2>

        {/* title */}
        <div className="w-[267px] h-[64px] bg-[#E7E7E7] rounded-md mt-5 text-[1.125rem] font-semibold text-[#403F3F] flex justify-center items-center">
          <p>National News</p>
        </div>

        <Categories />
      </div>

      <div className="col-span-6">
        <h2 className="text-3xl bg-purple-100 font-bold">All News</h2>
      </div>

      <div className="col-span-3">
        <h2 className="text-3xl bg-yellow-100 font-bold">Social icons</h2>
      </div>
    </div>
  );
};

export default HomePage;