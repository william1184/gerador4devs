import { feminino, masculino, sobrenomes } from '../src/resources/nome.js';
import { dominioEmail, complementoEmail } from '../src/resources/email.js';
import { lorenIpsun } from '../src/resources/lorenIpsum.js';

/**
 * Normaliza texto removendo caracteres especiais.
 * @param {String} texto 
 */
const normalizarTexto = (texto = '', caractereEspacosEmBranco = '-') => {
	return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^\w\\-]+/g, caractereEspacosEmBranco);
};

const gerarRandomNumber = (n) => {
	var ranNum = Math.round(Math.random()*n);
	return ranNum;
}

const mod = (dividendo,divisor) => {
	return Math.round(dividendo - (Math.floor(dividendo/divisor)*divisor));
}

const gerarCPF = ( isMasked ) => {
	var n = 9;
	var n1 = gerarRandomNumber(n);
	 var n2 = gerarRandomNumber(n);
	 var n3 = gerarRandomNumber(n);
	 var n4 = gerarRandomNumber(n);
	 var n5 = gerarRandomNumber(n);
	 var n6 = gerarRandomNumber(n);
	 var n7 = gerarRandomNumber(n);
	 var n8 = gerarRandomNumber(n);
	 var n9 = gerarRandomNumber(n);
	 var d1 = n9*2+n8*3+n7*4+n6*5+n5*6+n4*7+n3*8+n2*9+n1*10;
	 d1 = 11 - (mod(d1,11));
	 if (d1>=10) d1 = 0;
	 var d2 = d1*2+n9*3+n8*4+n7*5+n6*6+n5*7+n4*8+n3*9+n2*10+n1*11;
	 d2 = 11 - (mod(d2,11));
	 if (d2>=10) d2 = 0;

	if (isMasked)
	   return `${n1}${n2}${n3}.${n4}${n5}${n6}.${n7}${n8}${n9}-${d1}${d2}`;

	return `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}${d1}${d2}`;
}

const gerarCNPJ = ( isMasked ) => {
	var n = 9;
	var n1  = gerarRandomNumber(n);
	 var n2  = gerarRandomNumber(n);
	 var n3  = gerarRandomNumber(n);
	 var n4  = gerarRandomNumber(n);
	 var n5  = gerarRandomNumber(n);
	 var n6  = gerarRandomNumber(n);
	 var n7  = gerarRandomNumber(n);
	 var n8  = gerarRandomNumber(n);
	 var n9  = 0;//gera_random(n);
	 var n10 = 0;//gera_random(n);
	 var n11 = 0;//gera_random(n);	
	 var n12 = 1;//gera_random(n);		
	var d1 = n12*2+n11*3+n10*4+n9*5+n8*6+n7*7+n6*8+n5*9+n4*2+n3*3+n2*4+n1*5;
	 d1 = 11 - ( mod(d1,11) );
	 if (d1>=10) d1 = 0;
	 var d2 = d1*2+n12*3+n11*4+n10*5+n9*6+n8*7+n7*8+n6*9+n5*2+n4*3+n3*4+n2*5+n1*6;
	 d2 = 11 - ( mod(d2,11) );
	 if (d2>=10) d2 = 0;

	if (isMasked)
		return `${n1}${n2}.${n3}${n4}${n5}.${n6}${n7}${n8}.${n9}${n10}${n11}${n12}-${d1}${d2}`;

	return `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}${n10}${n11}${n12}${d1}${d2}`;
}

