const cmd_termux = (prefix) => {
return `
SÓ DEVO LEMBRAR QUE O TERMUX DA PLAY STORE NÃO PRESTA, ENTÃO INSTALE O 118 POR LÁ 

> aleatoryapi.herokuapp.com 


Comandos Básicos do termux, nescessario para inicialização do bot:


- Coloque esses, para corrigir uns problemas que pode ocorrer

- Primeiro >

pkg install yarn -y 


- Segundo >

yarn global add npm 


- Segundo 1.1 >

yarn global add npm && npm i -g npm@6


- Terceiro >

pkg upgrade -y && pkg update -y && apt upgrade -y && apt update -y 


Cole eles tudo junto, dessa fórma lá, todos esses que passei, deve ser colado no termux, e apertar enter, pode demorar um pouco.


- Quarto >

pkg install nodejs -y && pkg install nodejs-lts -y && pkg install ffmpeg -y && pkg install tesseract -y && pkg install git -y 


- Quinto > 

termux-setup-storage 


Este comando é muito importante. 

=====>

Boa sorte, qualquer Error, entre no meu chat e mande print do Error que ocorrer.

=====>
`
}

exports.cmd_termux = cmd_termux