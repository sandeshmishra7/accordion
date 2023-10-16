var accordion = document.querySelectorAll('.accordion');
var panel = document.querySelectorAll('.accordion + .panel');
var show = document.querySelector('.show');
var hide = document.querySelector('.hide');


accordion.forEach((element, index) => {
    // panel.classList.remove('dropdown');
    element.addEventListener('click', function () {
        panel[index].classList.toggle('dropdown');
    });
    if(panel[index].classList.contains('dropdown')){
        panel[index].classList.remove('show');
        panel[index].classList.add('hide');
    } else {
        panel[index].classList.remove('hide')
    }
});


