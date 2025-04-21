vamos criar uma nova seção, essa seção vai ter uma classe chamada plans
dentro dela teremos um h2 com a classe title--big
com a mensagem escolha o seu plano

logo abaixo vamos criar uma ul com a class plans__list
contendo 1 li com a classe plans__list_item
e dentro teremos uma imagem com o seguinte caminho
./dist/images/logos/disneyplus_underline.png

agora vamos usar a tag strong para falar que esse texto é importante, essa tag tera a class title--small com a seguinte mensagem R$ 27,90
<strong class="title--small">R$ 27,90/mês*</strong>

logo apos teremos um paragrafo com a class= text--big e a seguinte mensagem
No Disney+ você encontra as últmas estreias do cinema, originais e clássicos inesquecíveis.

depois teremos um botão com a menssagem assine agora
<button>Assine agora</button>

agora em style vamos criar um novo arquivo chamado
_plans.scss

vamos colocar a classe da seção e definirmos um padding para ela de 5.5vw
.plans{
    padding: 5.6vw;
}

agora vamos importalo no nosso arquivo main.scss usando
@use 'plans.scss';

agora vamos centralizar o titulo e no arquivo plans.scss vamos definir o h2 como text-align: center

h2{
    text-align: center
}

agora no html vamos copiar mais duas vezes o nosso li

colocamos a class &__list dentro de h2 e atribuimos um display: flex , justify-content: space-around, margin-top: 50px;
&__list{
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
}

agora dentro de &__item vamos usar um pseudo seletor para pegar o segundo item da lista usamos o &:nth-child(2) e dentro do pseudo codigo vamos atribuir um background-image: url(../images/fundo_combo_plus.png), vamos atribuir a propriedade background-repeat: no-repeat e background-size: contain;
&:nth-child(2){
    background-image: url(../images/fundo_combo_plus.png);
    background-repeat: no-repeat;
    background-size: contain;
}

agora vamos usar a tag img dentro de &__list e vamos definit um height de 83px;

img{ height: 83px;}

dentro de &__list vamos colocar a class &__item e atribuirmos , text-align: center, padding: 60px 44px 44px, max-width: 380px; width: 100%

&__item{
    text-align: center;
    padding: 60px 44px 44px;
    max-width: 380px;
    width: 100%;
}

dentro de &__item vamos colocar a class strong e atribuirmos display: block, margin-top: 24px;

strong{
    display: block;
    margin-top:24px;
}

agora no html vamos criar um paragrafo com a class text--small depois de ul com a seguinte menssagem
* O preço pode varias caso a assinatura seja feita através de outras plataformas.

 agora vamos centralizar esse paragrafo, no _plans.scss depois do &__list vamo usar a tag p e atribuirmos text-align center
 p{
    text-align: center;
 }

 agora vamos adicionar os logos nas imagens das lis da seção plans, o segundo logo tera a imagem logos/disney_plus_sm.png

 o terceiro logo tera  a imagem disney_star_plus_starzplay_undeline.png

 agora vamos no arquivo _hero.scss e vamos recortar como o botão e vamos criar uma class no man.scss chamada de .button e vamos atribuir tada a configuração do botão 

 agora no html vamos atribuir a classe button para todos os botoes

 agora no arquico _shows dentro da class .shows colocamos um min-height: 50vw; 
