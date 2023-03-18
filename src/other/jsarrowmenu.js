(function () {
let altering_menu = document.getElementById('alter_menu');
let aing_menu=document.getElementById('a_menu');
let aing_button=document.querySelector('.cicon_fake');
let aing_arrow=document.querySelector('.iarrow');
let info_style;
let matrixArray;
var scaleY;

let Visible = [document.querySelector('[Fondo="Mimg1"]'),document.querySelector('[Fondo="Mimg2"]'),document.querySelector('[Fondo="Mimg3"]')];
let Oculto = [document.querySelector('[Fondo="Oimg1"]'),document.querySelector('[Fondo="Oimg2"]'),document.querySelector('[Fondo="Oimg3"]')];
let Fimg = [document.querySelector('.cpart1'),document.querySelector('.cpart2'),document.querySelector('.cpart3')];



altering_menu.addEventListener('click', (event)=>changeNav());

function changeNav(){
	info_style = getComputedStyle(aing_arrow).transform;
	matrixArray = info_style.replace("matrix(", "").split(",");
	scaleY = parseFloat(matrixArray[3]);

	aing_menu.classList.toggle('modification_menu');


	if(scaleY == -1){
		aing_button.style.paddingTop='0px';
		aing_arrow.style.transform='scaleY(1)';
	}else if(scaleY == 1){
		aing_button.style.paddingTop='5px';
		aing_arrow.style.transform='scaleY(-1)';
	}else{
		console.log('error');
	}

}

for (var i = Visible.length - 1; i >= 0; i--) {
	let n = i;
	Visible[i].addEventListener('click', (event)=>FVisible(n));
	Oculto[i].addEventListener('click', (event)=>FOculto(n));
}
function FVisible(n){
	Oculto[n].classList.toggle('hide_aporte');
	Visible[n].classList.toggle('hide_aporte');
	Fimg[n].classList.remove('cpart_o');
}
function FOculto(n){
	Oculto[n].classList.toggle('hide_aporte');
	Visible[n].classList.toggle('hide_aporte');
	Fimg[n].classList.add('cpart_o');
}
})()