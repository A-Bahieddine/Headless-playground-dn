import styles from './isi.module.css';
import Container from 'react-bootstrap/Container';
import { useEffect } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { IMAGE_URL } from '../../../lib/constants';
const ISI_TRAY_HEIGHT_PX = 158;
export const ISI = ({ isiContent }) => {
    
    useEffect(() => {
        const handleScroll = () => {
            const isiAnchor = document.querySelector('.isi_anchor');
            const isiSection = document.querySelector('.isi_section');
            const iconPlus = document.querySelector('.icon_plus');
            // const iconMoonContainer = document.querySelector('.icon_moon_container');
            if (!isiAnchor || !isiSection || !iconPlus) return;

            const scrollDiff = window.innerHeight - isiAnchor.getBoundingClientRect().top;

            if (scrollDiff < ISI_TRAY_HEIGHT_PX) {
                isiSection.classList.add('shortened');
                if (!isiSection.classList.contains('full')) {
                    iconPlus.style.display = 'block';
                }
            } else {
                isiSection.classList.remove('shortened');
                if (!isiSection.classList.contains('full')) {
                    iconPlus.style.display = 'none';
                }
            }
        };

        const handleClick = () => {
            const isiSection = document.querySelector('.isi_section');
            const isiAnchor = document.querySelector('.isi_anchor');
            const iconPlus = document.querySelector('.icon_plus');
            // const iconMoonContainer = document.querySelector('.icon_moon_container');
            if (!isiSection || !isiAnchor || !iconPlus) return;

            if (!isiSection.classList.contains('shortened') && !isiSection.classList.contains('full')) {
                const isiPosition = isiAnchor.offsetTop;
                window.scrollTo(0, isiPosition);
                return;
            }

            isiSection.classList.toggle('full');

            if (isiSection.classList.contains('full')) {
                iconPlus.style.display = 'block';
            } else {
                iconPlus.style.display = 'none';
            }
        };
        handleClick();
        handleScroll();
        // window.addEventListener('scroll', handleScroll);
        // iconMoonContainer.addEventListener('click', handleClick);

        // return () => {
        //     window.removeEventListener('scroll', handleScroll);
        //     iconMoonContainer.removeEventListener('click', handleClick);
        // };
    }, []);
    return (
        <section className="isi_anchor">
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
                        <div className={`${styles.icon_moon_container}`} onClick={() => handleClick()} id="isi-trigger">
                            <span className="icon_plus">
                                <Image
                                    src={
                                        IMAGE_URL +
                                        isiContent[0]?.field_isi_icon.field_media_image.uri.url
                                    }
                                    width="14"
                                    height="12"
                                    alt=""
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
