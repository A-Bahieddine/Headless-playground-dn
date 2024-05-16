import Hero from '../hero/hero';
import Grid from '../grid-cards/grid-card';
import PagesHero from '../pages-hero/pages-hero';
import RightRound from '../blue-round/blue-round';
import SeriousBone from '../serious-bone/serious-bone'
import LeftText from '../left-text/left-text';
import BigCard from '../big card/big-card';
import RightImageCard from '../card-with-big-image/card-with-big-image';
import AnimationCards from '../animation-cards/animation-cards';
import MiddleImage from '../Middle Image/middle-image';
import Faqs from '../FAQs/faqs';
import Content from '../content/content';
import OneSource from '../one-source/one-source';
import LeftTitle from '../Left Title/left-title';
import BiosiliarCard from '../Biosimilar-card/Biosimilar-card';
import CenterCard from '../center-title-card/center-title-card';
import BigCardButton from '../big card button/big-card-button';
import TalkingDots from '../talking-dots/talking-dots';
import BiosimilarDots from '../Biosimilar Dots/biosimilar-dots';
import HelpfulDots from '../Helpful Dots/helpful-dots';

export const Section = ({ components }) => {
    return (
        <section className={`${components.field_section_classes}`} id={`${components.field_section_id}`}>
            {components.field_section_components.map((component) => {
                if (component.type == 'paragraph--hero') {
                    return <Hero key={component.id} component={component} />;
                }
                else if (component.type == 'paragraph--two_cards') {
                    return <Grid key={component.id} component={component} />;
                }
                else if (component.type == 'paragraph--pages_hero') {
                    return <PagesHero key={component.id} component={component} />;
                }
                else if (component.type == 'paragraph--right_round') {
                    return <RightRound key={component.id} component={component} />;
                }
                else if (component.type == 'paragraph--serious_bone') {
                    return <SeriousBone key={component.id} component={component} />;
                }
                else if (component.type == 'paragraph--left_title_and_paragraph') {
                    return <LeftText key={component.id} component={component} />;
                }
                else if (component.type == 'paragraph--big_card') {
                    return <BigCard key={component.id} component={component} />;
                }
                else if (component.type == 'paragraph--right_image_card') {
                    return <RightImageCard key={component.id} component={component} />;
                }
                else if (component.type == 'paragraph--animation_cards') {
                    return <AnimationCards key={component.id} component={component} />;
                }
                else if (component.type == 'paragraph--middle_image') {
                    return <MiddleImage key={component.id} component={component} />;
                }
                else if (component.type == 'paragraph--faqs') {
                    return <Faqs key={component.id} component={component} />;
                }
                else if (component.type == 'paragraph--content') {
                    return <Content key={component.id} component={component} />;
                }
                else if (component.type == 'paragraph--one_source') {
                    return <OneSource key={component.id} component={component} />;
                }
                else if (component.type == 'paragraph--section') {
                    return <Section key={component.id} component={component} />;
                }
                else if (component.type == 'paragraph--left_title') {
                    return <LeftTitle key={component.id} component={component} />;
                }
                else if (component.type == 'paragraph--biosimilar') {
                    return <BiosiliarCard key={component.id} component={component} />;
                }
                else if (component.type == 'paragraph--center_title') {
                    return <CenterCard key={component.id} component={component} />;
                }
                else if (component.type == 'paragraph--big_card_button') {
                    return <BigCardButton key={component.id} component={component} />;
                }
                else if (component.type == 'paragraph--talking_wyost_left_and_right_dot') {
                    return <TalkingDots key={component.id} component={component} />;
                }
                else if (component.type == 'paragraph--biosimilar_dots') {
                    return <BiosimilarDots key={component.id} component={component} />;
                }
                else if (component.type == 'paragraph--helpful_dots') {
                    return <HelpfulDots key={component.id} component={component} />;
                }
            })}
        </section>
    );
};

export default Section;
