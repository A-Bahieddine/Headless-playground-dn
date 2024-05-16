import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './pages-hero.module.css';
import Image from 'next/image';
import { IMAGE_URL } from '../../../lib/constants';
export const PagesHero = ({ component }) => {
    const heroImg = component.field_hero_img.field_media_image.uri.url;
    const heroDots = '/hero-dots.svg';
    return (
        <section className={styles["hero"]}>
            <Container>
                <Row className={styles["row"]}>
                    <Col lg={6} sm={12}>
                        <h1 className={`${styles["hero-title"]} medium-1`} dangerouslySetInnerHTML={{ __html: component.field_hero_title.processed }}>
                        </h1>
                        <h5 className={`${styles["hero-subtitle"]} medium-1`} dangerouslySetInnerHTML={{__html: component.field_hero_subtitle.processed}}></h5>
                    </Col>
                    <Col className={styles["right-column"]} lg={6} sm={12}>
                        <Image
                            src={IMAGE_URL + heroImg}
                            width="765"
                            height="423"
                            alt="hero image"
                        />
                        <div className={styles["dots"]}>
                          <Image src={heroDots} width={127} height={402} alt="hero dots" />
                      </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default PagesHero;
