import styles from './grid-card.module.css';
import Card from './card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export const Grid = ({ component }) => {
    const gridNum = 12 / component.field_grid_number;
    return (
        <Container>
            <h3 className={`${styles["left-title"]} medium-1`}>{component.field_title}</h3>
            <Row>
                {component.field_card.map((card) => (
                    <Col key={card.id} lg={`${gridNum}`} xs={12}>
                        <Card gridCard={card} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Grid;
