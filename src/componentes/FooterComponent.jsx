import './FooterComponent.css';

function FooterComponent() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>&copy; 2025 Policía Nacional - Todos los derechos reservados</p>
        </div>
        <div className="footer-right">
          <a href="https://www.facebook.com/Policia" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="social-icon"/>
          </a>
          <a href="https://www.youtube.com/user/PoliciaNacional" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" alt="YouTube" className="social-icon"/>
          </a>
          <a href="https://www.instagram.com/policianacional/" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" alt="Instagram" className="social-icon"/>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
