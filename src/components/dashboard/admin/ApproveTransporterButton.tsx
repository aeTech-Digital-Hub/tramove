import React, { useState } from 'react';
import SuccessModal from './SuccessModal';

interface ApproveTransporterButtonProps {
  transporterId: string;
  transporterName: string;
  onApproved?: () => void;
}

const ApproveTransporterButton: React.FC<ApproveTransporterButtonProps> = ({
  // transporterId,
  transporterName,
  onApproved
}) => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleApprove = () => {
    // TODO: Add API call to approve transporter
    setShowSuccess(true);
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    onApproved?.();
  };

  return (
    <>
      <button
        onClick={handleApprove}
        className="px-4 py-1 bg-gradient-to-t from-red to-deep-red rounded-full text-white hover:bg-[#E60023]/90"
      >
        Approve
      </button>

      <SuccessModal
        isOpen={showSuccess}
        onClose={handleSuccessClose}
        message={`${transporterName}'s application has been approved successfully`}
      />
    </>
  );
};

export default ApproveTransporterButton;
