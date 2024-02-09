import Link from 'next/link';
import footerStyles from './footer.module.css';

export default function Footer() {
  const externalLinkPortfolio = 'https://github.com/louGastardi';
  const externalLinkGithub = 'https://github.com/louGastardi';
  const externalLinkLinkedin = 'https://www.linkedin.com/in/louisegastardi/';

  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.links}>
        <Link href={externalLinkPortfolio}>
          <img className={footerStyles.link_icon} src="./images/icon_LouGastardi.png" alt="Developed by Lou Gastardi" />
        </Link>
        <Link href={externalLinkGithub}>
          <img className={footerStyles.link_icon} src="./images/icon_gitHub.png" alt="Github Logo" />
        </Link>
        <Link href={externalLinkLinkedin}>
          <img className={footerStyles.link_icon} src="./images/icon_LinkedIn.png" alt="Linkedin Logo" />
        </Link>
      </div>
      <p>Developed by Lou Gastardi © 2024</p>
    </footer>
  );
}
