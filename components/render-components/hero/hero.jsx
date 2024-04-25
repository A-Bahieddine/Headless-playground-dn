import Image from 'next/image';
import { IMAGE_URL } from '../../../lib/constants';
import styles from './hero.module.css';
export const Hero = ({ component }) => {
	const imgSrc = component?.field_image?.field_media_image?.uri?.url || '';
	return (
		<section
			className={styles.hero}
			style={{
				backgroundImage: `url('${component?.field_hero_background?.field_media_image.uri?.url}')`,
			}}
		>
			<div className="container">
				<div className={`row ${styles.row}`}>
					<div className="col-lg-6 col-12">
						<h1 className={`${styles.title} medium-1`}>
							{component.field_hero_title}
						</h1>

						<div
							dangerouslySetInnerHTML={{
								__html: component.field_hero_text.processed,
							}}
						></div>

						<div>
							{component.field_test_text}
						</div>
					</div>
					<div className="col-lg-6 col-12">
						<Image
							src={IMAGE_URL + imgSrc}
							width="450"
							height="450"
							alt="image page"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
