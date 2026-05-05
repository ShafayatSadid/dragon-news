export const getCategories = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/news/categories')
    const data = await response.json();
    return data.data.news_category;
}

export const getNewsByCategory = async (category_id) => {

    const response = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)

    const newsData = await response.json();
    return newsData.data
}

export const getNewsDetailsById = async (newsId) => {

    const response = await fetch(`https://openapi.programming-hero.com/api/news/${newsId}`);
    const newsDetails = await response.json();

    return newsDetails.data[0]
}