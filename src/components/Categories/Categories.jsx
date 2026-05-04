import Link from "next/link";

const getCategories = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/news/categories')
    const data = await response.json();
    return data.data.news_category;
}

const Categories = async () => {

    const categories = await getCategories();
    console.log('categories: ', categories)
    return (
        <div>
            <ul className="space-y-7.5 my-7.5">
                {
                    categories.map(category => <li className="text-[#9F9F9F] font-medium text-[1.125rem]" key={category.category_id}>
                        <Link href={`/category/${category.category_id}`}>{category.category_name}</Link>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Categories;