import { lazy, useEffect } from "react";
import useServiceWorker from "hooks/useServiceWorker";

const InitialServiceWorkerInstallationDialog = lazy(
  () =>
    import(
      "hooks/useServiceWorker/components/InitialServiceWorkerInstallationDialog"
    )
);
const UpdateForServiceWorkerAvailableDialog = lazy(
  () =>
    import(
      "hooks/useServiceWorker/components/UpdateForServiceWorkerAvailableDialog"
    )
);

const ServiceWorker = () => {
  const { isInitialized, isUpdated, updateServiceWorker } = useServiceWorker();
  console.log("isInitialized:", isInitialized);
  console.log("isUpdated:", isUpdated);
  useEffect(() => {
    if (isUpdated) {
      updateServiceWorker();
    }
  }, [isUpdated, updateServiceWorker]);

  return null; // No need to render anything
  // return (
  //   <>
  //     {isInitialized && <InitialServiceWorkerInstallationDialog />}
  //     {isUpdated && (
  //       <UpdateForServiceWorkerAvailableDialog onUpdate={updateServiceWorker} />
  //     )}
  //   </>
  // );
};

export default ServiceWorker;
