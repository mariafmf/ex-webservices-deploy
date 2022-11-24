import axios from 'axios'

let returnObject

export function getAddressInfo(cep:number) {
    axios.get(`https://viacep.com.br/ws/:${cep}/json/`)
    .then((response) => {
        const street = response.data.logradouro
        const neighbourhood = response.data.bairro
        const city = response.data.cidade
        const state = response.data.uf

        returnObject = {
            "street": street,
            "neighbourhood": neighbourhood,
            "city": city,
            "state": state
        }
    })
}