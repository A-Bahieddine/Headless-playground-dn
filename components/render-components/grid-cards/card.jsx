

import Image from 'next/image';
import { IMAGE_URL } from '../../../lib/constants';
import styles from './grid-card.module.css';
export const Card = ({ card }) => {
    const imgSrc = card?.field_image?.field_media_image?.uri?.url || '';
    console.log(card,"Card");
    return (
        <div>
            {/* <Image
                src={IMAGE_URL + imgSrc}
                width="450"
                height="450"
                alt="image page"
            />
            <h4 className={`medium-1`}>{card.field_card_title}</h4>
            <p>{card.field_card_description}</p>
            <div className={`${styles.link}`}>
                <a>{card.field_card_link}</a>
            </div> */}
        {
            console.log(card,"wewew")
        }
        
        </div>
    );
};

export default Card;
