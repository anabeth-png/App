const { select, input, checkbox} = require('@inquirer/prompts')

let meta = {
    value: 'tomar 3L de água por dia',
    checked: false,
}

let metas = [ meta ]

const cadastrarMeta = async () => {
    const meta = await input({message: "digite a meta"})

    if(meta.length == 0) {
        console.log('A meta não pode ser vazia.')
        return 
    }

    metas.push(
        {  value: meta, checked: false,}
    )
}

const listarMetas = async () => {
    const respostas = await checkbox({
        message: "use as setas para mudar de meta, o espaço para marcar ou desmarcar e o Enter para finalizar essa etapa",
        choices: [... metas],
        instructions: false,
    })

    if(respostas.length ==0) {
        console.log("Nenhuma meta selecionada!")
        return
    }

    metas.forEach((m) => {
        m.checked = false
    })

    respostas.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value == resposta
        })

        meta.checked = true
    })

    console.log('meta(s) marcadas como concluída(s)')

}

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
                await cadastrarMeta()
                console.log(metas)
                break
            case "listar":
                await listarMetas()
                break
            case "sair":
                console.log("até a próxima")
                return        
        }
    }
}

start()