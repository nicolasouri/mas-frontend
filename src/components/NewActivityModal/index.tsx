import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import api from '../../services/api';

import {FiX} from 'react-icons/fi'
import { Container, Error } from './styles';

interface NewActivityModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

interface FormData {
    courseunitname: string;
    activity: string;
    activitydate: Date;
}

export function NewActivityModal({isOpen, onRequestClose}:NewActivityModalProps){
    
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>();

    const onSubmit = handleSubmit(data => api.post('/activity', data).then(response => alert(response.data)));

    return(
        <Modal
            isOpen = {isOpen}
            onRequestClose = {onRequestClose}
            overlayClassName= "react-modal-overlay"
            className = "react-modal-content"
        >
            <Container>
                <h2>Cadastrar Atividade</h2>
                <button
                    type="button"
                    onClick={onRequestClose}
                    className="react-modal-close"
                >
                    <FiX size={20}/>
                </button>
                <form onSubmit={onSubmit}>

                    <input 
                        type="text"
                        placeholder="Unidade Curricular"
                        {...register("courseunitname", {required:true})}
                    />
                    {errors.courseunitname && <Error>O preenchimento do campo é obrigatório</Error>}

                    <input
                        type="text"
                        placeholder="Atividade"
                        {...register("activity", {required:true})}
                    />
                    {errors.activity && <Error>O preenchimento do campo é obrigatório</Error>}

                    <input 
                        type="date"
                        placeholder="Data da Atividade"
                        {...register("activitydate", {required:true})}
                    />
                    {errors.activitydate && <Error>O preenchimento do campo é obrigatório</Error>}

                    <button type="submit">
                        Cadastrar
                    </button>
                </form>
            </Container>
        </Modal>
    )
}