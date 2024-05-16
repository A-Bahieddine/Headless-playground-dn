import { Container } from "react-bootstrap";
import styles from './left-title.module.css';

export const LeftTitle = ({ component }) => {
    return (
        <Container>
            <div className={styles["head-wrapper"]}>
                <h3 className={`${styles["left-title"]} medium-1`}>{component.field_left_title_text}</h3>
                <div className={styles["left-subtitle"]} dangerouslySetInnerHTML={{__html: component.field_left_description_text.processed}}></div>
            </div>
        </Container>
    );
};

export default LeftTitle;