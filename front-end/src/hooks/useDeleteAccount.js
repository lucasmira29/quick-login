import { useDialogs } from '@toolpad/core';
import CustomDialog from '../components/CustomDialog';
import api from '../utils/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export function useDeleteAccount() {
  const dialogs = useDialogs();
  const navigate = useNavigate();

  function notify() {
    toast.success('Usuário Excluído');
  }

  async function handleDelete(usernameLogged) {
    const username = await dialogs.prompt('Digite o usuário para deletar', {
      okText: 'Deletar',
      cancelText: 'Cancelar',
    });
    if (username === usernameLogged) {
      const deleteConfirmed = await dialogs.confirm(
        `Tem certeza de que deseja deletar "${username}"?`
      );

      if (deleteConfirmed) {
        try {
          await api.deleteUser(username);
          notify();
          navigate('/');
        } catch (error) {
          const message =
            error instanceof Error ? error.message : 'Erro desconhecido';
          await dialogs.open(CustomDialog, { username, error: message });
        }
      }
    } else {
      await dialogs.alert(
        'O nome de usuário não corresponde ao usuário logado. Tente novamente.'
      );
    }
  }
  return { handleDelete };
}
