import Image from 'next/image';
import styles from './HeroSection.module.css';

const HeroSection = () => {
    return (
      <div id="mainCarousel">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          {/* <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol> */}
          <div className="carousel-inner">
            <div className="item active">
              <div id="googleMap" style={{ height: '350px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'rgb(229, 227, 223)' }}>
                  <div className={styles.gmErrContainer}><div className={styles.gmErrContent}><div className={styles.gmErrIcon}>
                    <Image height={48} width={48} src="/restaurant-images/icon_error.png" alt="" style={{ userSelect: 'none' }} /></div>
                    <div className={styles.gmErrTitle}>Sorry! Something went wrong.</div>
                    <div className={styles.gmErrMessage}>This page didn't load Google Maps correctly. See the JavaScript console for technical details.</div></div></div></div></div>
              <div className="container">
                <div className="carousel-caption">
                  <a className="btn btn-lg btn-default" href="#" role="button" style={{ fontSize: '2em' }}>Order Online Now »</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default HeroSection;