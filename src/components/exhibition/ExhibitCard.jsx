import { useNavigate } from "react-router-dom";

// utils
import { getDday, formatMonthDay } from "@utils/common";

const ExhibitCard = ({ thumbnail, title, place, startDate, endDate, exhibitionId, type }) => {
  const navigate = useNavigate();
  const dday = getDday(endDate);
  const openDate = formatMonthDay(startDate);
  const handleClick = () => navigate(`/exhibition/${exhibitionId}`);

  if (type === "vertical") {
    return (
      <button type="button" className="exhibit-card-v" onClick={handleClick}>
        <div
          className="exhibit-card-v-thumb"
          style={thumbnail ? { backgroundImage: `url(${thumbnail})` } : undefined}
        />
        <div className="exhibit-card-v-content-box">
          <p className="exhibit-card-title">{title}</p>
          <div className="exhibit-card-v-content">
            <p className="exhibit-card-place">{place}</p>
            <span className="exhibit-card-openDate">{openDate} 오픈</span>
          </div>
        </div>
      </button>
    );
  }

  return (
    <button type="button" className="exhibit-card" onClick={handleClick}>
      <div className="exhibit-card-thumb" style={thumbnail ? { backgroundImage: `url(${thumbnail})` } : undefined} />
      <div className="exhibit-card-content-box">
        {dday && <span className="exhibit-card-dday">{dday}</span>}
        <div className="exhibit-card-content1">
          <p className="exhibit-card-title">{title}</p>
          <div className="exhibit-card-content2">
            <p className="exhibit-card-place">{place}</p>
            <p className="exhibit-card-date">{startDate}</p>
          </div>
        </div>
      </div>
    </button>
  );
};

export default ExhibitCard;
