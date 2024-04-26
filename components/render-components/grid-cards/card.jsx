

import Image from 'next/image';
import { IMAGE_URL } from '../../../lib/constants';
import styles from './grid-card.module.css';
export const Card = ({ gridCard }) => {
    console.log(gridCard, "gridcard");
    const imgSrc = gridCard?.field_card_image?.field_media_image?.uri?.url || '';
    return (
        <div className={`${styles.card}`}>
            <Image
                src={IMAGE_URL + imgSrc}
                width="526"
                height="400"
                className={`${styles.card_image}`}
                alt="image page"
            />
            <h4 className={`medium-1`}>{gridCard.field_card_title}</h4>
            <div className={`${styles.card_description}`}
                dangerouslySetInnerHTML={{
                    __html: gridCard.field_card_description.value,
                }}>
            </div>
            <div className={`${styles.link}`}>
                <a href="{gridCard.field_card_link.uri}">{gridCard.field_card_link.title}</a>
            </div>
        </div>
    );
};

export default Card;
