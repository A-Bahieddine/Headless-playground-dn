export const Slider = ({ component }) => {
	return (
		<section className="Slider">
			<div className="container">
				<h2>Slider Component</h2>
				{component?.field_slide.map((slide) => (
					<div key={slide.id}></div>
				))}
			</div>
		</section>
	);
};

export default Slider;
