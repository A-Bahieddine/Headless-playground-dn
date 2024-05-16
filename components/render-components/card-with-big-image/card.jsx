

import Image from 'next/image';
import { IMAGE_URL } from '../../../lib/constants';
import styles from './card-with-big-image.module.css';
export const LeftCard = ({ RightImageCard }) => {
    const imgSrc = RightImageCard.field_right_big_image_card_img?.field_media_image.uri.url;
    return (
        <div className={styles["img-text-container"]} data-aos="fade-left"
            data-aos-offset={550} data-aos-duration={500}>
            <div className={styles["img"]}>
                <Image
                    src={IMAGE_URL + imgSrc}
                    width={96}
                    height={83}
                    alt="Card Image"
                />
            </div>
            <div className={styles["text"]}>
                <h4 className={`medium-1`}>
                    {RightImageCard.field_right_big_image_card_title}
                </h4>
                <div dangerouslySetInnerHTML={{ __html: RightImageCard.field_right_big_image_card_descr?.processed }}></div>
            </div>
        </div >
    );
};

export default LeftCard;
