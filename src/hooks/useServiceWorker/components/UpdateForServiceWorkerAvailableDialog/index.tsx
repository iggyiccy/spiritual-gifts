import Dialog from "components/Dialog";
import useServiceWorker from "hooks/useServiceWorker";
import styles from "./UpdateForServiceWorkerAvailableDialog.module.css";
import { Button } from "../../../../components/ui/button";

const UpdateForServiceWorkerAvailableDialog = ({
  onUpdate,
}: {
  onUpdate: () => void;
}) => {
  const handleUpdate = () => {
    console.log("Update button clicked");
    onUpdate();
  };
  return (
    <Dialog duration={5000}>
      <p>There is a new version available.</p>
      <Button onClick={handleUpdate} className={`${styles.update} mt-2`}>
        Update
      </Button>
    </Dialog>
  );
};

export default UpdateForServiceWorkerAvailableDialog;
