import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import Image from 'next/image';
import { IMAGE_URL } from '../../../lib/constants';
import styles from './middle-image.module.css';

export const MiddleImage = ({ component }) => {
    return (
        <Container>
            <div className={styles["image-container"]}>
                <Row className={styles["middle-image-container"]}>
                    <Col lg={4} xs={12} className={styles["left-section"]}>
                        <h3 className={`${styles["title"]} medium-1`} dangerouslySetInnerHTML={{ __html: component.field_left_title.processed }}></h3>
                        <div className={styles["subtitle"]} dangerouslySetInnerHTML={{ __html: component.field_left_description.processed }}></div>
                    </Col>
                    <Col lg={4} xs={12} className={styles["right-section"]}>
                        <h3 className={`${styles["title"]} medium-1`} dangerouslySetInnerHTML={{ __html: component.field_right_title.processed }}></h3>
                        <div className={styles["subtitle"]} dangerouslySetInnerHTML={{ __html: component.field_right_description.processed }}>
                        </div>
                    </Col>
                </Row>
                <div className={styles["middle-img"]}>
                    <Image src={IMAGE_URL + component.field_card_middle_image.field_media_image.uri.url} width={323} height={425} alt="middle-image" />
                </div>
            </div>
        </Container>
    );
};

export default MiddleImage;