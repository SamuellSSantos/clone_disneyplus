vamos codiar a seção da aula anterior e vamos mudar a imagem para fundo rei leao.png

vamos mudar o titulo para baixe filmes e series

e vamos mudar o paragráfo para
Baixe e assista quando e onde quiser. Assim, seus favoritos estão sempre com você, até mesmo sem internet.

agora vamos recortar a classe que criamos em _watch-anywhere e trazer para o main.scss e vamos dar o nome dessa class de image-text-section

depois disso podemos excluir o arquivo que criamos _watch-anywhere.scss 

precisamos retirar a importação do arquivo _watch-anyhere do main.scss

agora vamos trocar a classe do bloco anterior de watch-anywhere para image-text-section

vamos usar essa classe image-text-section também na seção que acabamos de criar

fazendo isso acabamos perdendo expassamento da imagem da div  anterior e para corrigir isso precisamos definir uma definir a classe como

image-text-section__text_container

fazemos isso também com a classe que acabamos de criar colocando a class como
image-text-section__container

no caso da seção do rei leão precisamos criar um modificador para o bloco que acabamos de criar

então no main.scss dentro de .image-text-section vou colocar o modificador usando 
ele vai ter um display block

&--image-full-width{
    display:block;
}

&--image-full-width dentro dele vamos definir a img com o width de 100%

img{
    width: 100%;
}

agora na classe do rei leão colocamos o modificador na seção 

acrecentamos --image-full-width na nossa class

image-text-section image-text-section--image-full-width

agora faremos a mesma coisa na div dentro da seção do rei leão  acrecentando na class

image-text-section__text_container image-text-section--image-full-width__text_container

agora precisamos aplicar o position absolut no texto para que ele fique do lado da imagem

precisamos adicionar um position relative ao nosso &--image-full-widht
&--image-full-widht{
    position: relative;
}



agora no main.scss vamos copiar o seletor &__text_container dentro de &--image-full-widh{}
vamos colocar um position: avsolute, um top de 0, height de 100%, display: flex,flex-direction: column,
justify-content:center, left:50%

precisamos também  limitar o expaço do nosso texto e para isso vamos usar a propriedade widht: calc(50% - 5.6vw)

&__text_container{
    position: relative; 
    top: 0;
    left: 50%;
    heigh: 100%;
    widht: calc( 50% - 5.6vw);
    display: flex;
    flex-diretction: column;
    justify-content: center;
}

agora vamos criar a seção Disponível nos seus dispositivos favoritos

vamos criar uma nova seção com a classe available-devices ela vai ter 1 h2 com a mensagem Disponível nos seus dispositivos favoritos

vamos ter uma ul com a classe available-devices__list__item com uma li com a img que está disponível no imges/dispositivos/computador.png e um h4 com Computador

dentro dessa mesma linha li teremos uma nova ul com algumas lis dentro 

uma li com Chrome OS e abaixo uma outra li com MacOS e mais uma linha  com PC Windows

<li>
    <img src="./dist/image/dispositivos/computador.png" alt="Computador">
    
    o h4 vai ter uma classe chamada de title--small
    <h4>computador

    O ul vai ter a classe text  
    ul 

        li Chrome Os
        li MacOS
        li PC Windows


agora vamos criar um novo arquivo de estilos chamado _available-devices.scss e depois realizar a importação desse arquivo no nosso mains.scss @use  'available-devices'

.vamos colocar a classe nele 

.available-devices, ela vai ter um padding de 5.6vw, dentro dele teremos o h2 com text-align: center e  margin-bottom: 24px;
teremos a lista &__list com um display grid, gap: 24px e grid-template-columns: repeat(4, 1fr);
dentro da lista teremos também o &__item vai ter um text-align: center dentro dele teremos a img com max-width: 100%, também teremos o li com list-style-type: none, também teremos o h4 com margin-top: 20px, margin-bottom: 24px;

.available-devices{
    padding: 5.6vw;

    h2{
        text-align: center;
        margin-bottom: 24px;
    }

    &__list{
        display: grid;
        gap: 24px;
        grid-template-columns: reat(4, fr);
        &__item{
            text-align: center;

            h4{
                margin-top: 20px;
                margin-bottom: 24px;
            }

            li{
                list-style-type: none;
            }

            img{
                max-width: 100%;
            }

        }
    }
}

agora vamos copiar o nosso li 3 vezes 