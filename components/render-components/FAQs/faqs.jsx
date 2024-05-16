import Container from 'react-bootstrap/Container';
import styles from './faqs.module.css';
export const Faqs = ({ component }) => {
    return (
            <Container>
                <div className="accordion" id="accordionExample">
                    {component.field_list.map((item, index) => (
                        <div className={styles["accordion-item"]} key={index + "-faq"}>
                            <h2 className={styles["accordion-header"]} id={`${item.field_faqs_heading}`}>
                                <button className={`accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target={`#${item.field_faqs_id}`} aria-expanded="false" aria-controls={`${item.field_faqs_id}`} dangerouslySetInnerHTML={{ __html: item.field_faqs_title }}>
                                </button>
                            </h2>
                            <div id={`${item.field_faqs_id}`} className={"accordion-collapse collapse"} aria-labelledby={`${item.field_faqs_heading}`} data-bs-parent="#accordionExample">
                                <div className={styles["accordion-body"]} dangerouslySetInnerHTML={{ __html: item.field_faqs_description.processed }}>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
    );
};

export default Faqs;
