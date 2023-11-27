import { Dialog, DialogActions, DialogContent } from "@mui/material";

export default function AddNewProjectModal() {
  return (
    <Dialog>
      <DialogTitle>Adding a new project.....</DialogTitle>
      <DialogContent>
        <ProjectForm />
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
}
