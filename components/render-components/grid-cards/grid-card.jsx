import styles from './grid-card.module.css';
import Card from './card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export const Grid = ({ component }) => {
    const gridNum = 12 / component.field_grid_number;
    return (
        <section className={`${styles.cards}`}>
            <Container>
                <Row>
                    {component.field_card.map((card) => (
                        <Col key={card.id} lg={`${gridNum}`} md={6} sm={12}>
                            <Card gridCard={card} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section >
    );
};

export default Grid;
