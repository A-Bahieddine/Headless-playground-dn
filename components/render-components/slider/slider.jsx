import Slide from './slide';

export const Slider = ({ component }) => {
	return (
		<section className="Slider">
			<div className="container">
				<h2>Slider Component</h2>
				{component?.field_slide.map((slide) => (
					<Slide key={slide.id} slide={slide} />
				))}
			</div>
		</section>
	);
};

export default Slider;
