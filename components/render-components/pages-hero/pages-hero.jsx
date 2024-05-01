import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './pages-hero.module.css';
import Image from 'next/image';
import { IMAGE_URL } from '../../../lib/constants';
export const PagesHero = ({ component }) => {
    const heroImg = component.field_hero_img.field_media_image.uri.url;
    console.log(component, 'selimmasdaddain');
    return (
        <section className={`${styles.heroSection} hero`}>
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <h1 className={styles.hero_title} dangerouslySetInnerHTML={{ __html: component.field_hero_title.processed }}>
                        </h1>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <Image
                            src={IMAGE_URL + heroImg}
                            width="765"
                            height="423"
                            alt="hero image"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default PagesHero;
