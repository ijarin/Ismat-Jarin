/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";

// Your Summary And Greeting Section

const greeting = {
  username: "Ismat Jarin",
  title: "Ismat Jarin",
  subTitle: (
    "Graduate Student|Graduate Research Assistant"
  ),
  //resumeLink:
    //"https://drive.google.com/file/d/1gsPhoU4Dg-bFSlf3K-SFrKHO0XTBpS0i/view?usp=sharing",
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/ijarin",
  //linkedin: "https://www.linkedin.com/in/bharatkammakatla",
  Google-Scholar: "https://scholar.google.com/citations?user=PHYu_7YAAAAJ&hl=en",
  //facebook: "https://www.facebook.com/bharat.kammakatla",
  //twitter: "https://twitter.com/Bharat__K",
};

// Your Skills Section

//const skillsSection = {
  //title: "What i do",
  //subTitle:
   // "HANDLING ALL TEST AUTOMATION ACTIVITIES AND EXPLORING DATA SCIENCE",
  //skills: [
    //emoji(
     // "⚡ Designing and developing Test Automation frameworks using Python and Java"
    //),
    //emoji("⚡ End to End automation executions"),
   // emoji(
   //   "⚡ Working on test automation tools like Selenium, Appium, UFT, SoapUI, AutoIT, Katalon Studio, Seetest Mobile Cloud administration, etc),
    //emoji  "⚡ Building predictive models to extract insights and make decisions out of data"), ],

  softwareSkills: [
    {
      skillName: "python",
      classname: "logos:python",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "java",
      classname: "logos:java",
      style: {
        backgroundColor: "transparent",
      },
    },

   
    {
      skillName: "tensorflow",
      classname: "logos-tensorflow",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "keras",
      classname: "simple-icons:keras",
      style: {
        backgroundColor: "white",
        color: "#D00000",
      },
    },

  ],
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Graduate Research Assistant",
      company: "University of Michigan-Dearborn",
      //companylogo: require("./assets/images/facebookLogo.png"),
      date: "September 2019 – April 2022",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ],
    },
    {
      role: "Visiting Research Scholar",
      company: "ISI, University of Southern California",
      //companylogo: require("./assets/images/quoraLogo.png"),
      date: "Summer 2021",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      role: "Graduate Student Instructot",
      company: "University of Michigan-Dearborn",
      //companylogo: require("./assets/images/airbnbLogo.png"),
      date: "September 2019 – April 2022",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
  display: true, // Set false to hide this section, defaults to true
};

// Your certifications



// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.bharatkammakatla.com/selenium-python-automation-framework-how-to-build-cke5vij9p012h9ds1fsaocyax",
      title: "How to build a Selenium Python Automation Framework",
      description:
        "Interested in building a test automation framework with selenium and python? If so, check out here !",
    },
    {
      url:
        "https://blog.bharatkammakatla.com/steps-to-build-a-selenium-java-framework-ckdsi73xg005ga9s1defhemfz",
      title: "Steps to build a Selenium Java Automation Framework",
      description:
        "Interested in building a test automation framework with selenium and java? If so, check out here !",
    },
    {
      url:
        "https://blog.bharatkammakatla.com/face-expression-recognition-using-keras-and-cnns-ckbevmufo0195dis1dfs10kt1",
      title: "Building a Machine Learning model to detect human emotions",
      description:
        "Are you interested to know how machines detect human emotions? If so, check out here !",
    },
    {
      url:
        "https://medium.com/@bharatkammakatla/basic-end-to-end-scikit-learn-workflow-cd9e9a50491b?source=friends_link&sk=b828ac262c172abd7508efcbd00e5bd3",
      title: "Basic End-to-End Scikit-Learn workflow",
      description:
        "Do you want to know how a basic end-to-end scikit-learn workflow is implemented ? If so, check out here !",
    },
  ],
};

const contactInfo = {
  title: ("Contact Me"),
  email_address: "jarin122147@gmail.com",
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  workExperiences,
  openSource,
  blogSection,
  contactInfo,
  certifications,
};
