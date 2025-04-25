primeiro precisamos remover o h1 da classe hero__content__branding e subistituir por uma div

logo apos o body vamos criar um header com a classe header
dentro dele teremos uma div com a  classe header__container
dentro da div header__container vamos colocar um h1 
dentro do h1 com a  vamos colocar uma imagem com a classe header__log
./dist/images/disneyplus.svg

logo abaixo do h1 vamos colocar a listagem dos links para isso vamos usar a tag ul com a classe header__links
dentro dela teremos dois lis com  a classe header__links__item e links dentro

vamos adicionar a mesma classe que ja aviamos usados nos bottões a classe button nos nossos links

ul class="header__links"
    li class="header__links__item 
        a heref="#" class"button" Assine agora
    li
ul/
ul
    li  header__links__item 
        a heref="#" class"button"Entrar
    li
ul/

agora vamos criar um novo arquivo para extilizar o header em style vamos criar um novo arquivo chamado _header.scss depois vamos fazer a  importação desse arquivo no nosso main.scss usando @ use 'header'

agora vamos colocar as classes no nosso arquivo de styles header

vamos colocar um .header dentro dele as seguintes classes; &__container, &__logo, &__links,

dentro do links teremos a classe &__item

.header{
    &__container{}
    &__logo{}
    &__links{
        &__item{

        }
    }
}

agora dentro do container vamos definir um padding de largura de 8px e 36px
um display flex, um justify-content spece-between,

precisamos ajustar o tamanho da imagem  e para isso em &__logo vamos colocar um max-widht de 80px; com um width de 100%

dentro do &__links também vamos ter um display flex
agora precisamos ir no arquivo de estilos do _hero e logo a pos o container .hero vamos colocar um bottom com margin top de 2vw e uma margem bottom de 8px

agora vamos no main.scss e em button vamos remover esses dois estilos que acabamos de colocar no hero
margin-top 2vw e margin-bottom 8px

precisamos adicionar também  o text-decoration none, letter-spacing de 1px, para que seja removido  estilo do bottom, vamos adicionar também um padding de 8px 14px

dentro do nosso .button precisamos colocar dois modificadores o &--seconday e  o &--dark

agora no arquivo de variaveis precisamos criar uma nova variavel chamada $corDeFundoBotaoPrimario: #6421ff;

agora precisamos subistituir a cor  de fundo do botton do nosso arquivo main.scss, em background-color definimos como variaveis.$corDeFundoBotaoPrimario,

agora vamos criar uma nova variavel para definir  a cor de fundo do botão secundario e para isso vamos novamente em nosso documento de variaveis e vamos definir a variavel $corDeFundoBotaoSecundario e vamos definir a cor como #0063e5;

agora voltando em nosso arquivo main.scss vamos em &--secondary e vamos definir o background-color como variaveis.$corDeFundoBotaoSecundario

voltando ao arquivo de variaveis vamos definir uma nova variavel com o nome $corDeFundoBotaoDark e definir a cor #000;
agora no nosso html no link com a clsse de button e a menssagem assine agora  dentro do header vamos definir mais uma classe button--secondary
vamos criar mais uma  variavel para colocar essa cor,

agora na classe &--dark que colocamos dentro de bottom vamos definir uma cor de fundo usando a variavel $corDefundoBotaoDark
dentro de dark vai ficar da seguinte forma 

background-color: rgba(variaveis.$corDefundoDark, 0.8)

agora no nosso segundo botão do nosso header vamos aplicar essa classe usanod button--dark

ainda no main.scss em nosso resete precisamos colocar o style list-style com none

agora voltando ao nosso arquivo de estilos do _header na tag de &__item vamos colocar uma margin de 5px

precisamos adicionar uma borda no nosso .button do mains.scss e vai ter a seguinte confuguração 
border: 1px solid variaveis.$corDeFundoBotaoPrimario;

dentro do &--secondary vamos definir a cor da borda usando border-color: variaveis.$corDefundoBotaoSecundario

precisamos também definir  a classe &:hover dentro de &--secondary e definir a cor de fundo 

background-color:lighten(variaveis.$corDeFundoBotaoSecundario, 3%)

no &--dark vamos definir a borda também usando 
border-color: variaveis.$corTextoSecundario;

agora dentro do dark vamos colocar a classe &:hover e definir a cor de fundo dela usando background-color: variaveis.$corDeFundoBotaoDark, a cor vai ser variaveis.$corDeFundo

