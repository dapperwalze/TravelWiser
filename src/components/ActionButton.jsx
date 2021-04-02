export const ActionButton = (props) => {
  return (
    <a className={props.className} href={props.href}>
      {props.text}
    </a>
  );
};
