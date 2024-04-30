import { PreviewRibbon } from '@pantheon-systems/nextjs-kit';
import Footer from './layout/footer/footer';
import styles from './layout.module.css';
import Header from './layout/header/header';

export default function Layout({
	children,
	mainMenu,
	footerMenu,
	footerContent,
	preview = false,
}) {
	return (
		<div className={`${styles.layout} flex flex-col`}>
			{preview && <PreviewRibbon />}
			<Header mainMenu={mainMenu} />
			<main className="mb-auto">{children}</main>
			<Footer footerMenu={footerMenu} footerContent={footerContent} />
		</div>
	);
}
