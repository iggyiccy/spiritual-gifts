import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import {
  initiatedUpdate,
  resetUpdateStatus,
} from "hooks/useServiceWorker/reducer";

const useServiceWorker = () => {
  const isUpdated = useSelector(
    (store: RootState) => store.serviceWorker.serviceWorkerUpdated
  );
  const isInitialized = useSelector(
    (store: RootState) => store.serviceWorker.serviceWorkerInitialized
  );
  const registration = useSelector(
    (store: RootState) => store.serviceWorker.serviceWorkerRegistration
  );
  const dispatch = useDispatch();
  const updateServiceWorker = useCallback(() => {
    if (isUpdated) {
      if (registration) {
        const registrationWaiting = registration.waiting;
        if (registrationWaiting) {
          registrationWaiting.postMessage({ type: "SKIP_WAITING" });
          registrationWaiting.addEventListener("statechange", (e: any) => {
            if (e.target.state === "activated") {
              // Reset isUpdated to false after successful update
              dispatch(resetUpdateStatus());
              window.location.reload();
            }
          });
        } else {
          // Reset isUpdated to false if no waiting registration is found but update was initiated
          dispatch(resetUpdateStatus());
          window.location.reload();
        }
      } else {
        // Reset isUpdated to false if no registration is found but update was initiated
        dispatch(resetUpdateStatus());
        window.location.reload();
      }
    }
    dispatch(initiatedUpdate);
  }, [dispatch, isUpdated, registration]);

  return useMemo(
    () => ({
      isUpdated,
      isInitialized,
      updateServiceWorker,
    }),
    [isInitialized, isUpdated, updateServiceWorker]
  );
};

export default useServiceWorker;
