const { select } = require('@inquirer/prompts')

const start = async () => {

    while(true){

        const opção = await select ({
            message: "menu >",
            choices: [
            {
                name: "cadastrar meta",
                value: "cadastrar"
            },
            {
                name:"listar metas",
                value: "listar"
            },
            {
                name: "sair",
                value: "sair"
            }
            ]
        })


        switch(opção) {
            case "cadastrar":
                console.log("vamos cadastrar")
                break
            case "listar":
                console.log("vamos listar")
                break
            case "sair":
                console.log("até a próxima")
                return        
        }
    }
}

start()