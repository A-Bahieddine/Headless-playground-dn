import { Footer, Header, PreviewRibbon } from '@pantheon-systems/nextjs-kit';
import styles from './layout.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Layout({ children, mainMenu, footerMenu,footerContent, preview = false }) {
	console.log(footerContent,"footerContent")
	const navItems = [
		{ linkText: '🏠 Home', href: '/' },
		{ linkText: '📰 Articles', href: '/articles' },
		{ linkText: '📑 Pages', href: '/pages' },
		{ linkText: '⚛️ Examples', href: '/examples' },
	];
	const mainMenuItems = mainMenu?.map(({ title, url, parent }) => ({
		linkText: title,
		href: url,
		parent: parent,
	}));
	return (
		<div className={`${styles.layout} flex flex-col`}>
			{preview && <PreviewRibbon />}
			<Header navItems={navItems} />
			<main className="mb-auto">{children}</main>
			<footer className={`${styles.wyost_footer}`}>
				<Container>
					<Row className={`${styles.top}`}>
						<Col lg={2} md={4} sm={4}>
							<svg width="91" height="12" viewBox="0 0 91 12"
								fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M0 9.86174L1.53454 8.15756C2.25686 9.1865 3.15896 9.66238 4.08033 9.66238C4.92465 9.66238 5.42867 9.21544 5.42867 8.49518C5.42867 7.77492 4.95354 7.43408 3.6662 6.89711C1.83952 6.17685 0.536125 5.36013 0.536125 3.44051C0.536125 1.5209 2.1766 0 4.44952 0C6.10605 0 7.2714 0.614148 8.11571 1.55305L6.64217 3.36656C6.16704 2.75241 5.50572 2.3537 4.64856 2.3537C3.94228 2.3537 3.43826 2.73633 3.43826 3.30547C3.43826 3.8746 3.99044 4.1672 5.32594 4.72026C7.25856 5.47267 8.34686 6.42444 8.34686 8.39228C8.34686 10.5884 6.62933 12.0032 4.26653 12.0032C2.24081 12.0032 0.799372 11.1125 0.00321033 9.86817L0 9.86174ZM21.8848 11.7974L21.1336 9.60129H16.8992L16.103 11.7974H13.066L17.8045 0.215434H20.3663L25.0438 11.8006H21.8848V11.7974ZM17.6825 7.43408H20.3824L19.8142 5.77492C19.5541 5.00643 19.3069 4.25402 19.079 3.50161C18.835 4.25402 18.5718 5.00643 18.2957 5.75884L17.6825 7.43408ZM48.6686 11.7974V0.215434H51.9817C55.9079 0.215434 58.6527 2.15113 58.6527 6.00643C58.6527 9.86174 55.9528 11.7974 52.1646 11.7974H48.6686ZM51.5065 9.2926H52.1197C54.2963 9.2926 55.741 8.15434 55.741 6.00643C55.741 3.85852 54.5146 2.79421 52.1197 2.79421H51.5065V9.2926ZM63.8374 5.99035C63.8374 2.56592 66.6593 0.0128617 70.0654 0.0128617C73.4556 0.0128617 76.2614 2.54662 76.2614 6.01929C76.2614 9.49196 73.4395 11.9968 70.0173 11.9968C66.5951 11.9968 63.8374 9.58521 63.8374 5.99035ZM73.3336 6.02251C73.3336 4.11897 71.9371 2.64309 70.0526 2.64309C68.197 2.64309 66.7717 4.13183 66.7717 6.00643C66.7717 7.98714 68.258 9.36977 70.0237 9.36977C71.9114 9.36977 73.3368 7.94212 73.3368 6.01929L73.3336 6.02251ZM91 0.215434H81.8698V2.73633H86.3322L80.9003 11.8006H90.6726V9.23473H85.6099L91 0.215434ZM38.6203 11.7974H41.3041V0.215434H38.6203V7.59486L33.2077 0.215434H30.4628V11.8006H33.2077V4.42122L38.6235 11.8006L38.6203 11.7974Z"
									fill="white" />
							</svg>
						</Col>
						<Col lg={4} md={6} sm={6}>
							<div className={`${styles.links}`}>
								{footerMenu.map(item => (
									<a key={item.id} href={item.url}>{item.title}</a>
								))}
							</div>
						</Col>
					</Row>
					<Row className={`${styles.bottom}`}>
						<Col lg={2} md={4} sm={4}>
							<div className={`${styles.footer_copyright}`}>
								© 2024 Sandoz Inc.<br />
								100 College Road West<br />
								Princeton, NJ 08540
							</div>
						</Col>
						<Col lg={4} md={4} sm={4}>
							<div className={`${styles.right_text}`}>
								<p>This site is intended for a US audience
									only.</p>
								<p>398629</p>
								<p>04/2024</p>
							</div>
						</Col>
					</Row>
				</Container>
			</footer>
		</div>
	);
}
