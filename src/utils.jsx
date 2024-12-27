

export const Menus = [
    {
        name: "Home",
        subMenu: [
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about-us" },
            { name: "Print Media", path: "/print-media" },
            { name: "Our Team", path: "/our-team" },
            { name: "Our Technologies", path: "/our-technologies" },
                // { name: "Ezi Soft Code", path: "/ezi-soft-code"},
                {
                    name: "Ezi-Soft-Code",
                    external: true,
                    url: "https://ezisc.com/",
                  },
        ],
        gridCols: 2,
    },

    {
        name: "Services", 
        subMenu: [
            { name: "Web Development", external: true , url: "https://ezisc.com/downloads/category/web-deisgn/" },
            { name: "App Development", external:true  , url: "https://ezisc.com/downloads/category/mob-app/" },
            { name: "Print & Mediaa", external: true , url: "https://ezisc.com/downloads/category/prnmed/" },
            { name: "Cloud & Services",external:true , url: "https://ezisc.com/" },
            { name: "SEO", path: "/SEO" },
            { name: "Social Media & Marketing", external:true , url: "https://ezisc.com/downloads/category/digmar/" },
            { name: "Video Design", external:true , url: "https://ezisc.com/downloads/category/vidanim/" },
            { name: "3D Solution", external:true , url: "https://ezisc.com/downloads/category/3d/?orderby=popular" },
            { name: "Artificial Intelligence", external:true ,  url: "https://www.eziline.com/artificial-intelligence-2/" },
        ],
        gridCols: 2,
    },

    {
        name:"Portfolio",
        subMenu:[
            {
                name:"Client Website" , external:true , url: "https://www.eziline.com/website-portfolio/"
            },
            {
                name:"Vedio Design" , external:true , url: "https://www.eziline.com/video-portfolio/"
            },
            {
                name:"Desktop application" , external:true , url: "https://www.eziline.com/desktop-applications/"
            },
            {
                name:"Logo Portfolio" , external:true, url: "https://www.eziline.com/logo-portfolio/"
            },
            {
                name:"Web Applications" , external:true , url: "https://www.eziline.com/web-applications/"
            },
            {
                name:"AI Utilities" ,external:true , url: "https://www.eziline.com/ai-utilities/"
            },
            {
                name:"Mobile Application" ,external:true,  url: "https://www.eziline.com/mobile-applications/"
            },
            {
                name:"360 Walkthrough" , external:true , url: "https://www.eziline.com/360-walkthrough-portfolio/"
            },
            {
                name:"Games Portfolio" ,external:true , url: "https://www.eziline.com/games-portfolio/"
            },
        ],
        gridCols:2,
    },

    {
        name:"Ezi Updates",
        subMenu:[
            {
              name:"Events & Conference" ,external:true , url: "https://www.eziline.com/category/news/events-conferences/"
            },
            {
                name:"International Affairs" , external:true , url: "https://www.eziline.com/category/news/international-affairs/"
            },
            {
                name:"Life at Eziline" , external:true , url: "https://www.eziline.com/category/life-at-eziline/"
            },
            {
                name:"MoU,s & JV,s" , external:true , url: "https://www.eziline.com/category/mous/"
            },
        ],
        gridCols:2,
    },

    {
        name:"SOFTWARES",
        subMenu:[
            {
                name:"WEB APPLICATION" , path: "/Web-Application"
            },
            {
                name:"MOBILE APPLICATION" , path: "/Mobile-Application"
            },
            {
                name:"OTHERS" , path: "/Others"
            },
        ],
    },

    {
        name:"LOGIN",
        subMenu:[
            {
                name:"My Project Panel"  , external:true , url: "https://ezitasker.com/"
            },
            {
                name:"SMS Portal" ,  external:true , url: ""
            },
            {
                name:"Domain Search" ,  external:true , url: "https://eziline.supersite2.myorderbox.com/"
            },
            {
                name:"Domain Login" ,  external:true , url: ""
            },
        ],
        gridCols:2,
    },


    {
        name:"Contact",
        subMenuHeading:["james" , "div-gray"],
        subMenu: [
            {
                name:"Careers"  , external:true , url: "https://www.eziline.com/career/"
            },
            {
                name:"InterShip" , external:true , url: "https://www.eziline.com/internship/"
            },
            {
                name:"Skilled Course" , external:true , url: "https://ezitech.org/"
            },
            {
                name:"Help Desk" , external:true , url: "https://www.eziline.com/helpdesk/"
            },
        ],

        gridCols:2,
    },
]
