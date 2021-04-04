export const SideArticle = (props) => {
  return (
    <div className="side_article">
      <div>
        <img
          className="side_article_header_image"
          alt={props.alt}
          src={props.src}
        ></img>
      </div>
      <div className="article_information side_article_details_block">
        <h2 className="article_title side_article_title">
          <a className="side_article_link" href={props.url}>
            {props.title}
          </a>
        </h2>
        <h4 className="article_author">@{props.author}</h4>
      </div>
    </div>
  );
};
