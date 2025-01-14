import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import HeroSection from '@/app/organisms/HeroSection/HeroSection';
import Footer from '@/app/organisms/Footer/Footer';
import IntroSection from '@/app/organisms/IntroSection/IntroSection';
import BannerSection from '@/app/organisms/BannerSection/BannerSection';
import TitleSection from '@/app/organisms/TitleSection/TitleSection';
import CategoriesSection from '@/app/organisms/CategoriesSection/CategoriesSection';
import HighlightItemSection from '@/app/organisms/HighlightItemSection/HighlightItemSection';
// import Header from '@/app//organisms/Header/Header';


const Home = async() => {
  if(!process.env.NEXT_PUBLIC_BASE_API_URL) return null;
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/items`);
  const { items, categories, banners } = await response.json();

  // useEffect(() => {
  //   // If Google Maps script is loaded, initialize the map
  //   if (window.google) {
  //     initialize();
  //   }
  // }, []);

  // const initialize = () => {
  //   const myCenter = new google.maps.LatLng(51.508742, -0.120850);

  //   const mapProp = {
  //     center: myCenter,
  //     zoom: 15,
  //     mapTypeId: google.maps.MapTypeId.ROADMAP,
  //   };

  //   const map = new google.maps.Map(document.getElementById('googleMap') as HTMLElement, mapProp);

  //   const marker = new google.maps.Marker({
  //     position: myCenter,
  //     animation: google.maps.Animation.BOUNCE,
  //   });

  //   marker.setMap(map);

  //   // Info window
  //   const infowindow = new google.maps.InfoWindow({
  //     content: 'Hello World!',
  //   });

  //   google.maps.event.addListener(marker, 'click', () => {
  //     infowindow.open(map, marker);
  //   });
  // };

  return (
    <>
      <Head>
        <script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyDY0kkJiTPVd2U7aTOAwhc9ySH6oHxOIYM&amp;sensor=false">
        </script>
      </Head>
      {/* <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
      /> */}
      <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
      />

      <HeroSection />
      <TitleSection />
      <CategoriesSection items={items} categories={categories} banners={banners} />
      <HighlightItemSection />
      <IntroSection />
      <BannerSection banners={banners} />
    </>

  )
}

export default Home
