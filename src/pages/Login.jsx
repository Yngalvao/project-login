import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Button } from 'primereact/button';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Context } from '../contexts/AuthContext';


const Login = () => {

    const [mostrarSenha, setMostrarSenha] = useState(false);

    const { register, handleSubmit } = useForm();

    const { setLogado } = useContext (Context);
    const navigate = useNavigate();

    function logar(dados) {
        if(dados.email == "ynggalvao@gmail.com" && dados.senha == "123456") {
            setLogado(true);
            navigate('/home');
        }
    }

    return (
        <>
            <div style={{ backgroundColor: 'rgb(152, 90, 39)' }} >
                <div className='h-screen flex align-items-center justify-content-center'>
                    <form onSubmit={handleSubmit(logar)} className='surface-0 p-3 border-round-md'>
                        <h1 className='text-center text-4x1'>Seja bem-vindo!</h1>
                        <br></br>
                        <label htmlFor="email" className='block uppercase font-bold text-sm mb-1'>Email</label>
                        <InputText
                            id='email'
                            type='email'
                            placeholder='email@email.com'
                            className='mb-3 w-full'
                            {...register('email', { required: true })}
                        />
                        <br></br>
                        <label htmlFor="senha" className='block uppercase font-bold text-sm mb-1'>Senha</label>
                        <IconField>
                            <InputIcon
                                className={`pi ${mostrarSenha ? 'pi-eye' : 'pi-eye-slash'} cursor-pointer`}
                                onClick={() => setMostrarSenha(!mostrarSenha)}
                            />
                            <InputText
                                id='senha'
                                type={mostrarSenha ? 'text' : 'password'}
                                placeholder='*********'
                                {...register('senha', { required: true })}
                            />
                        </IconField>
                        <br></br>
                        <Button
                            label="Entrar"
                            type='submit'
                            className='mb-3 w-full'
                        />
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;


