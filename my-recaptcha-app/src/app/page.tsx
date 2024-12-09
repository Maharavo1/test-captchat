"use client"
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function SignupForm() {
  const [captchaToken, setCaptchaToken] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaToken) {
      alert('Veuillez valider le CAPTCHA.');
      return;
    }

    const formData = {
      username: e.target.username.value,
      email: e.target.email.value,
      captchaToken: captchaToken, 
    };

    console.log('Données envoyées :', formData);
    setFormSubmitted(true);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg">
      {formSubmitted ? (
        <p className="text-green-600">Formulaire soumis avec succès ! ✅</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Nom d'utilisateur :
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              className="w-full mt-1 p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email :
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full mt-1 p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <ReCAPTCHA
              sitekey="6LdWXZYqAAAAADSo5UXPyIRc9PPtZsCgfzrhPe2P" // Remplacez par votre clé site
              onChange={handleCaptchaChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Soumettre
          </button>
        </form>
      )}
    </div>
  );
}
