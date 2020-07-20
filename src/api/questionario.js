import api from './index';

class Questionario {
    salvarRespostas = (resultado) => api.post('/', resultado);
}

export default new Questionario();
