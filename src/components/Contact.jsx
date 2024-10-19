import React from 'react';

function Contact() {
  return (
    <section id="contact" className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <p>If you have any questions or just want to connect, feel free to reach out via GitHub or LinkedIn.</p>
      <a href="https://github.com/soham203" className="text-primary hover:text-secondary" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </section>
  );
}

export default Contact;
