import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="flex justify-between items-center p-4">
        <img src="/logo.png" alt="Company Logo" className="h-8" />
        <nav className="flex space-x-4">
          <a href="#purchase" className="text-sm">Purchase this template</a>
          <a href="#style-guide" className="text-sm">Style Guide</a>
          <a href="#license" className="text-sm">License</a>
          <a href="#changelog" className="text-sm">Changelog</a>
          <a href="#webflow" className="text-sm">Webflow</a>
        </nav>
      </header>

      <section className="hero bg-cover bg-center h-[70vh]" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
        <div className="flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold">Lumar</h1>
          <p className="mt-4 max-w-2xl">
            Lumar is a sleek portfolio template for creative professionals, offering a modern layout and responsive design to effortlessly showcase your work. Ideal for artists, designers, and photographers seeking a lasting online impression.
          </p>
        </div>
      </section>

      <section className="featured-work py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {["Therapy4Me", "Black Noise", "Appstack", "The Real Deal", "Vintage World"].map((title, index) => (
            <div key={index} className="work-item">
              <img src={`/work-${index + 1}.jpg`} alt={title} className="w-full h-48 object-cover rounded-lg" />
              <h3 className="mt-4 text-xl font-bold">{title}</h3>
              <p className="text-sm">Role: Designer</p>
            </div>
          ))}
        </div>
      </section>

      <section className="work-experience py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
          <div className="flex flex-col md:flex-row justify-between">
            <ul className="experience-list space-y-4">
              <li>Senior Designer at Google (2015-2020)</li>
              <li>Lead Designer at Microsoft (2020-2023)</li>
              <li>Freelance Designer (2023-Present)</li>
            </ul>
            <ul className="clients-list space-y-4 mt-8 md:mt-0">
              <li>Google</li>
              <li>Microsoft</li>
              <li>Apple</li>
              <li>Amazon</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="about py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">About</h2>
            <p>
              Lumar is the poetry of simplicity and complexity, a portfolio template designed to showcase the essence of creativity. With a modern layout and responsive design, Lumar ensures your work stands out in the digital realm.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src="/portrait.jpg" alt="Designer Portrait" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </section>

      <section className="services py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Services</h2>
          <ul className="services-list space-y-4">
            <li>Motion</li>
            <li>Art & Design Direction</li>
            <li>Creative Strategy</li>
            <li>Digital Brand Identity</li>
            <li>Product Design</li>
            <li>Web Design</li>
          </ul>
        </div>
      </section>

      <footer className="py-8 bg-black text-white text-center">
        <p>hello@asad.digital</p>
        <div className="social-links flex justify-center space-x-4 mt-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
        <p className="mt-4 text-sm">All rights reserved. Asad Digital 2024.</p>
      </footer>
    </>
  );
}

export default App;