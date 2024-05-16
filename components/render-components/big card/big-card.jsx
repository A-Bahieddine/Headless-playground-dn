import { Container } from "react-bootstrap";
import styles from './big-card.module.css';

export const BigCard = ({ component }) => {
    return (
        <Container>
            <p className={styles["prevent-serious"]}>{component.field_card_above_description}</p>
            <div className={styles["big-card"]}>
                {component.field_animtated_id && <div className={styles["img"]}>
                    <div id={`${component.field_animtated_id}`}></div>
                </div>}
                <div className={styles["list"]} dangerouslySetInnerHTML={{ __html: component.field_big_card_content.processed }}>
                </div>
            </div>
        </Container>
    );
};

export default BigCard;