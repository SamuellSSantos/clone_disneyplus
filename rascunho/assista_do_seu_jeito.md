vamos criar uma nova seção com a classe watch-anywhere e dentro teremos uma imagens com /images/tv_pc_table_celular.png

depois  vamos criar uma div com um h2 com a classe="title" assistra do seu jeito
e depois um paragrafo com a class=" text--big" e com a mensagem

Aproveite a tela grande da TV ou assita no tablet, celular e outros aparelhos. Nossa seção de títulos 4k não para de crescer. Além disso, para a felicidade de todos, é possível assistir em até 4 telas ao mesmo tempo.

agora vamos colocar estilos nessa seção, em style vamos criar um novo arquivo chamado _watch-anywhere.scss, depois vamos importar esse arquivo no main.scss 
@use 'watch-anywhere';

vamos colocar o nome da classe .whatch-anywhere e vamos atribuir um padding: 5.6vw, display: grid, grid-template-columns: 1fr 1fr, align-items: center;

.whatch-anywhere{
    padding:5.6vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
}

agora vamos estilizar as imagens dentro de .watch-anywhere

vamos usar a tag img e definirmos uma max-width de 100%

img{
    max-width: 100%;
}

agora no html vamos colocar uma classe na nossa div 
class="watch-anywhere__text__container"

agora na nossa "watch-anywhere__text__container que esta dentro de .watch-anywhere vamos colocar um padding: 0 2vw;

div{
    padding: 0 2vw;
}

agora dentro da div vamos estilizar o h2 e ele vai ter uma margin-bottom com 24px