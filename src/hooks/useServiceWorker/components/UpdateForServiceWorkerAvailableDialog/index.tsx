import Dialog from "components/Dialog";
import useServiceWorker from "hooks/useServiceWorker";
import styles from "./UpdateForServiceWorkerAvailableDialog.module.css";
import { Button } from "../../../../components/ui/button";

const UpdateForServiceWorkerAvailableDialog = () => {
  const { updateServiceWorker } = useServiceWorker();
  return (
    <Dialog duration={5000}>
      <p>There is a new version available.</p>
      <Button onClick={updateServiceWorker} className={`${styles.update} mt-2`}>
        Update
      </Button>
    </Dialog>
  );
};

export default UpdateForServiceWorkerAvailableDialog;
