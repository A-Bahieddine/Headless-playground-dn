
import { Container, Row, Col } from 'react-bootstrap';
import styles from './center-title-card.module.css';
import Image from 'next/image';
import { IMAGE_URL } from '../../../lib/constants';

export const CenterCard = ({ component }) => {
    console.log(IMAGE_URL,"img");
    return (
        <Container>
            <h3 className={`${styles["centered-title"]} medium-1`} dangerouslySetInnerHTML={{ __html: component.field_center_title }}>
            </h3>
            <Row className={styles["banners"]}>
                {component.field_center_title_card.map((item, index) => (
                    <Col lg={4} xs={12} key={index}>
                        <Image src={IMAGE_URL + item.field_center_card_image.field_media_image.uri.url} width={77} height={94} alt="same-way" />
                        <div className={styles["banner-title"]} dangerouslySetInnerHTML={{__html: item.field_center_card_desc.processed}}></div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default CenterCard;
