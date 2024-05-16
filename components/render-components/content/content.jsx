
import Container from 'react-bootstrap/Container';
import styles from './content.module.css';
export const Content = ({ component }) => {
    return (
        <Container>
            <div className={styles["content"]} dangerouslySetInnerHTML={{ __html: component.field_section_content.processed }}>

            </div>
        </Container>
    );
};

export default Content;
