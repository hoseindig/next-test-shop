import { Button, Card } from "react-bootstrap";
const CardBox = ({ item }) => {
  // style={{ width: "18rem" }}
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randNum = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randNum);
    return randNum;
  };
  const randomImage = () => {
    const defText = "images/product/" + getRandomInt(1, 6) + ".jepg";
    console.log(defText);
    return defText;
  };
  return (
    <Card>
      <Card.Img
        variant="top"
        src={`images/product/${getRandomInt(1, 6)}.jpeg`}
      />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.body}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default CardBox;
