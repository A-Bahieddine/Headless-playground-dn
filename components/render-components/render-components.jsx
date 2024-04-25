import Hero from './hero/hero';
import Slider from './slider/slider';
export const RenderComponents = ({ components }) => {
	console.log(components);
	return (
		<div className="main">
			{components.map((component) => {
				if (component.type == 'paragraph--hero') {
					return <Hero key={component.id} component={component} />;
				} else if (component.type == 'paragraph--slider') {
					return <Slider key={component.id} component={component} />;
				}
			})}
		</div>
	);
};

export default RenderComponents;
