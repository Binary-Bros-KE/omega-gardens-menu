import ContactForm from "./components/ContactForm";
import ContactHero from "./components/ContactHero";
import ContactMethods from "./components/ContactMethods";


export default function ContactPage() {
  return (
    <div>
      <div>
        <ContactHero />
      </div>
      <div>
        <ContactMethods />
      </div>
      <div>
        <ContactForm />
      </div>
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6754390408682!2d37.131234574041116!3d-0.48489763527337687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182887fbbe128361%3A0x83db3009f7951c38!2sOmega%20Gardens%20Hotel!5e0!3m2!1sen!2ske!4v1754922637639!5m2!1sen!2ske" width="600" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-full"></iframe>
      </div>
    </div>
  )
}
