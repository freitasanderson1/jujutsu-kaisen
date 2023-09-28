$('#option-gojo').on('click',function(event){
    removeAll()
    addClasses('gojo')
});

$('#option-kento').on('click',function(event){
    removeAll()
    addClasses('kento')
});

$('#option-megumi').on('click',function(event){
    removeAll()
    addClasses('megumi')
});

$('#option-nobara').on('click',function(event){
    removeAll()
    addClasses('nobara')
});

$('#option-sukuna').on('click',function(event){
    removeAll()
    addClasses('sukuna')
});

let listaPersonagem = ['gojo','kento','megumi','nobara','sukuna']

function removeAll(){
    // console.log('removendo')
    $('#gojo').addClass('display-none')
    $('#kento').addClass('display-none')
    $('#megumi').addClass('display-none')
    $('#nobara').addClass('display-none')
    $('#sukuna').addClass('display-none')

    $('#option-menu-gojo').removeClass('option-selected')
    $('#option-menu-kento').removeClass('option-selected')
    $('#option-menu-megumi').removeClass('option-selected')
    $('#option-menu-nobara').removeClass('option-selected')
    $('#option-menu-sukuna').removeClass('option-selected')
}

function addClasses(nome){
    // console.log('adicionando')
    $(`#${nome}`).removeClass('display-none')
    $(`#option-menu-${nome}`).addClass('option-selected')
}