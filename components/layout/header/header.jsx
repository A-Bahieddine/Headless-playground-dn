import styles from './header.module.css';
import { Container } from 'react-bootstrap';
import Image from 'next/image';
import { IMAGE_URL } from '../../../lib/constants';
export const Header = ({ mainMenu, topMenu }) => {
	const Logo = '/wyost-logo.svg';
	return (
		<header className={styles["header"] + " header"}>
			<nav className={`d-none d-lg-block nav`}>
				<Container className={styles["container"]}>
					<div className={styles["navbar-left"]}>
						<a href="#">
							<Image src={Logo} width={166} height={58} alt="Logo Image" />
						</a>
					</div>
					<div className={styles["navbar-right"]}>
						<div className={styles["top-header"] + " top-header"}>
							{topMenu[0].field_top_menu_links.map((item => {
								return <a key={item.id} href={item.uri.replace("internal:", "")}>{item.title}</a>;
							}))}
							{/* <Image
								src={
									IMAGE_URL +
									topMenu[0]?.field_top_menu_logo.field_media_image.uri.url
								}
								width="91"
								height="12"
								alt=""
							/> */}
							<a href="https://www.sandoz.com/" target="_blank" rel="noopener noreferrer">
								<img src={
									IMAGE_URL +
									topMenu[0]?.field_top_menu_logo.field_media_image.uri.url
								} alt="Sandoz Logo" />
							</a>
						</div>
						<div className={styles["bottom-header"]}>
							<ul className={styles["main-list"]}>
								{mainMenu.map((item => {
									return <li key={item.id} className={styles["nav-item"] + " nav-item"}>
										<a href={item.url} dangerouslySetInnerHTML={{ __html: item.title }}></a>
									</li>
								}))}
								<a className={styles["button"]}
									href="https://www.google.com/"
									target="_blank">Patient
									e-consent</a>
							</ul>
						</div>
					</div>
				</Container>
				<div className={styles["overlay"]}></div>
			</nav>
			{/* Mobile Menu */}
			<nav className={`d-lg-none d-block nav`}>
				<Container className={styles["container"]}>
					<div className={styles["navbar-left"]}>
						<a href="#">
							<Image src={Logo} width={166} height={58} alt="image page" /></a>
						<div className={styles["right-link"]}>
							<a
								href="https://prod.cms.pro.wyost.com/sites/spare99_sandoz_com/files/2024-03/Wyost%20PI%203.2024.pdf"
								target="_blank">Prescribing Information</a>
							<div className={styles["hamburger-menu"] + " hamburger-menu"}>
								<span></span>
								<span></span>
								<span></span>
							</div>
						</div>
					</div>
					<div className={styles["main-menu"] + " main-menu"}>
						<ul>
							<li><a
								id="scrollToTop" href="#">Home</a></li>
							{mainMenu.map((item => {
								return <li key={item.id} className={styles.navItem}>
									<a href={item.url}>
										{item.title}
									</a>
								</li>
							}))}
						</ul>
						<a className={styles["button"]} href="https://www.google.com/"
							target="_blank">Patient
							e-consent</a>
						<div className={styles["bottom-links"] + " bottom-links"}>
							{topMenu[0].field_top_menu_links.map((item => {
								return <a key={item.id} href={item.uri.replace("internal:", "")}>{item.title}</a>;
							}))}
						</div>
					</div>
				</Container>
			</nav>
		</header>
	);
};

export default Header;
