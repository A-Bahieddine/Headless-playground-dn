import styles from './animation-cards.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AnimatedCard from './animated-card';
export const AnimationCards = ({ component }) => {
    return (
        <Container>
            <div className={styles["head-wrapper"]}>
                {component.field_animation_cards_subtitle && <p className={styles["fda-approve"]}>{component.field_animation_cards_subtitle}</p>}
                <h3 className={`${styles["left-title"]} medium-1`}>
                    {component.field_animation_cards_title}
                </h3>
            </div>
            <Row>
                {component.field_card_list.map((card) => (
                    <Col key={card.id} lg={4} xs={12}>
                        <AnimatedCard AnimationCards={card} />
                    </Col>
                ))}
            </Row>
        </Container >
    );
};

export default AnimationCards;
