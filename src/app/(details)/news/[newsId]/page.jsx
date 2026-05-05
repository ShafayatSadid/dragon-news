import { getNewsDetailsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { BiLeftArrowAlt } from "react-icons/bi";

export const generateMetadata = async ({ params }) => { 
    const {newsId} = await params;
    const news = await getNewsDetailsById(newsId);
    return{
        title: news.title,
        description: news.details
    }
}

const NewsDetailsPage = async ({ params }) => {

    const { newsId } = await params;

    const news = await getNewsDetailsById(newsId);
    
    return (
        <div className="card w-full shadow-sm max-w-[849px] mx-auto my-7.5">

            {/* card body */}
            <div className="px-5 py-4">
                <Image
                    src={news.image_url} alt="Thimble"
                    width={789} height={411} />
                <h2 className="text-[1.5rem] font-bold mt-5 text-[#403F3F] ">{news.title}</h2>
                <p className="text-[1rem] text-[#706F6F]">{news.details}</p>

                <Link href={`/category/${news.category_id}`}>
                    <button className="btn mt-8 text-[1.25rem] font-medium text-white bg-red-600 "><BiLeftArrowAlt /> All news in this category</button>
                </Link>
            </div>



        </div>
    );
};

export default NewsDetailsPage;