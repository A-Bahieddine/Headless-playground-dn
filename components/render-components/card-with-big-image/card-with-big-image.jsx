import styles from './card-with-big-image.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IMAGE_URL } from '../../../lib/constants';
import Image from 'next/image';
import LeftCard from './card';
export const RightImageCard = ({ component }) => {
    return (
        <Container>
            <div className={styles["head-wrapper"]}>
                <h3 className={`${styles["left-title"]} medium-1`}>
                    {component.field_right_image_card_title}
                </h3>
                <p className={styles["left-subtitle"]}>{component.field_right_image_card_subtitle}</p>
            </div>
            <Row className={styles["switch-info"]}>
                <Col lg={8} xs={12}>
                    {component.field_right_image_card.map((card) => (
                        <LeftCard key={card.id} RightImageCard={card} />
                    ))}
                    <div className={`${styles["content"]} d-none d-lg-block`} dangerouslySetInnerHTML={{ __html: component.field_content.processed }}>
                    </div>
                </Col>

                <Col lg={4} xs={12}>
                    <div className={styles["right-dots"]}>
                        <Image
                            className={`${styles["big-image"]} d-lg-block d-none`}
                            src={IMAGE_URL + component.field_right_big_image.field_media_image?.uri.url}
                            width="560"
                            height="805"
                            alt="big-image"
                        />
                        <Image
                            className={`${styles["switching-xgeva-mobile"]} d-block d-lg-none`}
                            src={IMAGE_URL + component.field_right_big_image_mobile.field_media_image?.uri.url}
                            width="385"
                            height="435"
                            alt="mobile-image"
                        />
                    </div>
                    <div className={`${styles["content"]} ${styles["mobile-content"]} d-lg-none d-block`} dangerouslySetInnerHTML={{ __html: component.field_content.processed }}>
                    </div>
                </Col>
            </Row>
        </Container >
    );
};

export default RightImageCard;
