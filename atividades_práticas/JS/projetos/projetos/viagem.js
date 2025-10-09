


const inputDistancia = document.querySelector("#distancia-km")
const inputPrecoCombustivel = document.querySelector("#preco-combustivel")
const inputConsumo = document.querySelector("#consumo-km/l")
const inputNumeroVianjantes = document.querySelector("#numero-viajantes")

const resultadoTotal = document.querySelector("#custo-total")
const resultadoPorPessoa = document.querySelector("#custo-pessoa")

const litrosNecessarios = (distancia, consumo) => distancia/consumo

const totalCombustivel = (litros,combustivel) => litros * combustivel

const custoPessoa = (custototal, viajantes) => custototal / viajantes 

