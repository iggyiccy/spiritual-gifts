import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { initiatedUpdate } from "hooks/useServiceWorker/reducer";

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
    console.log("Update Service Worker called");
    console.log("isUpdated:", isUpdated);
    console.log("registration:", registration);

    if (isUpdated) {
      if (registration) {
        const registrationWaiting = registration.waiting;
        if (registrationWaiting) {
          registrationWaiting.postMessage({ type: "SKIP_WAITING" });
          registrationWaiting.addEventListener("statechange", (e: any) => {
            if (e.target.state === "activated") {
              console.log("Service Worker activated");
              // window.location.reload();
            }
          });
        } else {
          console.log("No registration waiting");
          // window.location.reload();
        }
      } else {
        console.log("No registration");
        // window.location.reload();
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
