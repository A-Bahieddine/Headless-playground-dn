import styles from './footer.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import { IMAGE_URL } from '../../../lib/constants';

export const Footer = ({ footerMenu, footerContent }) => {
	return (
		<footer className={`${styles.footer}`}>
			<Container>
				<Row className={`${styles.top}`}>
					<Col lg={2} md={4} sm={4}>
						<Image
							src={
								IMAGE_URL +
								footerContent[0]?.field_footer_logo?.field_media_image?.uri.url
							}
							width="91"
							height="12"
							alt=""
						/>
					</Col>
					<Col lg={4} md={6} sm={6}>
						<div className={`${styles.links}`}>
							{footerMenu?.map((item) => (
								<a key={item.id} href={item.url}>
									{item.title}
								</a>
							))}
						</div>
					</Col>
				</Row>
				<Row className={`${styles.bottom}`}>
					<Col lg={2} md={4} sm={4}>
						<div
							className={`${styles.copyright}`}
							return
							dangerouslySetInnerHTML={{
								__html: footerContent[0]?.field_copy_right?.processed,
							}}
						></div>
					</Col>
					<Col lg={4} md={4} sm={4}>
						<div
							className={`${styles.rightText}`}
							dangerouslySetInnerHTML={{
								__html: footerContent[0]?.body?.processed,
							}}
						></div>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
