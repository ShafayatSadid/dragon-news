import Image from "next/image";
import Link from "next/link";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";

const NewsCard = ({ news }) => {
    
    return (
        <div className="card w-full shadow-sm ">

            {/* card head */}
            <div className="flex justify-between items-center bg-[#F3F3F3] px-5 py-4">
                {/* author */}
                <div className="flex gap-1.5 items-center">
                    <Image
                        src={news.author?.img} alt="Author"
                        width={40} height={40}
                        className="rounded-full" />

                    <div>
                        <h2 className="font-semibold">{news.author?.name}</h2>
                        <p className="text-xs">{news.author?.published_date}</p>
                    </div>
                </div>
                {/* share and save icon */}
                <div className="flex items-center gap-2.5">
                    <CiBookmark />
                    <CiShare2 />

                </div>
            </div>

            {/* card body */}
            <div className="px-5 py-4">
                <h2 className="text-[1.125rem] font-bold mb-5">{news.title}</h2>

                <Image
                    src={news.image_url} alt="Thimble"
                    width={518} height={262} />

                <p className="text-[1rem] text-[#706F6F] mt-8 line-clamp-4 ">{news.details}</p>

                <Link href={`/news/${news._id}`}>
                    <p className="text-[1rem] font-bold text-[#FF8C47] ">Read More</p>
                </Link>
            </div>
            {/* card foot */}
            <div className="mx-5 py-5 border-t border-t-[#E7E7E7] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                    <div className="text-[1.5rem] flex gap-1.5 items-center text-[#FF8C47]">
                        <div><FaStar /></div>
                        <div><FaStar /></div>
                        <div><FaStar /></div>
                        <div><FaStar /></div>
                    </div>

                    <div className="text-[1rem] text-[#706F6F] font-medium">{news.rating.number}</div>
                </div>

                <div className="flex items-center gap-2.5 text-[1rem] font-medium text-[#706F6F] ">
                    <IoMdEye />
                    <span>{news.total_view}</span>
                </div>
            </div>

        </div>
    );
};

export default NewsCard;