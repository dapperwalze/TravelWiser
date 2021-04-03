export const MainArticle = (props) => {
  return (
    <div className="main_article">
      <div>
        <img
          className="main_article_header_image"
          alt={props.alt}
          src={props.src}
        ></img>
      </div>
      <div className="article_information">
        <h2 className="article_title">{props.title}</h2>
        <p className="article_description">
          {props.description}{" "}
          <a className="read_more_link" href={props.url}>
            Read more
          </a>
        </p>
        <h4 className="article_author">@{props.author}</h4>
      </div>
    </div>
  );
};
