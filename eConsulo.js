

const accordeon = document.getElementsByClassName('contentBx');
for (i = 0; i < accordeon.length; i++) {
    accordeon[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
}


window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
  }
