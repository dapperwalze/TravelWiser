export const SideArticle = (props) => {
  return (
    <div className="side-article">
      <div>
        <img
          className="side-article-image"
          alt={props.alt}
          src={props.src}
        ></img>
      </div>
      <div className="article-information side-article-information">
        <h2 className="article-title">
          <a className="side-article-title" href={props.url}>
            {props.title}
          </a>
        </h2>
        <h4 className="article-author">@{props.author}</h4>
      </div>
    </div>
  );
};
