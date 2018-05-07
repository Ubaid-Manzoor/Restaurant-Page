import {LoadHomePage,LoadHomePageContent} from '../dist/home.js';

import {LoadAboutContent} from '../dist/about.js';

import {EraseMainContent} from '../dist/mainContent.js';

import {LoadMenu} from '../dist/menu.js';

import {LoadContacts} from '../dist/contact.js';

LoadHomePage(); 
console.log("sad");
(()=>{
    let Home_Button = document.getElementsByClassName('Home_button')[0];
    let About_Button = document.getElementsByClassName('About_button')[0];
    let Menu_Button = document.getElementsByClassName('Menu_button')[0];
    let Contact_Button = document.getElementsByClassName('Contact_buton')[0];
    const ResetMenuColor = ()=>{
        let AllButton = document.querySelectorAll('li');
        console.log(AllButton);
        AllButton.forEach((button)=>{
            button.style.background = "#fff";
        });
    }
    console.log(Home_Button);
    console.log(About_Button);
    console.log(Menu_Button);
    console.log(Contact_Button);
    Home_Button.onclick = ()=>{
        EraseMainContent();
        ResetMenuColor();
        LoadHomePageContent();
        Home_Button.style.background = "#cbcbcb";
    };
    About_Button.onclick = ()=>{
        EraseMainContent();
        ResetMenuColor();
        LoadAboutContent();
        About_Button.style.background = "#cbcbcb";
    };
    Menu_Button.onclick = ()=>{
        EraseMainContent();
        ResetMenuColor();
        LoadMenu();
        Menu_Button.style.background = "#cbcbcb";
    };
    Contact_Button.onclick = ()=>{
        EraseMainContent();
        ResetMenuColor();
        LoadContacts();
        Contact_Button.style.background = "#cbcbcb";
    };
})();