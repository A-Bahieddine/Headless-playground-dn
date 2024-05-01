import Hero from './hero/hero';
import Grid from './grid-cards/grid-card';
import PagesHero from './pages-hero/pages-hero';
export const RenderComponents = ({ components }) => {
	console.log(components,"pages hero");
	return (
		<div className="main">
			{components.map((component) => {
				if (component.type == 'paragraph--hero') {
					return <Hero key={component.id} component={component} />;
				} 
				else if (component.type == 'paragraph--two_cards') {
					return <Grid key={component.id} component={component} />;
				}
				else if (component.type == 'paragraph--pages_hero') {
					return <PagesHero key={component.id} component={component} />;
				}
			})}
		</div>
	);
};

export default RenderComponents;
