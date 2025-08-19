import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import supabase from './supabase.png'
import figma from './figma.png';
import git from './git.png';
import github from './github.png';
import react from './react.png';
import mysql from './mysql.png';
import node from './node.png';
import express from './express.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import softskills_icon from './softskills-icon.png';
import softskills_icon_dark from './softskills-icon-dark.png';
import frontend_icon from './frontend-icon.png';
import frontend_icon_dark from './frontend-icon-dark.png';
import backend_icon from './backend-icon.png';
import backend_icon_dark from './backend-icon-dark.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    supabase,
    express,
    figma,
    react,
    node,
    github,
    mysql,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    softskills_icon,
    softskills_icon_dark,
    frontend_icon,
    frontend_icon_dark,
    backend_icon,
    backend_icon_dark,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: '/work-1.png',
    },
    {
        title: 'Geo based app',
        description: 'Mobile App',
        bgImage: '/work-2.png',
    },
    {
        title: 'Photography site',
        description: 'Web Design',
        bgImage: '/work-3.png',
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: '/work-4.png',
    },
]

export const skillsData = [
    { icon: assets.softskills_icon, iconDark: assets.softskills_icon_dark, title: 'Soft Skills', skills: [
        'Trabajo en equipo',
        'Pensamiento crítico',
        'Resolución de problemas',
        'Adaptabilidad',
        'Comunicación efectiva',
    ], link: '/EDAG_CartaRecomendacion_AlbertCastroAlbacete_CENSORED.pdf' },
    { icon: assets.frontend_icon, iconDark: assets.frontend_icon_dark, title: 'Frontend', skills:[
        'React',
        'JavaScript',
        'HTML',
        'CSS',
        'Tailwind CSS',
    ], link: '#projects' },
    { icon: assets.backend_icon, iconDark: assets.backend_icon_dark, title: 'Backend', skills: [
        'Node.js',
        'Express',
        'Supabase',
        'MySQL',
        'Git & GitHub',
    ], link: '#projects' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Experiencia En Desarrollo Web', description: 'Cuatro meses de practicas',subdescription:'Kennwort Consulting', document:'/KENNWORT_CartaRecomendacionCastellano_AlbertCastroAlbacete.pdf' , button: 'Referencias'},
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Experiencia como Modelista', description: 'Diez años como Clay Modeler', subdescription:'EDAG Engineering Spain S.L.', document:'/EDAG_CartaRecomendacion_AlbertCastroAlbacete_CENSORED.pdf', button: 'Recomendación'},
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Educación Formación Profesional', description: 'ILERNA',subdescription: 'Desarrollo Aplicaciones Web', document:'/finished_grade_certificate_CENSORED.pdf' , button: 'Expediente'},
];

export const toolsData = [
    assets.react, assets.node, assets.express, assets.supabase, assets.mysql, assets.vscode, assets.git, assets.github,
];