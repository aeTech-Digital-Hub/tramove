declare type Status = 'pending' | 'In Transit' | 'delivered' | 'cancelled'

declare type Quote = {
  _id: string;
  amount?: string | number;
  status?: Status
  weight?: number;
  name?: string;
  dimensions?: string;
  origin?: string;
  quote: number
};


declare interface ShipmentHistory {
  id: string;
  transporter: string;
  route: string;
  date: string;
  value: number;
  status: Status
}

declare type heroProps = {
  small: string;
  title: string;
  text: string;
};


// Define shipment type
declare interface PendingShipment {
  _id: string;
  amount?:  number;
  weight?: number;
  dimensions?: string;
  origin?: string;
  destination?: string;
  name?: string;
  status?: Status;
  route?: string;
  quote: number
}

declare interface PendingShipmentsTableProps {
  shipments: PendingShipment[];
  isLoading: boolean;
  onAdjustQuote?: (shipmentId: string) => void;
  onAssignTransporter?: (shipmentId: string) => void;
  onViewDetails?: (shipmentId: string) => void;
  onTrack?: (shipmentId: string) => void;
  showActions?: boolean;
  title?: string;
  description?: string;
  customActions?: {
    label: string;
    onClick: (shipmentId: string) => void;
    className?: string;
  }[];
}