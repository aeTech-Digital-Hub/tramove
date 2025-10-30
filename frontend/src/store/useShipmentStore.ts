import { create } from 'zustand'

export interface Shipment {
  id: string
  from: string
  to: string
  status: 'pending' | 'in_transit' | 'delivered' | 'cancelled'
  price: number
  distance: string
  shipperId: string
  transporterId?: string
  createdAt: string
  updatedAt: string
}

interface ShipmentState {
  shipments: Shipment[]
  activeShipment: Shipment | null
  loading: boolean
  error: string | null
  setShipments: (shipments: Shipment[]) => void
  addShipment: (shipment: Shipment) => void
  updateShipment: (id: string, updates: Partial<Shipment>) => void
  deleteShipment: (id: string) => void
  setActiveShipment: (shipment: Shipment | null) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
}

const useShipmentStore = create<ShipmentState>((set) => ({
  shipments: [],
  activeShipment: null,
  loading: false,
  error: null,
  setShipments: (shipments) => set({ shipments }),
  addShipment: (shipment) => 
    set((state) => ({ shipments: [...state.shipments, shipment] })),
  updateShipment: (id, updates) =>
    set((state) => ({
      shipments: state.shipments.map((shipment) =>
        shipment.id === id ? { ...shipment, ...updates } : shipment
      )
    })),
  deleteShipment: (id) =>
    set((state) => ({
      shipments: state.shipments.filter((shipment) => shipment.id !== id)
    })),
  setActiveShipment: (shipment) => set({ activeShipment: shipment }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error })
}))

export default useShipmentStore
