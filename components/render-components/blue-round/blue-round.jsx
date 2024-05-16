import styles from './blue-round.module.css';
export const RightRound = ({ component }) => {
    const fadeDirection = component.field_fade_direction;
    const roundDirection = component.field_round_direction;
    return (
        <div className={`${styles["blue-line"]} ${styles[`${roundDirection}`]}`} data-aos={`${fadeDirection}`} data-aos-easing="ease-in-out" data-aos-offset="500" data-aos-duration="600">
            <div className={`${styles["blue-bg-left"]} ${styles["blue-bg"]}`}></div>
            <div className={`container ${styles["blue-bg"]}`}>
                <div className={styles["blue-content"]}>
                    <h1 dangerouslySetInnerHTML={{ __html: component.field_right_round_title }}></h1>
                    {component.field_right_round_subtitle && <h4>{component.field_right_round_subtitle}</h4>}
                </div>
            </div>
            <div className={`${styles["blue-bg"]} ${styles["blue-bg-right"]} ${styles["left"]}`}></div>
        </div>
    );
};

export default RightRound;
