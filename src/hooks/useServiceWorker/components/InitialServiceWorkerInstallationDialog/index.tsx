import Dialog from "components/Dialog";

const InitialServiceWorkerInstallationDialog = () => (
  <Dialog duration={5000}>
    <p className="font-bold">Download this App</p>
    <p>Tap the Share Button, Select "Add to Home Screen", Confirm "Add"</p>
  </Dialog>
);

export default InitialServiceWorkerInstallationDialog;
