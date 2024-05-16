import { Container, Row, Col } from 'react-bootstrap';
import styles from './one-source.module.css';
import Image from 'next/image';
import { IMAGE_URL } from '../../../lib/constants';
export const OneSource = ({ component }) => {
    return (
        <Container>
            <div className={styles["head-wrapper"]}>
                <h3 className={`${styles["left-title"]} medium-1`}>
                    {component.field_one_source_tilte}
                </h3>
            </div>
            {component.field_big_card.map((card) => (
                <div className={styles["img-text-container"]} key={card}>
                    <div className={styles["img"]}>
                        <Image width={344} height={80} src={IMAGE_URL + card.field_one_source_big_card_img.field_media_image.uri.url} />
                    </div>
                    <div className={styles["text"]}>
                        <h4 className={`${styles["start-wyost"]} medium-1`}>{card.field_one_source_big_card_title}</h4>
                        <div dangerouslySetInnerHTML={{ __html: card.field_one_source_big_card_descri.processed }}></div>
                    </div>
                </div>
            ))}
            <Row className={styles["one-source-row"]}>
                {component.field_source_card.map((item) => (
                    <Col lg={4} xs={12} key={item} className={styles["columns"]}>
                        <div className={styles["card"]}>
                            <Image width={110} height={110} src={IMAGE_URL + item.field_card_img.field_media_image.uri.url} />
                            <h5 className={`${styles["title"]} medium-1`}>{item.field_one_source_card_title}</h5>
                            <div className={styles["subtitle"]} dangerouslySetInnerHTML={{ __html: item.field_one_source_card_subtitle.processed }}></div>
                            {item.field_one_source_card_link?.title && <a href={item.field_one_source_card_link?.uri} target="_blank">{item.field_one_source_card_link?.title}</a>}
                            <div className={styles["desc"]} dangerouslySetInnerHTML={{ __html: item?.field_one_source_card_desc?.value }}></div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default OneSource;
