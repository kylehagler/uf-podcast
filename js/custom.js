$('.toggle').click(function() {
	$( this ).parents( ".pod-card" ).toggleClass('open');
	$( this ).parents( ".pod-card" ).find(".collapse-content").toggleClass('shown');
});

const overlay = document.querySelector('.modal-overlay')
overlay.addEventListener('click', closeModal);

function toggleModal(transcriptText) {
	$('#transcript-content').html(transcriptText);
	const modal = document.querySelector('.modal');
  	modal.classList.toggle('opacity-0');
  	modal.classList.toggle('pointer-events-none');
}

function closeModal() {
	const modal = document.querySelector('.modal');
  	modal.classList.toggle('opacity-0');
  	modal.classList.toggle('pointer-events-none');
}
