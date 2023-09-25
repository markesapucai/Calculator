function calculadora() {
    return {
        display: document.querySelector('.display'),

        start() {
            this.mostrador();
            this.enterPress();
            this.display.focus();
        },

        clear () {
            this.display.value = '';
        },

        deleteOne() {
            this.display.value = this.display.value.slice(0, -1);
        },

        equal() {
            const conta = this.display.value;

            if (conta.trim() === '') {
                alert('Preencha o campo abaixo') 
            } else {
                try {
                    const resul = eval(conta);
                    if(isNaN(resul)) {
                        alert('Preencha corretamente'); 
                    } else {
                        this.display.value = resul;
                    }
                } catch(e) {
                    alert('Ocorreu um erro. Preencha os campos corretamente ;)');
                    return
                }
            }  
        },

        enterPress() {
            document.addEventListener('keydown', e => {
                if (e.key == 'Enter') this.equal();
            })
        },

        mostrador() {
            document.addEventListener('click', e => {
                const el = e.target;

                if(el.classList.contains('btn-num')) this.btnNumDisplay(el.innerText);
                if(el.classList.contains('btn-clear')) this.clear();
                if(el.classList.contains('btn-del')) this.deleteOne();
                if(el.classList.contains('btn-equal')) this.equal();
            })
        }, 

        btnNumDisplay(valor) {
            this.display.value += valor;
        }
    }
}
const calculator = calculadora();
calculator.start();
