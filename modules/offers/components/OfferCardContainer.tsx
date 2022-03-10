import { OfferContainer } from "../types";
import OfferCard from "./OfferCard";

interface OfferContainerProps {
  container: OfferContainer;
}

const OfferCardContainer: React.FC<OfferContainerProps> = ({
  container,
}: OfferContainerProps) => {
  const { title, offers } = container;

  return (
    <div className="mb-10">
      <h2
        className="text-2xl mb-4 font-medium"
        data-testid="offer-container-title"
      >
        {title}
      </h2>
      <div className="flex flex-wrap">
        {offers.map((offer) => {
          return (
            <div key={offer.id} className="w-[250px] mr-4 mb-4">
              <OfferCard offer={offer} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OfferCardContainer;
