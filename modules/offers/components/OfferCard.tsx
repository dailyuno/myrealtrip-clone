import Image from "next/image";
import { Offer } from "../types";

interface OfferCardProps {
  offer: Offer;
}

const OfferCard: React.FC<OfferCardProps> = ({ offer }: OfferCardProps) => {
  const point = Math.floor((offer.review.star || 0) * 2) / 2;
  const stars = new Array(5).fill(0).map((_, idx) => idx + 1);

  return (
    <div>
      <div className="relative h-[165px]">
        <Image
          src={offer.image}
          alt={offer.title}
          layout="fill"
          objectFit="cover"
          className="rounded-t"
        />
      </div>
      <div className="flex flex-col justify-between h-[145px] px-4 pt-3 pb-4 border-r border-b border-l border-solid border-gray-200">
        <div className="flex flex-col">
          <div className="text-xs text-gray-500">
            {offer.category} ・ {offer.city.name}
          </div>
          <h3 className="text-sm font-medium mt-1">{offer.title}</h3>
        </div>
        <div className="flex justify-between">
          <div>
            {!offer.review.star && (
              <div className="flex items-center">
                <Image
                  src={
                    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDEyIDEyIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iIzUxQUJGMyIgZD0iTTYuODc0IDExLjU3MmMtLjQ4Mi0uMjcxLTEuMjYtLjI3NS0xLjc0OCAwbC0uNDY0LjI2Yy0uNDgzLjI3Mi0xLjAzMi4wNzUtMS4yMjctLjQ0bC0uMi0uNTNjLS4xOTUtLjUxNC0uNzg2LTEuMDE3LTEuMzM1LTEuMTI1bC0uNTItLjEwMkMuODM4IDkuNTI4LjU0MiA5LjAyLjcyIDguNDk4bC4xODItLjUzNkMxLjA3OSA3LjQ0Ljk0NSA2LjY3LjU5MyA2LjIzTC4yNiA1LjgxM2MtLjM0OC0uNDM1LS4yNTItMS4wMTcuMjI3LTEuMzFsLjQ1NS0uMjc2Yy40NzMtLjI4OC44NjUtLjk2OC44NzQtMS41MmwuMDEtLjU2N2MuMDA5LS41NTEuNDUyLS45MjggMS4wMDQtLjg0bC41MjMuMDg1Yy41NDYuMDg4IDEuMjc3LS4xNzggMS42NDQtLjYwNmwuMzQ3LS40MDZjLjM2Mi0uNDIyLjk0NS0uNDI4IDEuMzEyIDBsLjM0Ny40MDZjLjM2My40MjIgMS4wOTEuNjk1IDEuNjQ0LjYwNkw5LjE3IDEuM2MuNTQ2LS4wODguOTk1LjI4OCAxLjAwNS44NGwuMDEuNTY2Yy4wMDkuNTUyLjM5NCAxLjIyOC44NzMgMS41MmwuNDU1LjI3N2MuNDczLjI4OC41OC44NjkuMjI3IDEuMzA5bC0uMzMzLjQxN2MtLjM0OC40MzUtLjQ4NiAxLjIxLS4zMDkgMS43MzJsLjE4My41MzZjLjE3Ny41MjEtLjExMiAxLjAyOS0uNjYgMS4xMzdsLS41MjEuMTAyYy0uNTQyLjEwNy0xLjE0LjYxLTEuMzM1IDEuMTI2bC0uMi41MjljLS4xOTUuNTE1LS43MzguNzE2LTEuMjI3LjQ0bC0uNDY0LS4yNnoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjRkZGIiBkPSJNNS41NzIgNC42NmMwIC44Ni0uNTMxIDEuNDM0LTEuMzIgMS40MzQtLjc4NSAwLTEuMzItLjU3NC0xLjMyLTEuNDM0IDAtLjg1MS41My0xLjQyNiAxLjMyLTEuNDI2Ljc4OSAwIDEuMzIuNTcgMS4zMiAxLjQyNnptLTEuMzIuNjg0Yy4yNzMgMCAuNDUtLjI2Mi40NS0uNjg0IDAtLjQzLS4xNjktLjY4My0uNDUtLjY4My0uMjc3IDAtLjQ1LjI2MS0uNDUuNjgzIDAgLjQyMi4xNzcuNjg0LjQ1LjY4NHpNNC42NTQgOUgzLjU1M2wyLjEyOS0yLjk1MyAxLjY5NS0yLjY4NGgxLjA5OEw2LjMxIDYuMzQgNC42NTQgOXptNC40MTQtMS4zYzAgLjg1NS0uNTMgMS40MjktMS4zMiAxLjQyOS0uNzg1IDAtMS4zMTYtLjU3NC0xLjMxNi0xLjQzIDAtLjg1NS41My0xLjQzIDEuMzE2LTEuNDMuNzkgMCAxLjMyLjU3IDEuMzIgMS40M3ptLTEuMzIuNjc5Yy4yNzMgMCAuNDUtLjI2Mi40NS0uNjg0IDAtLjQzLS4xNjktLjY4LS40NS0uNjgtLjI3NyAwLS40NS4yNTgtLjQ1LjY4IDAgLjQyMi4xNzcuNjg0LjQ1LjY4NHoiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
                  }
                  alt="후기 이벤트"
                  width={12}
                  height={12}
                />
                <span className="text-xs text-sky-600 ml-1">후기 이벤트</span>
              </div>
            )}

            {!!offer.review.star && (
              <div className="flex items-center">
                <div className="flex">
                  {stars.map((star) => {
                    return (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                      >
                        <path
                          className="starColor"
                          fill={star <= point ? "#51ABF3" : "#DEE2E6"}
                          fillRule="evenodd"
                          d="M6 9.121L2.292 11 3 7.02 0 4.202l4.146-.581L6 0l1.854 3.621 4.146.58-3 2.82L9.708 11z"
                        ></path>
                        {star - point === 0.5 && (
                          <path
                            className="starColor"
                            fill="#51ABF3"
                            fillRule="evenodd"
                            d="M6 .151v9.01l-.077-.04L2.263 11l.699-3.98L0 4.202l4.093-.581L5.923 0 6 .151z"
                          ></path>
                        )}
                      </svg>
                    );
                  })}
                </div>
                <span className="text-sm ml-1 text-gray-600">
                  {offer.review.count}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
