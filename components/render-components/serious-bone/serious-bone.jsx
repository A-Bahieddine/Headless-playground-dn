import { Container } from "react-bootstrap";
import styles from './serious-bone.module.css';
import Image from 'next/image';
import { IMAGE_URL } from '../../../lib/constants';
export const SeriousBone = ({ component }) => {
    const leftImage = component.field_left_image.field_media_image.uri.url;
    const middleImage = component.field_middle_image.field_media_image.uri.url;
    const rightImage = component.field_right_image.field_media_image.uri.url;
    return (
        <section className={styles["serious-bone"]} data-aos="fade-left"
            data-aos-duration="500" data-aos-offset="280"
            data-aos-delay="500">
            <Container>
                <div className={styles["serious-bone-wrapper"]}>
                    <h4 className="medium-1" data-aos="fade-left"
                        data-aos-delay="1000" data-aos-duration="500">{component.field_left_content}</h4>
                    <div className={`${styles["images-container"]} d-flex`}>
                        <Image src={IMAGE_URL + leftImage} alt="bone"
                            data-aos-delay="1500" data-aos="fade-left"
                            data-aos-duration="300" width={84} height={84} />
                        <Image src={IMAGE_URL + middleImage} alt="spine"
                            data-aos-delay="1800" data-aos="fade-left"
                            data-aos-duration="300" width={84} height={84} />
                        <Image src={IMAGE_URL + rightImage} alt="radiation"
                            data-aos-delay="2100" data-aos="fade-left"
                            data-aos-duration="300" width={84} height={84} />
                    </div>
                    <p data-aos="fade-left" data-aos-delay="2400"
                        data-aos-duration="300">{component.field_right_content}</p>
                </div>
            </Container>
        </section>
    );
};

export default SeriousBone;
