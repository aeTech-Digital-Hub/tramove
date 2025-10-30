import React from 'react';
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  title?: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
  message,
  title = "Success!"
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[500px] p-0">
        <div className="p-6 flex flex-col items-left">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-left text-gray-600 mb-6">{message}</p>
          <button
            onClick={onClose}
            className="w-20 px-6 py-2 bg-gradient-to-t from-red to-deep-red rounded-full text-white hover:bg-[#E60023]/90"
          >
            OK
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessModal;
