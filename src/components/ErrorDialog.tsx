import * as AlertDialog from "@radix-ui/react-alert-dialog";

interface ErrorDialogProps {
  error: string;
  onClose: () => void;
}

function ErrorDialog({ error, onClose }: ErrorDialogProps) {
  return (
    <AlertDialog.Root open={!!error}>
      <AlertDialog.Portal>
        <AlertDialog.Overlay
          style={{
            backgroundColor: "ghost",
            backdropFilter: "blur(4px)",
            position: "fixed",
            inset: 0,
          }}
        />
        <AlertDialog.Content
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "25px",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            maxWidth: "300px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
          }}
        >
          <AlertDialog.Title style={{ fontSize: "18px", fontWeight: "bold" }}>
            에러
          </AlertDialog.Title>
          <div style={{ margin: "18px 0", fontSize: "14px", color: "#333" }}>
            {error}
          </div>
          <AlertDialog.Action
            asChild
            onClick={onClose}
            style={{
              marginTop: "10px",
              padding: "12px",
              borderRadius: "8px",
              backgroundColor: "#4F46E5",
              color: "white",
              border: "none",
              cursor: "pointer",
              width: "100%",
              fontWeight: "bold",
            }}
          >
            <button>확인</button>
          </AlertDialog.Action>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}

export default ErrorDialog;
