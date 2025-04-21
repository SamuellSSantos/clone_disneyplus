vamos criar um seção de perguntas frequentes

primeiro vamos iniciar o nosso npm run dev

agora vamos criar uma nova seção com a classe faq

ela vai ter uma seção com um  h2 com a classe title com o seguinte titulo 

Perguntas frequentes

vamos criar um ul com a classe faq__questions
li com a clss faq__questions__item

dentro do li vamos criar uma div com a class faq__questions__item__question

a classe vai ter pergunta? dentro

ainda dentro do li teremos mais uma div com a class faq__questions__item__answer e dentro teremos a resposta da pergunda

<sections class="faq">
<h2 class="faq__questions">
    <ul>
    <li class="faq__questions__item__questions">
        pergunta?
        <div class="faq__questions__item__questions">
            A resposta da pergunta
            </div>
            </li>
        </ul>
    </section>

    agora vamos copiar o conteudo na nossa li mais 3 vezes

    em stlyle vamos criar um novo arquivo chamado _faq.scss e depois importar no nosso arquivo main.js usando 
    @use 'faq';

    vamos colocar a classe faq e atribuirmos um padding de 5.6vw

    dentro dele colocamos o nosso h2 com um text-align: center e m margin-bottom de 24px

    ainda dentro do faque colocamos a nossa lista usando &__questions
    e colocamos os itens &__item com um background-color de #13151d, margin-bottom de 16px
    agora dentro do &__item vamos colocar a class &__question e atribuir o color com #fff, font-size: 29px, um paddinf de  24px; um display block e um cursor pointer e um position relative

    agora dentro das nossas divs da lista vamos atribuir uma class chamada text--big

    agora dentro do &__item vamos adicionar a classe chamada &__answer e atribuirmos vamos atribuir um height de 0, overflow: hideen, padding: 0 24px, transition: height, .5s ease;

    agora dentro da class &__question vamos usar um pseudo elemento chamado &::after esse pseudo elemento vai ter content com '+', position absolute, top 0, right com 24px, display flex e align-items center, font-size com 40px

    agora dentro de &__item vamos vamos criar uma classe chamada &--is-open e dentro dela teremos a classe .faq__questions__item__answer com um height com auto e um padding de 24px, transition: height, .5s ease, , padding-bottom: 24px;

    depois vamos adicionar essa classe em um de nosso li s com 
    faq__questions__item--is--open 

    agora dentro de &--is-open vamos criar mais um seletor 
    .faq__questions__item_question::after dentro dele vamos colocar um content: '-'

    &--is-open{
        .faq__questions__item__question::after{
            content: '-';
        }

        .faq__questions__item__answer{
            height: auto;
            padding: 24px;
            padding-bottom: 24px;
            transition: height, .5s ease;
        }
    }

    agora no main.js vamos criar mais uma const chamada questions

    const question = document.querySelectorAll('[data-faq-question]');
    e vamos adicionar esse atributo a todas as divis que colocamos a pergunta
    data-faq-question

    agora vamos adicionar o comportamento de click nela 

vamos criar uma for

for (let i = 0; i < quwstions.length; i++){
    questions[i].addEventListener('click, abreOuFechaResposta);
}

logo abaixo vamos criar uma função com o nome abreOuFechaResposta(elemento){
    const classe = 'faq__questions__item--is-pen';
    console.log(elemento);
    const elementoPai = elemento.target.parentNode;

    elementoPai = .classList.toggle(classe)
}