const gerarNIT = ( isMasked ) => {
	var n = 9;
	var n1  = 1;//gera_random(n);
	var n2  = gerarRandomNumber(n);
	var n3  = gerarRandomNumber(n);
	var n4  = gerarRandomNumber(n);
	var n5  = gerarRandomNumber(n);
	var n6  = gerarRandomNumber(n);
	var n7  = gerarRandomNumber(n);
	var n8  = gerarRandomNumber(n);
	var n9  = gerarRandomNumber(n);
	var n10 = gerarRandomNumber(n);

	var d1 =  n1*3 + n2*2 + n3*9 + n4*8 + n5*7 + n6*6 + n7*5 + n8*4 + n9*3 + n10*2;
	 d1 = 11 - ( mod(d1,11) );
	 if (d1>=10) d1 = 0;

	if (isMasked)
		return `${n1}${n2}${n3}.${n4}${n5}${n6}${n7}${n8}.${n9}${n10}-${d1}`;
		
	return `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}${n10}${d1}`;
}

const gerarCEI = ( isMasked ) => {
	var n = 9;
	var n1  = 2; // deve ser diferente de 0
	var n2  = gerarRandomNumber(n);
	var n3  = gerarRandomNumber(n);
	var n4  = gerarRandomNumber(n);
	var n5  = gerarRandomNumber(n);
	var n6  = gerarRandomNumber(n);
	var n7  = gerarRandomNumber(n);
	var n8  = gerarRandomNumber(n);
	var n9  = gerarRandomNumber(n);
	var n10 = gerarRandomNumber(n);
	var n11 = 8; // atividade 

	var aux1 =  n1*7 + n2*4 + Number(n3) + n4*8 + n5*5 + n6*2 + Number(n7) + n8*6 + n9*3 + n10*7 + n11 * 4;
	var aux2 = String(aux1);

	var aux3 = parseInt(aux2[aux2.length - 1]) + parseInt(aux2[aux2.length - 2]);
	var Soma = parseInt(aux1);	
	var d1 = parseInt((10 - (Soma % 10 + parseInt(Soma / 10)) % 10) % 10);
	d1 = Math.abs(d1);

	if (isMasked){
        return `${n1}${n2}.${n3}${n4}${n5}.${n6}${n7}${n8}${n9}${n10}/${n11}${d1}`;
    }

	return `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}${n10}${n11}${d1}`;
};

const gerarRG = ( isMasked ) => {
    let n = 9;
    if( isMasked ){
        return `${gerarRandomNumber(n)}${gerarRandomNumber(n)}.${gerarRandomNumber(n)}${gerarRandomNumber(n)}${gerarRandomNumber(n)}.${gerarRandomNumber(n)}${gerarRandomNumber(n)}${gerarRandomNumber(n)}-${gerarRandomNumber(n)}`;
    }

    return `${gerarRandomNumber(n)}${gerarRandomNumber(n)}${gerarRandomNumber(n)}${gerarRandomNumber(n)}${gerarRandomNumber(n)}${gerarRandomNumber(n)}${gerarRandomNumber(n)}${gerarRandomNumber(n)}${gerarRandomNumber(n)}`;
};

const gerarNomeSobrenome = () => {
	const primeiroNome = feminino.concat(masculino);
	return `${ primeiroNome[gerarRandomNumber(200)]} ${sobrenomes[gerarRandomNumber(30)]} ${sobrenomes[gerarRandomNumber(30)]}`;
};

const gerarEmail = () => {
	const primeiroNome = feminino.concat(masculino);
	return `${ normalizarTexto(primeiroNome[gerarRandomNumber(200)], '_').toLowerCase() }${ normalizarTexto(complementoEmail[gerarRandomNumber(22)], '_') }@${dominioEmail[gerarRandomNumber(8)]}.com`;
};

const gerarLorenIpsum = ( ) => {
	let texto = "A ";
	let qtdCaracteres = 1024;
	
	do {
		texto = texto + lorenIpsun[gerarRandomNumber(503)] + " ";
	}
	while( texto.trim().length < qtdCaracteres )

	return texto.substr(0, qtdCaracteres).trim();
};

export default {
    normalizarTexto,
    gerarRG,
    gerarCEI,
    gerarNIT,
    gerarCNPJ,
	gerarCPF,
	gerarNomeSobrenome,
	gerarEmail,
	gerarLorenIpsum
}