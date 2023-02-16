function verificar(){ // function com a funcao de onclick
var data = new Date() // buscando a data completa
var ano = data.getFullYear() // introduzindo o ano completo na variavel (ano)
var fano = document.getElementById('txtano') // buscando os caracteres digitados no id(txtano) e introduzindo na var (txtano)
var res = document.querySelector('div#res') // buscando a (div#res) e introduzindo na var (res)
if (fano.value == 0 || Number(fano.Value) > ano ) { // condicao que se o valor do ano digitado pelo usuario for igual a 0 ou maior que o ano atual da [ERRO]
    window.alert('[ERRO] Verifique os dados e tente Novamente!') // mensagem em (alert) se a condicao acima se realizar
} else  { 
    fsex = document.getElementsByName('radsex') // aqui esta sendo inserido na var (fsex) a opcao que o usuario escolheu, entre (fem) e (mas)
    var idade = ano - Number(fano.value) // esta sendo guardado dentro da var (idade), a idade do usuario
    var genero = '' // criou-se a var (genero), para depois receber a resposta do usuario.
    var img = document.createElement('img') // metodo do js em criar o elemento imagem  para inseir no site
    img.setAttribute('id', 'foto') // esta dando o id para a foto

if (fsex[0].checked) { // se o radius (masculino) foi selecionado, (genero = homem)
    genero ="Homem"
    if (idade >=0 && idade < 10){
        //crianca
        img.setAttribute('src', 'homem-bebe.jpg')
    }else if (idade >= 10 && idade < 21) {
        //jovem 
        img.setAttribute('src', 'homem-jovem.jpg')
    }else if (idade < 50) {
        //adulto
        img.setAttribute('src', 'homem-adulto.jpg')
    }else {
        //idoso
        img.setAttribute('src', 'homem-idoso.jpg')
    }

}else if (fsex[1].checked) { //se o radius (FEMININO) foi selecionado, (genero = MULHER)
    genero = 'Mulher'
    if (idade >=0 && idade < 10){
        //crianca
        img.setAttribute('src', 'mulher-bebe.jpg')
    }else if (idade >= 10 && idade < 21) {
        //jovem
        img.setAttribute('src', 'mulher-jovem.jpg')
    }else if (idade < 50) {
        //adulto
        img.setAttribute('src','mulher-adulta.jpg')
    }else {
        //idoso
        img.setAttribute('src','mulher-idosa.jpg')
    }
}
res.style.textAlign = 'center'
res.innerHTML = ` ${genero} com ${idade} anos`
img.style.width = ' 250px'
img.style.height = '250px'
img.style.borderRadius ='50%'
img.style.padding = '30px'
res.appendChild(img)
} 

}