import NewsCard from "./NewsCard";
import NoNews from "./NoNews";

const News = ({ newsByCategory }) => {


    return (
        <div className="space-y-7.5">
            {
                newsByCategory.length > 0 ?newsByCategory.map(news => <NewsCard key={news._id} news={news}/>) : <NoNews/>
            }
        </div>
    );
};

export default News;