precisamos definir dentro da classe .button em main.scss o &:hover e definir a cor de fundo 
background-color lighten(variaveis.$corDefundoBotaoPrimario, 3%)

voltando ao _header dentro de .header vamos definir a configuração do button e vamos colocar um height de 50px

voltando para o a tag .button do main.scss vamos substituir o display block por display: flex e vamos colocar um align-items: center, precisamos adicionar também o justify-content center

agora vamos adicionar uma margin no &__logo essa margin vai ser de 5px

agora no nosso arquivio __header.scss vamos criar uma nova classe para definir os itens do cameçalho que fivaram invisivel a classe vai se chamar .hidden e vamos adicionar a propriedade visibility com o valor hidden

agora no nosso index vamos adicionar essa classe para nossos elementos do header, precisamos adicionar no h1, link com a classe header__links__item, adicionamos a classe hidden

voltando ao arquivo _header dentro da classe .header precisamos definir como position:sticky, top: 0 e left: 0 também

agora vamos no nosso main.js e vamos definir uma const  com o nome heroSection e vamos buscar a primeira classe com o nome .hero usando document.querySelector('.hero')

precisamos saber a altura desse elemento e para isso usamos a classe que acabamos de criar heroSelection e colocamos .clintHeight e colocamos essa informação dentro de uma noca const chamada alturaHero

const heroSelection = document.querySelector('.hero');
const alturaHero = heroSelection.clientHeight;

agora precisamos identificar quando o usuario rola (scroll) a pagina e para isso usamos a propriedade
window.addEventListener('scroll',)

vamos definir uma function(){
    e dentro dela para localizarmos a posição do scroll usamos window.scrolly precisamos colocar-la em uma const e vamos chama-la de const posicaoAtual = window.scrolly e logo abaixo vamos colocar o nosso if
    ele vai comparar se a posição tual é menor do que a altura do hero
}

const heroSection = document.querySelector('.hero');
const alturaHero = heroSelection.clientHeight;

window.addEventListener('scroll' function(){
    const posicaoAtual = window.scrollY;

    if (posicaoAtual < alturaHero) {
        const.log("ocultar os elementos")
    }
})

agora no _header vamos remover a classe .hidden pois ele foi apenas para exemplificar o que iriamos fazer e no html precisamos remove-la do link e do h1

agora no nosso arquivo _header e dentro da tag .header vamos criar mais uma classe chamada &--is-hidden
e vamos aplicar um background transparent, e dentro dessa tag vamos usar a classe .header e dentro dela .__logo, &__links__item:first-child e ele vai ter  um opacity de 0 e visibility: hidden

&--is-hidden{
    background-color:transparent

    .header{
        &__logo, &__links__item:first-child{
            opacity: 0;
            visibility: hidden;
        }
    }
}



e dentro do nosso header vamos aplicar o background e definimos ele com a nossa variavel.$corDeFundo

precisamos fazer a importação do arquivo de variaveis em nosso _header.scss e fazemos isso usando @use 'variaveis'

agora no main.js precisamos adicionar uma função para adicionar a classe que criamos e essa classe tem a função de ocultar os elementos

essa função vai ter o nome de ocultaElementosDoHeader e precisamos colocar o elemento header em uma const e para isso usamos const header = document.querySelector('header')
 e para adicionarmos a classe usamos header.classList.add('header--is-hidden')

 function ocultaElementosDoHeader(){
    const header= document.querySelector('header');
    header.classList.add('header--is-hidden');
 }

 precisamos fazer uma função que vai fazer o contrario da função de ocultarElementosDoHeader e para isso basta copiarmos a mesma fução e trocarmos o nome dela e ao inves de falarmos para ela adicionar a classe vamos falar para ela remover a classe

 function exibeElementosDoHeader(){
    const header= document.querySelector('header');
    header.classList.remove('header--is-hidden');
 }

 agora em nosso if que vamos subistituir o nosso console.log pela função ocultaElementosDoHeader

 agora no nosso _header vamos na classe &__logo e vamos definir uma trnsition com o valor de opacity .5s ease
 e vamos usar a mesma transição no &__item

 transition: opacity .5s ease

 na classe header vamos colocar transition: background-color .5s ease;

 vamos colocar a mesma classe para &--is-hidden transition: background-color .5s ease;

 e no &__logo, &__links__item:first-child vamos colocar transition: opacity .5 ease;

 agora no .header principal vamos adicionar a propriedade z-index: 1;