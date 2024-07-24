import LogoA from './../assets/img/logo/logo-a.png';
import LogoB from './../assets/img/logo/logo-b.png';
import LogoC from './../assets/img/logo/logo-c.png';

const Footer = () => {

  return (
    <footer>
      <span>
        主辦單位
      </span>
      <img src={LogoA} alt="Logo A" />
      <img src={LogoB} alt="Logo B" />
      <img src={LogoC} alt="Logo C" />
    </footer>
  );
}

export default Footer;
