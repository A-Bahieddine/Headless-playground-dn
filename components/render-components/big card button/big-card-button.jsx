import { Container } from 'react-bootstrap';
import styles from './big-card-button.module.css';
export const BigCardButton = ({ component }) => {
    return (
        <Container>
            <div className={styles["img-text-container"]}>
                <div className={styles["img"]}>
                    <div id={`${component.field_animtaion_id}`}></div>
                </div>
                <div className={styles["text"]}>
                    <h4 className="medium-1">{component.field_big_card_title}</h4>
                    <div dangerouslySetInnerHTML={{ __html: component.field_big_card_description.processed }}></div>
                    <div className={styles["text-link-wrapper"]}>
                        <h5 className={`${styles["left-text"]} medium-1`}>{component.field_big_card_subtitle}</h5>
                        <a href={`${component.field_big_card_link.uri}`}>{component.field_big_card_link.title}</a>
                    </div>
                </div>

            </div>
        </Container>
    );
};

export default BigCardButton;