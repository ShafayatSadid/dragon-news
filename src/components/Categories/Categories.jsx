import { getCategories } from "@/lib/data";
import Link from "next/link";
const Categories = async ({ categoryId }) => {

    const categories = await getCategories();

    return (
        <div>
            <ul className="space-y-7.5 my-7.5">
                {
                    categories.map(category => <li className={`text-[#9F9F9F] font-medium text-[1.125rem]
                    ${categoryId == category.category_id && 'text-[#403F3F] bg-[#E7E7E7] rounded-md py-4 px-3'}`}

                        key={category.category_id}>
                        <Link href={`/category/${category.category_id}`}>{category.category_name}</Link>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Categories;

<div className="w-[267px] h-[64px] ">
    <p>National News</p>
</div>