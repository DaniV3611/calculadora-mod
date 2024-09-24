import "./style.css";
import "./calc_styles.css";
import { addKeyListeners } from "./keyboardEvents";

let keys = document.getElementsByClassName("number");

addKeyListeners(keys);
