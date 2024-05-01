import styles from './header.module.css';
import { Container } from 'react-bootstrap';
import Image from 'next/image';
import { IMAGE_URL } from '../../../lib/constants';
export const Header = ({ mainMenu, topMenu }) => {
	const Logo = '/wyost-logo.svg';
	const downArrow = '/icon-caret-down.png';
	function buildMenuHierarchy(menuItems) {
		let menuTree = [];
		let menuMap = {};
		menuItems?.forEach((item) => {
			menuMap[item.id] = { ...item, children: [] };
		});
		menuItems?.forEach((item) => {
			if (item.parent) {
				if (menuMap[item.parent]) {
					menuMap[item.parent].children.push(menuMap[item.id]);
				}
			} else {
				menuTree.push(menuMap[item.id]);
			}
		});

		return menuTree;
	}
	buildMenuHierarchy(mainMenu);
	const menuItems = buildMenuHierarchy(mainMenu);
	return (
		<header className={styles.header}>
			<nav className="d-none d-lg-block">
				<Container className={styles.container}>
					<div className={styles.left}>
						<Image src={Logo} width={180} height={180} alt="image page" />
					</div>
					<div className={styles.right}>
						<div className={styles.top}>
							{topMenu[0].field_top_menu_links.map((item => {
								return <a key={item.id} href={item.url}>{item.title}</a>;
							}))}

							<Image
								src={
									IMAGE_URL +
									topMenu[0]?.field_top_menu_logo.field_media_image.uri.url
								}
								width="91"
								height="12"
								alt=""
							/>
						</div>
						<div className={styles.bottom}>
							<ul className={styles.mainList}>
								{menuItems.map((item => {
									return item.children.length > 0 ? <li key={item.id} className={styles.navItem}>
										<a href={item.url} dangerouslySetInnerHTML={{ __html: item.title }}></a>
										<Image src={downArrow} width={14} height={12} alt="image page" />
										<ul className={styles.hasContent}>
											{item.children.map((subItem => {
												return <li key={subItem.id} className={styles.childItem}>
													<a href={subItem.url} dangerouslySetInnerHTML={{ __html: subItem.title }}></a>
												</li>
											}))}
										</ul>
									</li> : <li key={item.id} className={styles.navItem}>
										<a href={item.url} dangerouslySetInnerHTML={{ __html: item.title }}></a>
									</li>
								}))}
								<button>request a rep</button>
							</ul>
						</div>
					</div>
				</Container>
				<div className={styles.overlay}></div>
			</nav>
			{/* Mobile Menu */}
			<nav className="d-lg-none d-block">
				<Container className={styles.container}>
					<div className={styles.leftNavbar}>
						<Image src={Logo} width={180} height={180} alt="image page" />
						<div className={styles.rightLink}>
							<a href="#">Prescribing Information</a>
							<div className={styles.hamburgerMenu}>
								<span></span>
								<span></span>
								<span></span>
							</div>
						</div>
					</div>
					<div className={styles.mainMenu}>
						<ul>
							{menuItems.map((item => {
								return item.children.length > 0 ? <li key={item.id} className={styles.navItem}>
									<a href={item.url}>
										{item.title}
									</a>
									<ul className={styles.hasChild}>
										{item.children.map((subItem => {
											return <li key={subItem.id} className={styles.childItem}>
												<a href={subItem.url}>{subItem.title}</a>
											</li>
										}))}
									</ul>
								</li> : <li key={item.id} className={styles.childItem}>
									<a href={item.url}>
										{item.title}
									</a>
								</li>
							}))}
						</ul>
						<div className={styles.bottomLinksWrapper}>
							<button>request a rep</button>
							<div className={styles.bottomLinks}>
								{topMenu[0].field_top_menu_links.map((item => {
									return <a key={item.id} href={item.url}>{item.title}</a>;
								}))}
							</div>
						</div>
					</div>
				</Container>
			</nav>
		</header>
	);
};

export default Header;
