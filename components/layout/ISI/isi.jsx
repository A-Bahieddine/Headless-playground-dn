import Container from 'react-bootstrap/Container';
import Image from 'next/image';
import { IMAGE_URL } from '../../../lib/constants';
export const ISI = ({ isiContent }) => {
    return (
        <section className="isi-anchor">
            <div className="isi-section">
                <div className="isi-heading">
                    <Container>
                        <h3>IMPORTANT SAFETY INFORMATION AND
                            INDICATIONS</h3>
                    </Container>
                </div>
                <div className="isi-content">
                    <Container>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: isiContent[0]?.body.processed,
                            }}>
                        </div>
                        <div className="icon-moon-container" id="isi-trigger">
                            <span className="icon-plus">
                                <Image
                                    src={
                                        IMAGE_URL +
                                        isiContent[0]?.field_isi_icon.field_media_image.uri.url
                                    }
                                    width="14"
                                    height="12"
                                    alt="icon-plus"
                                />
                            </span>
                        </div>
                    </Container>
                </div>
            </div>
        </section>
    );
};

export default ISI;
