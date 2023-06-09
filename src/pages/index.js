import Image from "next/image";
import { Comme } from "next/font/google";
import Head from "next/head";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import Footer from "@/components/Footer";
import HardwareSlides from "@/components/HardwareSlides";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Posnet | Point of Sale</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        {/* <script
          async
          defer
          src='https://maps.googleapis.com/maps/api/js?key=AIzaSyBZiyTMTCwNfSpe56-M6X8okKbkPDip-9Y&callback=initMap'
        ></script> */}
      </Head>
      <Hero
        heading='More Than Just a POS, POSNET'
        message='Our point of sale terminals are simple to setup and use, allowing
            for
            efficient and effective transactions as well as keeping your
            data secure and safe.'
      />
      <Statistics />
      <HardwareSlides />
      <Contact />
      <Footer />
    </>
  );
}
