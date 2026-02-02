import { useState } from "react";
import Card from "./components/Card";

function App() {
  return (
    <div className="relative min-h-screen pb-64 md:pb-30">
      <div className="border-b flex flex-col items-center ">
        <h1 className="text-3xl">Giorgi Zurabishvili</h1>
        <p className="text-xl">A junior full-stack web developer</p>
      </div>
      <div className="flex flex-col items-center p-6">
        <p className="text-3xl font-semibold flex justify-center m-4 mb-2">
          My Projects
        </p>
        <div className="flex flex-col sm:flex-row">
          <Card
            projectName="public chat"
            description="A real-time public chat app built with Node.js and WebSockets. 
            Users can join, select a custom username, send messages, and see when others connect or disconnect."
            projectLink="https://public-chat-fffg.onrender.com/"
          />
          <Card
            projectName="car game"
            description="A top-down, endless car dodging and shooting game built with Phaser 3. Features multiple car types, power-ups, explosions, and score-based win/lose conditions."
            projectLink="https://imgeorge1.github.io/car-game/"
          />
        </div>
        <div className="">
          <div className="flex flex-col items-center text-center px-4 py-8">
            <p className="text-3xl font-semibold mb-4">About Me</p>
            <p className="max-w-xl text-lg ">
              I'm a junior full-stack web developer who loves building
              challenging projects that push my limits and help me learn new
              skills.
            </p>
          </div>
          <h3 class="text-xl font-semibold mb-2">Languages and Tools:</h3>
          <div class="flex flex-wrap gap-4 items-center">
            <a
              href="https://www.w3schools.com/css/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                alt="CSS3"
                class="w-10 h-10"
              />
            </a>
            <a href="https://expressjs.com" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                alt="Express"
                class="w-10 h-10"
              />
            </a>
            <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                alt="HTML5"
                class="w-10 h-10"
              />
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt="JavaScript"
                class="w-10 h-10"
              />
            </a>
            <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                alt="MongoDB"
                class="w-10 h-10"
              />
            </a>
            <a href="https://nodejs.org" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                alt="Node.js"
                class="w-10 h-10"
              />
            </a>
            <a
              href="https://www.postgresql.org"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                alt="PostgreSQL"
                class="w-10 h-10"
              />
            </a>
            <a href="https://postman.com" target="_blank" rel="noreferrer">
              <img
                src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                alt="Postman"
                class="w-10 h-10"
              />
            </a>
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                alt="React"
                class="w-10 h-10"
              />
            </a>
            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
              <img
                src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                alt="Tailwind CSS"
                class="w-10 h-10"
              />
            </a>
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                alt="TypeScript"
                class="w-10 h-10"
              />
            </a>
            <a href="https://grok.com" target="_blank">
              <img
                src="https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/grok.png"
                alt="Grok"
                class="w-10 h-10"
              />
            </a>
            <a href="https://chat.openai.com/" target="_blank">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
                alt="ChatGPT"
                title="ChatGPT"
                class="w-10 h-10"
              />
            </a>
          </div>
          <p class="text-xl font-semibold mb-2">Connect With Me:</p>
          <div class="flex flex-wrap gap-4 items-center">
            <p align="left">
              <a
                href="https://www.linkedin.com/in/giorgi-zurabishvili-4069483a7"
                target="blank"
              >
                <img
                  align="center"
                  src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
                  alt="giorgi zurabishvili"
                  height="30"
                  width="40"
                />
              </a>
            </p>
          </div>
        </div>
      </div>
      <footer className="bg-black text-white border-t border-gray-300 py-6 mt-12 absolute bottom-0 w-full">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 ">
          <p className="text-sm mb-4 sm:mb-0">
            © {new Date().getFullYear()} Giorgi Zurabishvili. All rights
            reserved.
          </p>

          <div className="flex md:flex-row flex-col items-center gap-4">
            <a
              href="https://github.com/imgeorge1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600"
            >
              GitHub
            </a>
            <a
              href="mailto:giorgi.zurabishvili100@gmail.com"
              className="hover:text-gray-600"
            >
              giorgi.zurabishvili100@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/giorgi-zurabishvili-4069483a7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
