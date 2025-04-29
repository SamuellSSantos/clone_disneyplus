vamos deixar o nosso site mais responsivo para telas menores como celulares é para isso vamos em nosso arquivo _shows.scss em
&__list vamos colocar mais uma classe com o nome @media(max-width: 768){
grid-template-columns: 1fr 1fr ;

isso fez com que as nossas seções de filmes ficassem com dois itens por linha

agora vamos em _plans.scss
agora dentro do &__list vamos colocar um @media(max-width: 768px){
display: block;}

agora vamos em main.scss dentrode .image-text-section vamos colocar um @media(max-width: 768px){
display: block;}

colocamos o @media dentro de &__text_container
@media (max-width: 768px){
position: relative;
left: 0;
width: 100%;

agora vamos em nosso arquivo _available-devices e dentro de &__list vamos colocar um @media(max-width: 768px) {
grid-template-colums: 1fr 1fr;}

agora vamos ajustar os titulos em main.scss vamos adicionar uma media para a classe de titulo dentro de .title
vamos colocar a nossa @media (max-width: 768px){
@include title(24px);
}

vamos usar uma configuração parecida em .title--small

@media(max-width: 768px){
@include title (22px);
}
vamos usar uma definição parecida em .title--big 
adicionamos @media (max-wdth: 768px){
@include title(26px);

vamos editar também o tamanho dos textos
em text--big vamos usar a @media (max-width: 768px){
@include text (15px);

vamos usar uma configuração parecida para text--small @media(max-width: 768px){
@include text(11px);}

vamos usar uma configuração parecida no nosso text @media(max-width: 768px){
@include text(14px);}

agora vamos ajustar o nosso hero e vamos começar pelo tamanho do nosso logo

vamos colocar uma @media dentro do nosso arquivo _hero.scss na tag &__branding
@media (max-width: 768px){
max-width: 180px;}

precisamos criar um @media dentro do nosso .hero
@media (max-width: 768px){
background-image: ../images/hero_celular.jpeg);
padding-top: 50vw;
background-size: contain;
background-repeat: no-repeat;}

agora vamos em combos e vamos colocar uma @media (max-width: 768px){
display: block;}

vamos adicionar também em combo
@media(max-width: 768px){
width: 100%;
margin-bottom: 24px;

agora no _header.scss vamos ajustar o botão 
dentro de .button vamos adicionar o @media (max-width: 768px){
font-size: 13px;
padding: 8px 11px;
height: 40px;
letter-spacing: 0;
}

agora dentro do &__container vamos criar um @media  (max-width: 768px){
padding: 0 12px 0 20px;

agor vamos adicionar a media em nosso &__logo

@media(max-width: 768px){
    max-width: 64px;
}

agora vamos no hero.scss e vamos adicionar uma margin negativo em nossa media query que esta dentro do .hero
vamos adicionar um margin-top de -55px precisamos também adicionar um  calculo em nosso padding e para isso  adicionamos o calculo em nosso padding usando 
padding-top: calc(50vw + 25px)

agora vamos em nosso arquivo shows.scss e vamos adicionar  a nossa media query em nosso &__tabs
@media (max-width: 768px){
    font-size: 16px;
}

vamos adicionar um botão também em &__tabs

@media(max-width: 768px){
    white-space: nowrap;
    overflowx:scroll;
    padding-left:20px;
}

agora vamos em _plans.scss e dentro de &_list vamos colocar a tag do .botton

.button{
    margin-top:24px
}

agora vamos no index.html e vamos definir uma outra imagems par a  seção do rei leão vamos colocar a imagem do rei leão em uma tag chamada picture e dentro da tag picture vamos colocar uma outra tag que vai ser o local onde vai ficar a nossa imagem para celular

<picture>
    <source media="(max-width:768px)" srcset="./dist/images/fundo_rei_leao_celular.png"/>
    <img src="./dist/images/fundo_rei_leao.png" alt="Rei Leão">
    </picture>

    agora vamos fazer o commit das alterações que fizemos até aqui com a mensagem "ajustes no mobile"

    agora vamos configurar o arquivo gulp adicionando gulp uglify

    para isso vamos baixar o pluggin usando npm install --save-dev gulp-uglify

    vamos criar uma const para o uglify
    const uglify = require('gulp-uglify');

    agora vamos criar uma função 

    function script(){
        return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
    }

agora vamos adicionar a nossa função na fila de execução das tarefas 

no exports.default = gulp.parallel(styles, images, scripts);

vamos adicionar também no exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
    gulp.watch('./src/scripts/*.js, gulp.parallel(scripts))
}

agora em src vamos criar uma pasta de scripts e vamos colocar o nosso arquivo main.js

agora no html temos que apontar a nossa tag script para a pasta script "./dist/js/main.js"
