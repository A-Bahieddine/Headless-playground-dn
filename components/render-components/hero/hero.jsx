import styles from './hero.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
export const Hero = ({ component }) => {
	console.log(component, "main")
	return (
		<section className={`${styles.hero_section}`}>
			<Container>
				<Row>
					{/* <div
						dangerouslySetInnerHTML={{
							__html: component.field_hero_text.processed,
						}}>
					</div> */}
					<h3>
						<span className={`${styles.yellow}`}>WYOST<sup>®</sup></span>: The <span className={`${styles.yellow}`}>FIRST</span> <span className={`${styles.pink}`}>[</span>and <span className={`${styles.yellow}`}>ONLY</span><span className={`${styles.pink}`}>]</span><span className={`${styles.yellow}`}> </span><span className={`${styles.white}`}>bone-targeting biosimilar </span><span className={`${styles.yellow}`}>interchangeable </span><span className={`${styles.white}`}>with Xgeva<sup>®</sup> (denosumab)</span>
					</h3>
				</Row>
			</Container>
		</section>
	);
};

export default Hero;
