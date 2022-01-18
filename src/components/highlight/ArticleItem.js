export default function ArticleItem(props) {
    return (
        <div className="item item-article">
            <h3><a href="/some/valid/uri">{props.title}</a></h3>
            <p className="views">Прочтений: {props.views}</p>
        </div>
    )
};
