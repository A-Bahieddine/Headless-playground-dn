import { Container, Row, Col } from 'react-bootstrap';
import styles from './biosimilar-card.module.css';
import Image from 'next/image';
import { IMAGE_URL } from '../../../lib/constants';
export const BiosiliarCard = ({ component }) => {
    return (
        <Container>
            <div className={styles["outstanding-biosimilar-card"]}>
                <Row>
                    <Col lg={6} xs={12}>
                        <h4 className={`${styles["card-title"]} medium-1`}>
                            {component.field_biosimilar_title}
                        </h4>
                        <p className={styles["card-subtitle"]}>
                            {component.field_biosimilar_subtitle}
                        </p>
                    </Col>
                    <Col lg={6} xs={12}>
                        {component.field_biosimilar_card.map((item) => (
                            <div className={styles["outstanding-biosimilar-right"]}>
                                <div className={styles["left"]} data-aos="fade-right" data-aos-duration="500" dangerouslySetInnerHTML={{ __html: item.field_left_content_card.processed }}>
                                </div>
                                <div className={styles["center"]} data-aos="fade-right" data-aos-delay={`${item.field_center_delay}`} data-aos-duration="500">
                                    <Image width={55} height={55} src={IMAGE_URL + item.field_center_arrow.field_media_image.uri.url} alt="round-arrow" />
                                </div>
                                <div className={styles["right"]} data-aos="fade-right" data-aos-delay={`${item.field_right_delay}`} data-aos-duration="500" dangerouslySetInnerHTML={{ __html: item.field_right_content_card.processed }}>
                                </div>
                            </div>
                        ))}
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default BiosiliarCard;