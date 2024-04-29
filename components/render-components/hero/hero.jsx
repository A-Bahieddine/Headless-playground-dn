import styles from './hero.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
export const Hero = ({ component }) => {
	return (
		<section className={`${styles.heroSection} hero`}>
			<Container>
				<Row>
					<div
						dangerouslySetInnerHTML={{
							__html: component.field_hero_text.processed,
						}}
					></div>
				</Row>
			</Container>
		</section>
	);
};

export default Hero;
