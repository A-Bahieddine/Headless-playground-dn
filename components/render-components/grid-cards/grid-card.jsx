import styles from './grid-card.module.css';
import Card from  './card';
export const Grid = ({ component }) => {
    console.log(component,"Grid");
    return (
        <section className={`${styles.cards}`}>
            <div className="container">
                <div className={`row justify-content-around`}>
                    {component.field_card.map((card) => {
                        
                        <div key={card.id} className="col-lg-6 col-12">
                            <Card card={card} />
                        </div>
                    })}
                    
                    
                </div>
            </div>
        </section>
    );
};

export default Grid;
