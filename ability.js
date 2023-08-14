const htmlEnter = document.querySelector('.html-enter');
const jsEnter = document.querySelector('.js-enter');
const cssEnter = document.querySelector('.css-enter');
const reactEnter = document.querySelector('.react-enter');
const githubEnter = document.querySelector('.github-enter');
const gitEnter = document.querySelector('.git-enter');

htmlEnter.onmouseenter = e => {
    document.getElementById('details-html').style.display = "block"; ;
    document.getElementById('descrition').style.display = "none";
}
htmlEnter.onmouseout = e => {
    document.getElementById('details-html').style.display = "";
    document.getElementById('descrition').style.display = "block";
}



jsEnter.onmouseenter = e => {
    document.getElementById('details-js').style.display = "block";
    document.getElementById('descrition').style.display = "none";
}
jsEnter.onmouseout = e => {
    document.getElementById('details-js').style.display = "";
    document.getElementById('descrition').style.display = "block";
}



cssEnter.onmouseenter = e => {
    document.getElementById('details-css').style.display = "block";
    document.getElementById('descrition').style.display = "none";
}
cssEnter.onmouseout = e => {
    document.getElementById('details-css').style.display = "";
    document.getElementById('descrition').style.display = "block";
}



reactEnter.onmouseenter = e => {
    document.getElementById('details-react').style.display = "block";
    document.getElementById('descrition').style.display = "none";
}
reactEnter.onmouseout = e => {
    document.getElementById('details-react').style.display = "";
    document.getElementById('descrition').style.display = "block";
}



githubEnter.onmouseenter = e => {
    document.getElementById('details-github').style.display = "block";
    document.getElementById('descrition').style.display = "none";
}
githubEnter.onmouseout = e => {
    document.getElementById('details-github').style.display = "";
    document.getElementById('descrition').style.display = "block";
}



gitEnter.onmouseenter = e => {
    document.getElementById('details-git').style.display = "block";
    document.getElementById('descrition').style.display = "none";
}
gitEnter.onmouseout = e => {
    document.getElementById('details-git').style.display = "";
    document.getElementById('descrition').style.display = "block";
}