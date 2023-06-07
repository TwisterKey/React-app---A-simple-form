import "./Card.css";

const Card = (props) => {
  //folosesc classes ca sa adaug css-ul din card si css-ul din cealalta componenta, folosind props.className
  //sa nu se uite spatiul de la card, ca asa le combina si nu mai functioneaza css-ul
  const classes = "card " + props.className;
  //props.children ia HTML dintre <Card></Card>
  return <div className={classes}>{props.children}</div>;
};

export default Card;
