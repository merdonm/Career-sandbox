//All the data should be included here with their command
//Career slideImages and Carousel images from images
import Image from "../assets/images/CarouselImg 1.png"
import Image2 from "../assets/images/CarouselImg 2.png"
import Image3 from "../assets/images/CarouselImg 3.png"

import SliderImg1 from "../assets/images/Slider 1.png";
import SliderImg2 from "../assets/images/Slider 2.png";
import SliderImg3 from "../assets/images/Slider 3.png";
import SliderImg4 from "../assets/images/Slider 4.png";
import SliderImg5 from "../assets/images/Slider 5.png";
import SliderImg6 from "../assets/images/Slider 1.png";

import GalleryImg1 from "../assets/images/Gallery 1.png";
import GalleryImg2 from "../assets/images/Gallery 2.png";
import GalleryImg3 from "../assets/images/Gallery 3.png";
import GalleryImg4 from "../assets/images/Gallery 4.png";
import GalleryImg5 from "../assets/images/Gallery 5.png";
import GalleryImg6 from "../assets/images/Gallery 6.png";

import DesImg from "../assets/images/CareerDescription.png"


export const slides = [
  {id: 1, img: Image},
  {id: 2, img: Image2},
  {id: 3, img: Image3},
]

export const RunningSlide = [
  { 
    id:1,
    url: SliderImg1,
    title: "Web Developer",
    year: "1+year",
    WorkExperience: "1 Year and Above",
    Requirement: "Any Degree....",
    link:"/description"

  },
  { 
    id:2,
    url: SliderImg2,
    title: "Web Developer",
    year: "1+year",
    WorkExperience: "1 Year and Above",
    Requirement: "Any Degree....",
    link:"/description"
  },
  { 
    id:3,
    url: SliderImg3,
    title: "Web Developer",
    year: "1+year",
    WorkExperience: "1 Year and Above",
    Requirement: "Any Degree....",
    link:"/description"
  },
  { 
    id:4,
    url: SliderImg4,
    title: "Web Developer",
    year: "1+year",
    WorkExperience: "1 Year and Above",
    Requirement: "Any Degree....",
    link:"/description"
  },
  { 
    id:5,
    url: SliderImg5,
    title: "Web Developer",
    year: "1+year",
    WorkExperience: "1 Year and Above",
    Requirement: "Any Degree....",
    link:"/description"
  },
  { 
    id:6,
    url: SliderImg6,
    title: "Web Developer",
    year: "1+year",
    WorkExperience: "1 Year and Above",
    Requirement: "Any Degree....",
    link:"/description"
  },
];

export const CareerExploreData = [
  {id:1,url:GalleryImg1,title:"Full Stack Web Development Internship",description:"Full Stack Developer Course with Internship & Placement."},
  {id:2,url:GalleryImg2,title:"Front End Development Internship",description:"Full Stack Developer Course with Internship & Placement."},
  {id:3,url:GalleryImg3,title:"Digital Marketing Certificate Course",description:"Full Stack Developer Course with Internship & Placement."},
  {id:4,url:GalleryImg4,title:"UI/UX Designer Internship",description:"Full Stack Developer Course with Internship & Placement."},
  {id:5,url:GalleryImg5,title:"HR Management",description:"Full Stack Developer Course with Internship & Placement."},
  {id:6,url:GalleryImg6,title:"PDF Accessibility Certificate Internship",description:"Full Stack Developer Course with Internship & Placement."},
 ]

export const JobDescription = [{
  id: 1,
  imgUrl:DesImg,
  title:"PHP Developer (Senior)",
  contents: [
    {
      id: 1,
      title: 'Position Duties and Responsibilities',
      subContents: [
        { id: 1,Sino: 1, text: "Demonstrate strong technical aptitude" },
        { id: 2,Sino: 2, text: "Build and maintain products and features scoped with the team" },
        { id: 3,Sino: 3, text: "Demonstrate self-awareness" },
        { id: 4,Sino: 4, text: "Collaborate with team PM to scope and prioritize technical backlog" },
        { id: 5,Sino: 5, text: "Contribute to team code infrastructure and make recommendations for improvements" },
        { id: 6,Sino: 6, text: "Effectively communicate their individual work" },
        { id: 7,Sino: 7, text: "Provide team and engineering tech mentorship and contribute to overall architecture" },
      ]
    },
    {
      id: 2,
      title: 'Department',
      subContents: [
        { id: 1, text: 'Technology and Services' }
      ]
    },
    {
      id: 3,
      title: 'Open Positions',
      subContents: [
        { id: 1, text: '10' }
      ]
    },
    {
      id: 4,
      title: 'Skills Required',
      subContents: [
        { id: 1, text: 'PHP CodeIgniter Framework, MySQL, ClickHouse' }
      ]
    },
    {
      id: 5,
      title: 'Role',
      subContents: [
        { id: 1, text: '' }
      ]
    },
    {
      id: 6,
      title: 'Required Experience, Skills, and Education',
      subContents: [
        { id: 1,Sino: 1, text: "7+ years of experience" },
        { id: 2,Sino: 2, text: "An analytical mind with a strong grasp of algorithms and data structures" },
        { id: 3,Sino: 3, text: "Experience with PHP - CodeIgniter Framework, MySQL, ClickHouse" },
        { id: 4,Sino: 4, text: "Interest and ability to learn new languages and technologies as needed" },
        { id: 5,Sino: 5, text: "Interest in working on an agile/lean team" },
        { id: 6,Sino: 6, text: "Experience or interest in developing and maintaining distributed systems" },
        { id: 7,Sino: 7, text: "Prior experience handling reliability, troubleshooting, and day-to-day deployment/monitoring operations for the products that you developed" },
        { id: 8,Sino: 8, text: "A proven track record of self-motivation and determination to learn" },
        { id: 9,Sino: 9, text: "Working proficiency and communication skills in verbal and written English" },
        { id: 10,Sino: 10, text: "Willingness to learn from and to teach your colleagues" },
      ]
    },
    {
      id: 7,
      title: 'Location',
      subContents: [
        { id: 1, text: 'Nagercoil, Tamil Nadu, India' }
      ]
    },
    {
      id: 8,
      title: 'Education/Qualification',
      subContents: [
        { id: 1, text: 'Any UG degree' }
      ]
    },
    {
      id: 9,
      title: 'Desired Skills',
      subContents: [
        { id: 1, text: 'PHP CodeIgniter Framework, MySQL, ClickHouse' }
      ]
    },
    {
      id: 10,
      title: 'Years of Experience',
      subContents: [
        { id: 1, text: '7 to 11' }
      ]
    },
    {
      id: 11,
      title: 'Designation',
      subContents: [
        { id: 1, text: 'Senior Software Engineer' }
      ]
    },
  ]
}];


export const DesImage = [{id:1,imgUrl:DesImg}]



