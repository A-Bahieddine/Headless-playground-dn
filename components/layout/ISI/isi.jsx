import styles from './isi.module.css';
import Container from 'react-bootstrap/Container';


export const ISI = ({ isiContent }) => {

    return (
        <section className={`${styles.isi_anchor}`}>
            <div className={`${styles.isi_section}`}>
                <div className={`${styles.isi_heading}`}>
                    <Container>
                        <h3>IMPORTANT SAFETY INFORMATION AND
                            INDICATIONS</h3>
                    </Container>
                </div>
                <div className={`${styles.isi_content}`}>
                    <Container>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: isiContent[0]?.body.processed,
                            }}>
                        </div>
                    </Container>
                </div>
            </div>
        </section>
    );
};

export default ISI;
