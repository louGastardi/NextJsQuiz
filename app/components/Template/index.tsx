import stylesTemplate from './template.module.css';
import stylesLogo from '../Logo/logo.module.css';
import Logo from '../Logo';
import Footer from '../Footer/Footer';

interface TemplateProps {
  children: React.ReactNode;
}

export default function Template(props: TemplateProps) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&display=swap" rel="stylesheet" />

      <main className={stylesTemplate.main}>
        <div className={stylesLogo.logo}>
          <Logo />
        </div>
        {props.children}

        <Footer />
      </main>
    </>
  );
}
