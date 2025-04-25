vamos costruir um rodape para isso no html vamos construir um footer com a classe footer

em style vamos criar um arquivo para o footer também e depois importar no arquivo main.scss

_footer.scss

dentro do footer vamos colocar uma classe  footer__container 

agora no arquivo footer que criamos em styles vamos colocar a nossa classe .footer e dentro dela vamos colocar o &__container
com max-width: 1024px; vamos atribuir um width de 100%, margin de 0 auto, vamos centralizar o conteudo usando text-align: center

dentro do footer vamos colocar uma imagem com a classe footer__logo

./dist/imges/disneyplus.svg com alt Disnet+

logo abaixo teremos o Ul com a classe footer__links

dentro dele teremos o li com um link a dentro
<a href='#'> Termos e condições de Uso</a>

saindo da ul logo abaixo teremos um paragráfo com a class text--small com a frase 

2022 Disney, disney+ e The Walt Disney Company. Todos os direitos reservados. Serviço de assinatura paga. Conteúdo sujeito a disponibilidade.

logo abaixo teremos outro paragrafo com a classe text--small e a seguinte mensagem

Disney+ é um serviço pago, baseado em assinatura e sujeito a termos e condições. O serviço Disney+ é comercializado...

agora vamos estilizar a imgem do footer para isso vamos no arquivo footer e dentro de footer vamos usar a classe &__logo e nela vamos colocar um widht de 80px e vamos colocar uma margin de 0 auto 10px;

agora no html dentro do nosso footer e logo abaixo da img precisamos adicionar a nossa lista de links do footer e para isso vamos criar um ul com a classe footer_links ele vai ter 5 lis cada um com a classe footer__links__item  com "a " dentro e com as seguintes mensagens

os nossos links "a" tera a classe text--small

Termos e Condições de Uso
Política de privacidade
Proteção de Dados no Brasil
Anúncios personalizados
Dispositivos compatíveis
Ajuda
Sobre o Disney+

agora no _footer.scss vamos adicionar a tag de estilos, dentro do footer vamos adicionar a tag &__links e dentro dele o &__item

o &__link vai ter uma margin-bottom de 16px
o &__item vai ter um display inline-block

dentro do &__item vamos acessar o elemento do link "a"
e vamos remover a decoração do texto usando text-decoration none, vamos adicionar um padding com as seguintes confugurações 
padding: 8px 16px; vamos deixar ele também com display block

precisamos fazer a importação das nossas cores e para isso usamos o @use 'variaveis'

agora dentro de 'a' usamos a tag &:hover e vamos atribuir color e vamos usar a nossa variavel variaveis.$corTextoSecundario

precisamos aplicar um padding ao .footer de  26px 8px;

agora dentro do conteiner do footer vamos adicionar um padding-bottom de 20px

agora vamos construir o select do idioma 

voltando ao HTML dentro do ul com a classe footer__links vamos na parte superior vamos criar mais um li com a classe footer__links__item, depois uma div com a classe language-selector para agrupar uma img apontando para .dist/images/icones/golobe.svg no alt vamos colocar "Globo do mundo"
logo abaixo da imagem teremos um select com um option dentro
esse option vai ter a mensagem English
logo abaixo teremos um outro option com Português  na tag option do Português  vamos colocar uma tag selected para definirmos ela como padrão

agora vamos estilizar o . language-selector essa tag e tratada de maneira ixolada
dentro dele vamos colocar o img e definirmos uma altura com height de 18px e uma largura de 18px também com widht de 18px

vamos usar a tac select isso dentro de .language-selector
vamos definir a cor de fundo dela como background-color tenasparent e uma borda com border none a cor do texto vai ser a mesma ja usada variaveis.$corTextoPrincipal

vamos definir uma configuração também para quando passarem o mause por cima do item e para isso vamos definir um &:hover dentro do select
para fazer com que a cor mude vamos definir um color variaveis.$orTextoPrincipal

agora dentro do selection vamos colocar a tag option e vamos colocar a cor dele como color variaveis.$corDeFundo

precisamos fazer o alinhamento do nosso conteudo dessa tag .language-selector e para isso vamos definir essa tag como display flex, vamos definir ele também como align-items center

agora em select precisamos defini-lo com uma altura de 38 usando height

agora na tag &__links precisamos definilo como display flex e align-items center, precisamos definir também como flex-wrap para que os elementos não fiquem agrupados em uma linha e com justify-content center para centralizar os elementos