const lista = ['gojo','kento','megumi','nobara','sukuna']

$('.option').on('click',function(event){
    var nome = $(this).data('value');
    removeAll()
    addClasses(nome)
});

function removeAll(){
    lista.forEach((nome) => $(`#${nome}`).addClass('display-none') & $(`#option-menu-${nome}`).removeClass('option-selected'));
}

function addClasses(nome){
    $(`#${nome}`).removeClass('display-none')
    $(`#option-menu-${nome}`).addClass('option-selected')
}