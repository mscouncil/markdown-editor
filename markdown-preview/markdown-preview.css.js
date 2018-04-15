module.exports = `
*, *::before, *::after { 
  box-sizing: border-box }
  
:host {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0%;
  top: 0%;
  background: rgb(250,250,250);
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
  border: 1px solid rgb(204, 204, 204);
  padding: 10px; 
  font-family: inherit;
  font-size: inherit; 
  overflow-y: scroll;
  box-sizing: border-box; 
  color: rgb(51, 51, 51);
  text-align: left;
  border-radius: 3px; }

:host(.simple) {
  box-shadow: none;
  position: static;
  box-shadow: none;
  border: none;
  background: none;
  padding: 0; }

  :host > div {
    line-height: inherit;
    font-size: 14px; }

  :host > div > *:first-child {
    margin-top: 0px; }

  :host > div h1 {
    padding: 10px 0;
    border-bottom-color: rgb(238, 238, 238);
    border-bottom-style: solid;
    border-bottom-width: 1px; }

  :host > div a[href] {
    text-decoration: none;
    color: #4183c4; }

  :host > div a[href]:hover {
    text-decoration: underline;
    color: #4183c4; }

:host(.brief) {
  overflow: hidden;
  opacity: 0.8;
  font-weight: 400; 
  font-size: 8px; }
    
  :host(.brief) > div {
    line-height: 23px;
    display: inline-flex; }

  :host(.brief) > div > * {
    display: none; }

  :host(.brief) > div > p:first-of-type {
    display:block;
    font-size: 12px;
    font-weight: normal; 
    pointer-events: none;
    color: rgb(51,51,51); 
    margin: 0;
    padding: 0; }
`