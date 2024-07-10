import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import styles from "./Dialog.module.css";
import { Button } from "../ui/button";

const Dialog = ({
  children,
  duration,
}: {
  children: ReactNode;
  duration?: number;
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = useCallback(() => setIsOpen(false), []);
  useEffect(() => {
    if (duration) {
      const timeoutId = setTimeout(handleClose, duration);
      return () => clearTimeout(timeoutId);
    }
  }, [duration, handleClose]);
  return useMemo(
    () =>
      isOpen ? (
        <dialog
          open
          className={`${styles.dialog} bg-background text-primary outline outline-1 outline-zinc-100 max-w-96`}
        >
          {children}
          <Button className="mt-2" onClick={handleClose}>
            Close
          </Button>
        </dialog>
      ) : null,
    [children, handleClose, isOpen]
  );
};

export default Dialog;
