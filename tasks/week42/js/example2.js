let freshKale = document.createElement("li");
let emphasis = document.createElement('em');
let emphasis2 = document.createElement('em');
emphasis.append("fresh");
emphasis2.append("fresh");
freshKale.append(emphasis, " kale");

let freshFigs = document.createElement('li');
freshFigs.append(emphasis2, " figs");


let elList = document.querySelector('ul');
elList.before(freshKale);
elList.after(freshFigs);

for (item of elList) {
    item.className = "cold";
}