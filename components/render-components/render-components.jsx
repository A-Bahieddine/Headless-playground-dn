import Hero from './hero/hero';
import Slider from './slider/slider';
import Grid from './grid-cards/grid-card';
export const RenderComponents = ({ components }) => {
	return (
		<div className="main">
			{components.map((component) => {
				if (component.type == 'paragraph--hero') {
					return <Hero key={component.id} component={component} />;
				} else if (component.type == 'paragraph--slider') {
					return <Slider key={component.id} component={component} />;
				}
				else if (component.type == 'paragraph--two_cards') {
					return <Grid key={component.id} component={component} />;
				}
			})}
		</div>
	);
};

export default RenderComponents;
