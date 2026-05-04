import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    return (
        <div className='bg-gray-200 flex justify-between items-center max-w-[1140px] mx-auto mt-[30px] p-4'>

            <button className="btn bg-pink-500 text-white">Latest News</button>
            <Marquee pauseOnHover={true}>
                <p className='text-black'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur vitae laboriosam explicabo, temporibus itaque molestias ducimus voluptas saepe dolorum doloremque maiores. Quidem accusamus laboriosam facere fugit exercitationem quae itaque dolore molestiae ea tempora eveniet a deleniti, magni nihil sed praesentium laudantium officia tempore minus minima? Quos sed cum nostrum aliquid necessitatibus magni esse! Nisi aperiam commodi nostrum distinctio non asperiores odit in vel exercitationem, architecto quia doloremque recusandae veritatis accusamus repellendus consequuntur, facilis accusantium libero quae? Beatae non sunt accusamus, debitis unde laudantium adipisci ipsum repellendus cum in. Earum distinctio, ut saepe neque nemo maxime facere alias voluptas voluptate nihil sit quo aliquid rem minima, obcaecati sed, qui accusantium. Dolore animi laborum quidem, similique recusandae amet mollitia voluptate necessitatibus. Inventore, quisquam facere.</p>
            </Marquee>
        </div>
    );
};

export default BreakingNews;