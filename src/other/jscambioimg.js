(function () {
	const SeMenuSltr = [document.querySelector('[MenuImagen="SeE1MenuImg"]'),document.querySelector('[MenuImagen="SeE2MenuImg"]'),document.querySelector('[MenuImagen="SeE3MenuImg"]'),document.querySelector('[MenuImagen="SeE4MenuImg"]')];
	const ImgSltr = [document.querySelector('[Imagenes="E1Img"]'),document.querySelector('[Imagenes="E2Img"]'),document.querySelector('[Imagenes="E3Img"]'),document.querySelector('[Imagenes="E4Img"]')];
	const AporteSltr = ImgSltr


	let MActual = [];
	let IActual = [];
	let AActual = [];
	let MAnterior = [];
	let IAnterior = [];
	let AAnterior = [];

	SeMenuSltr[0].children[0].classList.toggle('ch_bgc');
	ImgSltr[0].classList.toggle('e1_eimage1');
	AporteSltr[0].children[0].classList.toggle('hide_aporte');
	MAnterior[0] = SeMenuSltr[0].children[0];
	IAnterior[0] = 'e1_eimage1';
	AAnterior[0] = AporteSltr[0].children[0];

	SeMenuSltr[1].children[0].classList.toggle('ch_bgc');
	ImgSltr[1].classList.toggle('e2_eimage1');
	AporteSltr[1].children[0].classList.toggle('hide_aporte');
	MAnterior[1] = SeMenuSltr[1].children[0];
	IAnterior[1] = 'e2_eimage1';
	AAnterior[1] = AporteSltr[1].children[0];

	SeMenuSltr[2].children[0].classList.toggle('ch_bgc');
	ImgSltr[2].classList.toggle('e3_eimage1');
	AporteSltr[2].children[0].classList.toggle('hide_aporte');
	MAnterior[2] = SeMenuSltr[2].children[0];
	IAnterior[2] = 'e3_eimage1';
	AAnterior[2] = AporteSltr[2].children[0];

	SeMenuSltr[3].children[0].classList.toggle('ch_bgc');
	ImgSltr[3].classList.toggle('e4_eimage1');
	AporteSltr[3].children[0].classList.toggle('hide_aporte');
	MAnterior[3] = SeMenuSltr[3].children[0];
	IAnterior[3] = 'e4_eimage1';
	AAnterior[3] = AporteSltr[3].children[0];


	function cambio(s,i,a,m){
		if(MAnterior[m]!=s){
			MAnterior[m].classList.toggle('ch_bgc');
			s.classList.toggle('ch_bgc');
			ImgSltr[m].classList.toggle(IAnterior[m]);
			ImgSltr[m].classList.toggle(i);
			AAnterior[m].classList.toggle('hide_aporte');
			a.classList.toggle('hide_aporte');

			IAnterior[m] = i;
			MAnterior[m] = s;
			AAnterior[m] = a;
		}
	}


	for (var i = SeMenuSltr[0].children.length - 1; i >= 0; i--) {
		let mactual = SeMenuSltr[0].children[i];
		let iactual = 'e1_eimage'+(i+1);
		let aactual = AporteSltr[0].children[i]
		SeMenuSltr[0].children[i].addEventListener('click', (event)=>cambio(mactual,iactual,aactual,0));
	}
	for (var i = SeMenuSltr[1].children.length - 1; i >= 0; i--) {
		let mactual = SeMenuSltr[1].children[i];
		let iactual = 'e2_eimage'+(i+1);
		let aactual = AporteSltr[1].children[i]
		SeMenuSltr[1].children[i].addEventListener('click', (event)=>cambio(mactual,iactual,aactual,1));
	}
	for (var i = SeMenuSltr[2].children.length - 1; i >= 0; i--) {
		let mactual = SeMenuSltr[2].children[i];
		let iactual = 'e3_eimage'+(i+1);
		let aactual = AporteSltr[2].children[i]
		SeMenuSltr[2].children[i].addEventListener('click', (event)=>cambio(mactual,iactual,aactual,2));
	}
	for (var i = SeMenuSltr[3].children.length - 1; i >= 0; i--) {
		let mactual = SeMenuSltr[3].children[i];
		let iactual = 'e4_eimage'+(i+1);
		let aactual = AporteSltr[3].children[i]
		SeMenuSltr[3].children[i].addEventListener('click', (event)=>cambio(mactual,iactual,aactual,3));
	}
})()