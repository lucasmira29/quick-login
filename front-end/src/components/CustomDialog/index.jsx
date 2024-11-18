import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';

const CustomDialog = ({ open, onClose, username, error }) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>Erro ao deletar</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Não foi possível deletar o usuário {username}&quot;. Detalhes: {error}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>Fechar</Button>
    </DialogActions>
  </Dialog>
);

export default CustomDialog;
