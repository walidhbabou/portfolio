import { nanoid } from 'nanoid';
import {  FaReact } from 'react-icons/fa';
import { SiSpringboot, SiFlutter } from 'react-icons/si'; // Vérifiez que ces exportations existent
import { FaJava } from 'react-icons/fa';
import projetImg from './assets/projet.jpg'; 
import projetImg1 from './assets/projet2.jpg';// Utilisez une icône Java de 'react-icons/fa'
export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'React.js',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Java SE 8 & SE 17',
    icon: <FaJava className='h-16 w-16 text-emerald-500' />, // Vérifiez que SiJava est correct
    text: 'Strong knowledge of Java SE 8 & SE 17, experienced in OOP, functional programming, and high-performance backend development.',
  },
  {
    id: nanoid(),
    title: 'Spring Boot',
    icon: <SiSpringboot className='h-16 w-16 text-emerald-500' />,
    text: 'Proficient in Spring Boot, building robust and scalable backend applications with microservices architecture and RESTful APIs.',
  },
  {
    id: nanoid(),
    title: 'Flutter',
    icon: <SiFlutter className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in Flutter for cross-platform mobile development, delivering smooth and performant applications on iOS & Android.',
  },
];

export const projects = [
  {
    id: nanoid(),

    github: 'https://github.com/walidhbabou',
    title: 'first project',
    text: `Project management is a complex process that requires rigorous organization, careful planning, and effective communication among team members. The purpose of this website is to define the specifications and features of the project management system we plan to develop. This system aims to provide a centralized tool for efficiently managing projects, resources, and tasks, while facilitating communication and collaboration within teams.`,},
  {
    id: nanoid(),
   
    github: 'https://github.com/walidhbabou',
    title: 'second project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    github: 'https://github.com/walidhbabou',
    title: 'third project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
];