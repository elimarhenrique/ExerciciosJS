// Exemplo try catch
function tratarErroELancar(erro) {
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimierNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally{
        console.log('final')
    }
}

const obj = {nome : 'Roberto'} //Erro a função espera o objeto com identificador name não nome
imprimierNomeGritado(obj)