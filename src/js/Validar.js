// Importa a Biblioteca Yup para manipular os nomes dos ID's de cada Input
import * as Yup from 'yup';

export const Validar = Yup.object().shape({
    titulo: Yup.string().required("*Preencher o campo obrigatório TÍTULO!*"),
    msg: Yup.string().required("*Preencher o campo obrigatório PROBLEMA!*")
})