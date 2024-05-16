import { Container } from "react-bootstrap";
import styles from './left-text.module.css';

export const LeftText = ({ component }) => {
    return (
        <Container>
            <p className={styles["fda-approve"]}>{component.field_left_paragraph}</p>
            <h3 class={`${styles["left-title"]} medium-1`}>{component.field_left_text}</h3>
        </Container>
    );
};

export default LeftText;