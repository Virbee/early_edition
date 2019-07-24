import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact() {
  return (
    <section className="contact-page">
      <Header />
      <form>
        <input type="text" />
        <textarea />
      </form>
      <Footer />
    </section>
  );
}

export default Contact;
