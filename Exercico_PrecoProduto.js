/*
1- À vista - 10 % de desconto
2 - À vista no dinheiro o PIx - 15 % de desconto
3 - Em 2 X - preço normal, sem juros
4 - Acima de 2 X - preço nomral mais juros de 10%
*/




const precoEtiqueta = 100;
const formaPagamento = 1;

if (formaPagamento === 1) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));
} else if (formaPagamento === 2) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));
}else if (formaPagamento === 3) {
    console.log(precoEtiqueta);
} else {
    console.log (precoEtiqueta + (precoEtiqueta * 0.1));
}