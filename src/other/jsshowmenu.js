(function () {
	const SHMenuSltr = document.querySelector('[ShowHide="SHMenu"]');
	const AlteringSpaceSltr = document.querySelector('[Altering="Acspace"]');
	const AlteringMenuSltr = document.querySelector('[Altering="AMenu"]');
	const IdMenuSltr =  document.getElementById('a_menu');
	const IconSltr = document.querySelector('.icon');
	const IdMainSltr =  document.getElementById('Amain');
	const IdIconRSltr= document.getElementById('a_icon_r');
	const IdAporteSltr= document.getElementById('a_aporte');
	const mainHei = document.body.children[1].clientHeight;
	const IdFooterSltr =  document.getElementById('Afooter');
	let ShowCnavClass;

	const menu_elements = document.querySelectorAll('.menu_button');
	let comprobar=0;
	
	SHMenuSltr.addEventListener('click', (event)=>ShowHideMenu());

	function ShowHideMenu(){
		if(comprobar==0){
			ShowMenu();
			comprobar=1;
		}else if(comprobar==1){
			HideMenu()
			comprobar=0;
		}
	}
	function ShowMenu(){	
		
		AlteringSpaceSltr.classList.add('bg_cspace');
		AlteringMenuSltr.classList.add('show_cnav');

		ShowCnavClass = document.querySelector('.show_cnav');

		IdMenuSltr.style.backgroundColor='rgb(67,27,27)';
		IconSltr.style.backgroundColor='#8b8b8b';
		IdMainSltr.style.opacity='.5';
		IdIconRSltr.classList.add('disable_interaction');
		IdAporteSltr.classList.add('disable_interaction');
		ShowCnavClass.style.height=mainHei+'px';

		IdFooterSltr.style.opacity='.5';
	}
	function HideMenu(){
		ShowCnavClass.style.removeProperty('height');
		AlteringSpaceSltr.classList.remove('bg_cspace');
	    AlteringMenuSltr.classList.remove('show_cnav');
	    IdMenuSltr.style.backgroundColor='rgb(104, 42, 42)';
	    IconSltr.style.backgroundColor='white';
	    IdMainSltr.style.opacity='1';
	    IdIconRSltr.classList.remove('disable_interaction');
	    IdAporteSltr.classList.remove('disable_interaction');
	    IdFooterSltr.style.opacity='1';
	}

	window.addEventListener('click', function(e) {
	  if (AlteringMenuSltr.contains(e.target) || AlteringSpaceSltr.contains(e.target)){
	  	if(menu_elements[0].contains(e.target) || menu_elements[1].contains(e.target) || menu_elements[2].contains(e.target) || menu_elements[3].contains(e.target) || menu_elements[4].contains(e.target)){
	  		if(comprobar==1){
				HideMenu()
				comprobar=0;
			}
	  	}
	  } else {
	  	if(comprobar==1){
			HideMenu()
			comprobar=0;
		}
	  }
	})
})()