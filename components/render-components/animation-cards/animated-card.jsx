import styles from './animation-cards.module.css';

export const AnimatedCard = ({ AnimationCards }) => {
    return (
        <div className={styles["card"]}>
            <div id={`${AnimationCards.field_animtated_card_id}`}></div>
            <div dangerouslySetInnerHTML={{__html: AnimationCards.field_animtated_card_description?.processed}}></div>
        </div>
    );
};

export default AnimatedCard;
