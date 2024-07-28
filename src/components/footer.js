import { useTranslation } from 'react-i18next';

import LogoA from './../assets/img/logo/logo-a.png';
import LogoB from './../assets/img/logo/logo-b.png';
import LogoC from './../assets/img/logo/logo-c.png';
import LogoD from './../assets/img/logo/logo-d.png';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <span>
        {t('footer.organization')}
      </span>
      <img src={LogoA} alt="Logo A" />
      <img src={LogoB} alt="Logo B" />
      <img src={LogoC} alt="Logo C" />
      <img src={LogoD} alt="Logo D" />
    </footer>
  );
}

export default Footer;
