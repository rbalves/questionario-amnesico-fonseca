import api from './index';

class Questionario {
    
    buscarRespostas = () => api.get('/');

    salvarRespostas = (resultado) => api.post('/', resultado);
}

export default new Questionario();
