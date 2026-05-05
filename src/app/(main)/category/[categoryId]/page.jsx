import Categories from '@/components/Categories/Categories';
import News from '@/components/News/News';
import Social from '@/components/Social/Social';
import { getNewsByCategory } from '@/lib/data';
import React from 'react';

const NewsByCategory = async({params}) => {

    const {categoryId} = await params;
    

    const newsByCategory = await getNewsByCategory(categoryId)
    

    return <div className="grid grid-cols-12 gap-5 max-w-[1140px] mx-auto py-[80px]">

      {/* All categories */}
      <div className="col-span-3">
        <h2 className="text-[1.125rem] font-semibold text-[#403F3F]">All Categories</h2>
        <Categories categoryId={categoryId} />
      </div>

      {/* All news */}
      <div className="col-span-6"> 
        <h2 className="text-[1.125rem] font-semibold text-[#403F3F] mb-5">Dragon News Home</h2>
        <News newsByCategory={newsByCategory}/>
      </div>

      {/* Social login */}
      <div className="col-span-3">
        <h2 className="text-[1.125rem] font-semibold text-[#403F3F]">Login with</h2>

        <Social/>
      </div>
    </div>
};

export default NewsByCategory;