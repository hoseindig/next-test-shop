import CardBox from "@/components/card";
import { Row, Col, Container } from "react-bootstrap";
// import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useId } from "react";
const Product = ({ cards }) => {
  console.log(cards);
  /* const list = [
    {
      title: "Orange",
      img: "/images/fruit-1.jpeg",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "/images/fruit-2.jpeg",
      price: "$3.00",
    },
    {
      title: "Cherry",
      img: "/images/fruit-3.jpeg",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "/images/fruit-4.jpeg",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "/images/fruit-5.jpeg",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "/images/fruit-6.jpeg",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "/images/fruit-7.jpeg",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
      price: "$12.20",
    },
  ];*/
  return (
    <>
      <Container>
        <Row>
          {cards &&
            cards.map((item, index) => {
              return (
                <Col md={3} key={index} className="product-item">
                  <CardBox item={item}></CardBox>
                </Col>
              );
            })}
        </Row>
      </Container>
      {/* <Grid.Container gap={2} justify="flex-start">
        {list.map((item, index) => (
          <Grid xs={6} sm={3} key={index}>
            <Card isPressable>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src={"https://nextui.org" + item.img}
                  objectFit="cover"
                  width="100%"
                  height={140}
                  alt={item.title}
                />
              </Card.Body>
              <Card.Footer css={{ justifyItems: "flex-start" }}>
                <Row wrap="wrap" justify="space-between" align="center">
                  <Text b>{item.title}</Text>
                  <Text
                    css={{
                      color: "$accents7",
                      fontWeight: "$semibold",
                      fontSize: "$sm",
                    }}
                  >
                    {item.price}
                  </Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container> */}
    </>
  );
};

export default Product;

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data.length);
  return { props: { cards: data ? data : null } };
}
