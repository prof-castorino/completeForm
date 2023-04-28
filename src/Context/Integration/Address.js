import axios from 'axios';

export const FindCep = async (CallBack, cep) => {
    var url = "https://viacep.com.br/ws/" + cep.trim().replace("-", "") + "/json"
    await fetch(url)
        .then(resp => resp.json())
        .then(res => CallBack(cep, res));
}

export const enumCountry = (setItem) => {
    axios({
        method: 'get',
        url: 'https://servicodados.ibge.gov.br/api/v1/localidades/paises',
    }).then((response) => {
        const data = []
        response.data.map((item) => { data.push({ id: item.sigla, title: item.nome }) })
        setItem(data)
    });
}

export const enumState = (setItem) => {
    axios({
        method: 'get',
        url: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
    }).then((response) => {
        const data = []
        response.data.map((item) => { data.push({ id: item.sigla, title: item.nome }) })
        setItem(data)
    });
}

export const enumCity = (setItem, state) => {
    axios({
        method: 'get',
        url: "https://servicodados.ibge.gov.br/api/v1/localidades/estados/" + state + "/municipios",
    }).then((response) => {
        const data = []
        response.data.map((item) => { data.push({ id: item.sigla, title: item.nome }) })
        setItem(data)
    });
}