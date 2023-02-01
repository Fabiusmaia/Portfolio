import Header from "./Components/Header";
import pic from './Components/Styles/pic.png'
import html5 from './Components/Styles/html5.png'
import css from './Components/Styles/css-3-logo-1.png'
import node from './Components/Styles/nodejs_logo.png'
import js from './Components/Styles/javascript-logo-1.png'
import mongo from './Components/Styles/mongodb.png'
import react from './Components/Styles/react.png'
import shake from './Components/Styles/shake.gif'
import emailjs from '@emailjs/browser'
import git from './Components/Styles/git.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faGit } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Footer from "./Components/Footer";
function App() {
  
useEffect(() => {
  AOS.init({duration:1000})
},[])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [success, setSuccess] = useState(false)
  
  function handleSubmit(e){
    e.preventDefault();
    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }
    emailjs.send("service_6rn4k3l","template_78s2b6k",templateParams,"szZPSLbvwdg-ziEbF").then((response) => {
      console.log("Email enviado com sucesso!", response.status, response.text)
      setSuccess(true)
      setName("")
      setEmail("")
      setMessage("")
    })
  }
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);

    
;
  return (
    
    <div className="App">

        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        

      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
   <div className="container demo">
   
  
<div className="landing">
<Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: {
            enable: false,
            zIndex: 0,
          },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: false,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode:"repulse",
                    },
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 8,
                    },
                    repulse: {
                        distance: 100,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#0096FF",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    directions: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 2,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        }}
    /> 
<Header/>

       
        <div className="flex">
       
        <h1>Olá, meu nome é <span className="highlight">Fabius Maia.</span><br></br>Um futuro desenvolvedor <span className="highlight">Full-stack.</span></h1>
        <button className="button"><p><a href="#projects">Conheça meu trabalho</a></p> 
</button>

    </div>

    </div>

<div id="about" data-aos="fade-left" >

  <div className="about-flex">
    <img className="pic" src={pic} />
  <h1><span className="about-text">Sobre</span></h1>
  <span className="about-text">
  Estudante de Análise e Desenvolvimento de Sistemas na UNIRP, Iniciando na área de desenvolvimento web desde 2021, me reconheço como um entusiasta dos novos frameworks do mercado, sempre adquirindo mais conhecimento dia após dia.

Pretendo me tornar um desenvolvedor Full-Stack, atuando no back-end com NodeJS e MongoDB, e utilizando React como foco no front-end. 

Me considero uma pessoa de rápido aprendizado em novas tecnologias e me adapto fácil à mudanças, e estou sempre pronto pra superar qualquer desafio!</span>  <h1><span className="about-text">Tecnologias</span></h1>

  <div className="tech-grid" data-aos="fade-left">
    <div className="tech html5"><img src={html5} ></img></div>
    <div className="tech css"> <img src={css} ></img></div>
    <div className="tech javascript"><img src={js} ></img></div>
    <div className="tech node"><img src={node} ></img></div>
    <div className="tech mongodb"><img src={mongo} ></img></div>
    <div className="tech react"><img src={react} ></img></div>
    </div>

  </div>


  <div id="projects">
  <h1><span className="about-text">Meus projetos</span></h1>

    
<div className="projects-grid">
  <div className="project item1"  data-aos="fade-left">
    <div className="description">
      <h1>Workout Buddy
      </h1>
      <p>React, MongoDB, NodeJS, Express      
</p>
<a href="https://github.com/Fabiusmaia/workout-buddy" target="_blank"><img className="git" src={git}></img></a>
    </div>
    </div>
  <div className="project item2" data-aos="fade-right">
  <div className="description">
      <h1>BandClone
      </h1>
      <p>React, MongoDB, NodeJS, Cloudinary, Express    
</p>
<a href="https://github.com/Fabiusmaia/BandClone" target="_blank"><img className="git" src={git}></img></a>    </div>
    </div>
  <div className="project item3" data-aos="fade-left">
  <div className="description">
      <h1>Recipes
      </h1>
      <p>React      
</p>

<a href="https://github.com/Fabiusmaia/recipes-api" target="_blank"><img className="git" src={git}></img></a>

    </div>
    </div>
  <div className="project item4" data-aos="fade-left">
  <div className="description">
      <h1>Costs
      </h1>
      <p>React, json-api    
</p>
<a href="https://github.com/Fabiusmaia/costs" target="_blank"><img className="git" src={git}></img></a>
    </div>
  </div>

  </div>
  
</div>
<div id="contact" data-aos="fade-right">
  <h1><span className="about-text">Entre em contato comigo</span></h1>
<div className="contact-flex">
<div className="image">
<img src={shake} className="shake"></img>
</div>

<div className="form">
<form onSubmit={((e) => handleSubmit(e))}>
 <input type="text" onChange={((e) => setName(e.target.value))} value={name} name="name" placeholder="Seu nome "/> 
 <input type="text" name="email" onChange={((e) => setEmail(e.target.value))} value={email} placeholder="Seu melhor e-mail "/>
 <textarea placeholder="Sua mensagem..." onChange={((e) => setMessage(e.target.value))} value={message}></textarea>
 <input type="submit" value="Enviar e-mail"></input>
 {success && <p>Mensagem enviada com sucesso! Em breve entrarei em contato. :3</p>}

 </form>
</div>
</div>
</div>
</div>
<Footer/>

  </div>
  
  
</div>  
    
  );
      }

export default App;
