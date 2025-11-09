import { personal } from "../sections/personal.js"; 
import { contact } from "../sections/contact.js"; 
import { nav } from "../components/nav.js"; 

const main = document.querySelector("main");

main.prepend(nav); 
main.append(personal);  
main.append(contact);   

