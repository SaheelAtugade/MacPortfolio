import React, { useRef, useState } from "react";
import "./mail.scss";
import MacWindow from "./MacWindow";
import emailjs from "@emailjs/browser";

const Mail = () => {
  const [statusMessage, setStatusMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatusMessage("Sending email...");

    if (!serviceId || !templateId || !publicKey) {
      setStatusMessage("Email service is not configured right now. Please try again later.");
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey,
      })
      .then(
        () => {
          setStatusMessage("Email sent successfully.");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error);
          setStatusMessage("Could not send the email. Please try again.");
        },
      )
      .finally(() => {
        setTimeout(() => {
          setStatusMessage("");
        }, 3000);
      });
  };

  return (
    <MacWindow dimensions={{ width: "30vw", height: "55vh", x: 500, y: 200 }} windowTitle="Mail" id="mail">
      <div className="mail-window">
        <form ref={form} onSubmit={handleSubmit}>
          <div className="mail-row">
            <label>To:</label>

            <div className="to-email">
              <span>sahilatugade707@gmail.com</span>
            </div>
          </div>

          <div className="mail-row">
            <label>From:</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, email: e.target.value }));
              }}
              placeholder="your@email.com"
              required
            />
          </div>

          <input type="hidden" name="time" value={new Date().toLocaleString()} />

          <div className="mail-row">
            <label>Name:</label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, name: e.target.value }));
              }}
              placeholder="Your name"
              required
            />
          </div>

          <div className="mail-row">
            <label>Subject:</label>

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, subject: e.target.value }));
              }}
              placeholder="Subject"
              required
            />
          </div>

          <div className="message-section">
            <label>Message:</label>

            <textarea
              name="message"
              value={formData.message}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, message: e.target.value }));
              }}
              placeholder="Write your message..."
              required
            />
          </div>

          <div className="mail-footer">
            <button type="submit">Send</button>
            <p>{statusMessage}</p>
          </div>
        </form>
      </div>
    </MacWindow>
  );
};

export default Mail;
