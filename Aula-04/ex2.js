class Usuario{
    constructor(){
        this.nome = null;
        this.login = null;
        this.senha = null;
        this.cpf = null;
        this.celular = null;
    }

    exibir_info(){
        console.log(`Nome do usuario: ${this.nome}`);
        console.log(`Login: ${this.login}`)
        console.log(`Senha: ${this.senha}`)
        console.log(`CPF: ${this.cpf}`)
        console.log(`Celular: ${this.celular}`)
    }
    verifica_login(user,senha){
        if((user == this.login) && (senha == this.senha)){
            console.log(`Login correto! Seja bem vindo ${user}`);
        }
        else{
            console.log(`Login incorreto! Tente novamente!`)
        }
    }
}

const Usuario1 = new Usuario(); //cria um objeto Usuario 1 a partir da classe Usuario
Usuario1.nome="Thales Godoi";
Usuario1.login="Thales";
Usuario1.senha='Godooih43';
Usuario1.cpf="48410363852";
Usuario1.celular='19988416386';
Usuario1.exibir_info();
Usuario1.verifica_login("Thales", "Godooih43")
