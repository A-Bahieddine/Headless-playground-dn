import Image from 'next/image';
import { IMAGE_URL } from '../../../lib/constants';
import styles from './grid-card.module.css';
export const Card = ({ gridCard }) => {
	const imgSrc = gridCard?.field_card_image?.field_media_image?.uri?.url || '';
	return (
		<div className={styles['card-with-image'] + " card-with-image"}>
			<Image
				src={IMAGE_URL + imgSrc}
				width="526"
				height="400"
				alt="image page"
			/>
			<h4 className={`medium-1`}>{gridCard.field_card_title}</h4>
			<p
				dangerouslySetInnerHTML={{
					__html: gridCard.field_card_description.value,
				}}
			></p>
			<div className={styles['link-wrapper'] + " link-wrapper"}>
				{gridCard.field_card_link.map((link) => (
					<a key={`card-${link.id}`} href={link.uri.replace('internal:', '')}>
						{link.title}
					</a>
				))}
			</div>
		</div>
	);
};

export default Card;
