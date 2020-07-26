
const moneyOptions = {style:'currency', currency:'BRL'};

export default {
    methods:{
        printMoney(value){
            if(value){
                return value.toLocaleString('pt-BR', moneyOptions);
            }
            return (0).toLocaleString('pt-BR', moneyOptions);
        },
        abreviatte(value, maxSize){
            if(value && value.lenght > maxSize){
                return value.substr(0, maxSize) + '...';
            }
            return value;
        }
    }
}