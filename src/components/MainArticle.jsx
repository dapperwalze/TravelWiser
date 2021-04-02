export const MainArticle = (props) => {
  return (
    <div className="main-article">
      <div>
        <img className="article-image" alt={props.alt} src={props.src}></img>
      </div>
      <div className="article-information">
        <h2 className="article-title">{props.title}</h2>
        <p className="article-description">
          {props.description} <a href={props.url}>Read more</a>
        </p>
        <h4 className="article-author">@{props.author}</h4>
      </div>
    </div>
  );
};
