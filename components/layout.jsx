import { PreviewRibbon } from '@pantheon-systems/nextjs-kit';
import Footer from './layout/footer/footer';
import styles from './layout.module.css';
import Header from './layout/header/header';
import ISI from './layout/ISI/isi';

export default function Layout({
	children,
	mainMenu,
	footerMenu,
	footerContent,
	isiContent,
	preview = false,
}) {
	return (
		<div className={`${styles.layout} flex flex-col`}>
			{preview && <PreviewRibbon />}
			<Header />
			<main className="mb-auto">{children}</main>
			<ISI isiContent={isiContent}/>
			<Footer footerMenu={footerMenu} footerContent={footerContent}/>
		</div>
	);
}
