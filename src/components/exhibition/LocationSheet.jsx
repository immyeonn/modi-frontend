// components
import BottomSheet from "@components/common/BottomSheet";

// 맵 연결 상의 필요
export default function LocationSheet({ isOpen, onClose, venueLine, address }) {
  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <h2 className="venue-location-title text-body-1-medium">{venueLine}</h2>
      {address && <p className="venue-location-address text-body-2-regular">{address}</p>}
      <div className="venue-location-map">
        <span className="text-caption-1">Map</span>
      </div>
    </BottomSheet>
  );
}
