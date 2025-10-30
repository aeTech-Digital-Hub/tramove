import { create } from 'zustand'

export interface Bid {
  id: string
  shipmentId: string
  transporterId: string
  amount: number
  status: 'pending' | 'accepted' | 'rejected'
  createdAt: string
  updatedAt: string
  transporterName: string
  transporterRating?: number
}

interface BidState {
  bids: Bid[]
  activeBid: Bid | null
  loading: boolean
  error: string | null
  setBids: (bids: Bid[]) => void
  addBid: (bid: Bid) => void
  updateBid: (id: string, updates: Partial<Bid>) => void
  deleteBid: (id: string) => void
  setActiveBid: (bid: Bid | null) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  getBidsForShipment: (shipmentId: string) => Bid[]
}

const useBidStore = create<BidState>((set, get) => ({
  bids: [],
  activeBid: null,
  loading: false,
  error: null,
  setBids: (bids) => set({ bids }),
  addBid: (bid) => 
    set((state) => ({ bids: [...state.bids, bid] })),
  updateBid: (id, updates) =>
    set((state) => ({
      bids: state.bids.map((bid) =>
        bid.id === id ? { ...bid, ...updates } : bid
      )
    })),
  deleteBid: (id) =>
    set((state) => ({
      bids: state.bids.filter((bid) => bid.id !== id)
    })),
  setActiveBid: (bid) => set({ activeBid: bid }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  getBidsForShipment: (shipmentId) => 
    get().bids.filter((bid) => bid.shipmentId === shipmentId)
}))

export default useBidStore
