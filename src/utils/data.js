import {
    Code2,
    GraduationCap,
    Briefcase,
    Award,
    Server,
    Database,
    Mail,
    MapPin,
    Phone
} from "lucide-react"


import { FiGithub, FiLinkedin,FiInstagram,FiFacebook } from "react-icons/fi";

import Logo from "../assets/image/logo.png"
import { desc } from "framer-motion/client";


export const Skills_Category = [
    {
        title:"Frontend",
        icon:Code2,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        skills:[
            {name:"React",color:"bg-blue-500"},
            {name:"Bootrap",color:"bg-orange-500"},
            {name:"Material UI",color:"bg-red-500"},
            {name:"Tailwind CSS",color:"bg-green-500"},
            {name:"Framer Motion",color:"bg-pink-500"},
        ]
    },
    {
        title:"Backend",
        icon:Server,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        skills:[
            {name:"Node.js",color:"bg-blue-500"},
            {name:"Express.js",color:"bg-orange-500"},
           
            {name:"REST API",color:"bg-green-500"},
        ]
    },
    {
        title:"Database",
        icon:Database,
         description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        skills:[
            {name:"MongoDB Motion",color:"bg-pink-500"},
            {name:"MySQL",color:"bg-red-500"},
        ]
    },
        {
        title:"DevOps",
        icon:Cloud,
         description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        skills:[
            {name:"Git",color:"bg-pink-500"},
            {name:"Netlify",color:"bg-red-500"},
            {name:"Render",color:"bg-red-500"},
            {name:"Postman/CD",color:"bg-red-500"},
        ]
    }
]

export const Tech_Stack = [
    "HTML5",
    "CSS",
    "JavaScript",
    "Redux",
    "Vite",
]

export const Projects = [
    {
        id:1,
        title:"MovieStation",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        image:"",
        tags:["React","Bootrap","Material UI","MongoDB","Express","Node.js"],
        liveUrl:"#",
        githubUrl:"#",
        featured:false,
        category:'Full Stack'
    },
        {
        id:2,
        title:"Blog",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        image:"",
        tags:["React","Bootrap","Material UI"],
        liveUrl:"#",
        githubUrl:"#",
        featured:false,
        category:'Full Stack'
        },
        {
        id:3,
        title:"Weather App",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        image:"",
        tags:["React","Bootrap","Material UI"],
        liveUrl:"#",
        githubUrl:"#",
        featured:false,
        category:'Full Stack'
    }
]

export const Services = [
    {
        id:"1",
        title:"Full Stack Development"
    },
     {
        id:"2",
        title:"UI Design"
    },
     {
        id:"3",
        title:"API Design & Integration"
    },
         {
        id:"4",
        title:"Deployment & Hosting"
    },
    {
        id:"5",
        title:" Authentication & User Management"
    },
]

    export const Social_Links = [
        {
            name:"GitHub",
            icon:FiGithub,
            url:"https://github.com/Fumika0523",
            color:"hover:text-gray-400",
            bgColor:"hover:bg-gray-800"  
        },
        {
            name:"LinkedIn",
            icon:FiLinkedin,
            url:"https://www.linkedin.com/in/fumika-mikami-b02712166/",
            color:"hover:text-blue-400",
            bgColor:"hover:bg-blue-800"  
        },
        {
            name:"Email",
            icon:Mail,
            url:"mailto:fumikamikami523@gmail.com",
            color:"hover:text-green-400",
            bgColor:"hover:bg-green-800"  
        },

    ]

        export const Contact_Info = [
        {
            icon:MapPin,
            label:"Location",
            value:"Tokyo, Japan"
        },
          {
            icon:Mail,
            label:"Email",
            value:"fumikamikami523@gmail.com"
        },
     {
            icon:Phone,
            label:"Phone",
            value:"+81(0)70-4113-4429"
        },

    ]
