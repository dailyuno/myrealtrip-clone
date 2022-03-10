import {
  DefaultRequestBody,
  MockedRequest,
  PathParams,
  rest,
  RestHandler,
} from "msw";
import { Offer, OfferContainer } from "~/modules/offers/types";

const handlers: RestHandler<MockedRequest<DefaultRequestBody>>[] = [
  rest.get<DefaultRequestBody>("/api/fetcher/:id", (req, res, ctx) => {
    const { id } = req.params;
    return res(ctx.status(200), ctx.json([{ id }]));
  }),

  rest.get<DefaultRequestBody, PathParams, Offer>(
    "/api/offer/:id",
    (req, res, ctx) => {
      const { id } = req.params;

      return res(
        ctx.status(200),
        ctx.json({
          id: Number(id),
          isMRT2: true,
          title:
            "페어필드 바이 메리어트 부산 송도비치(3/9까지 판매, 5/31까지 숙박가능)",
          image:
            "https://d2ur7st6jjikze.cloudfront.net/offer_photos/113284/610264_medium_1646194709.jpg?1646194709",
          review: { count: null, type: "istanbul", star: null },
          type: "ETicket",
          category: "티켓/패스",
          rawCategory: "ticket",
          tags: ["맛집/카페", "이색 체험"],
          multiCity: false,
          cityCount: 1,
          duration: { size: 0, unit: "hour" },
          isGuarantee: true,
          nowUse: true,
          price: {
            main: 99000.0,
            origin: 385000.0,
            includeDiscount: false,
          },
          guide: {
            id: 17658,
            name: "페어필드 바이 메리어트 부산 송도비치",
            isRealGuide: false,
          },
          city: {
            key: "Busan",
            name: "부산",
            image:
              "https://d2ur7st6jjikze.cloudfront.net/landscapes/401_medium_square_1435713499.jpg?1435713499",
          },
          country: { key: "Korea, Republic of", name: "대한민국" },
          period: null,
        })
      );
    }
  ),

  rest.get<DefaultRequestBody, PathParams, OfferContainer>(
    "/api/offer-container",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          title: "실시간 베스트 상품",
          offers: [
            {
              id: 113284,
              isMRT2: true,
              title:
                "페어필드 바이 메리어트 부산 송도비치(3/9까지 판매, 5/31까지 숙박가능)",
              image:
                "https://d2ur7st6jjikze.cloudfront.net/offer_photos/113284/610264_medium_1646194709.jpg?1646194709",
              review: { count: null, type: "istanbul", star: null },
              type: "ETicket",
              category: "티켓/패스",
              rawCategory: "ticket",
              tags: ["맛집/카페", "이색 체험"],
              multiCity: false,
              cityCount: 1,
              duration: { size: 0, unit: "hour" },
              isGuarantee: true,
              nowUse: true,
              price: {
                main: 99000.0,
                origin: 385000.0,
                includeDiscount: false,
              },
              guide: {
                id: 17658,
                name: "페어필드 바이 메리어트 부산 송도비치",
                isRealGuide: false,
              },
              city: {
                key: "Busan",
                name: "부산",
                image:
                  "https://d2ur7st6jjikze.cloudfront.net/landscapes/401_medium_square_1435713499.jpg?1435713499",
              },
              country: { key: "Korea, Republic of", name: "대한민국" },
              period: null,
            },
            {
              id: 113404,
              isMRT2: true,
              title:
                "페어몬트 앰배서더 서울 숙박권 (3/13까지 판매, 5월까지 숙박 가능)",
              image:
                "https://d2ur7st6jjikze.cloudfront.net/offer_photos/113404/611644_medium_1646368754.jpg?1646368754",
              review: { count: null, type: "istanbul", star: null },
              type: "IstanbulTicket",
              category: "티켓/패스",
              rawCategory: "ticket",
              tags: ["맛집/카페", "이색 체험"],
              multiCity: false,
              cityCount: 1,
              duration: { size: 0, unit: "hour" },
              isGuarantee: true,
              nowUse: true,
              price: {
                main: 231000.0,
                origin: 660000.0,
                includeDiscount: false,
              },
              guide: {
                id: 17418,
                name: "페어몬트 앰배서더 서울",
                isRealGuide: false,
              },
              city: {
                key: "Seoul",
                name: "서울",
                image:
                  "https://d2ur7st6jjikze.cloudfront.net/landscapes/4744_medium_square_1535960572.jpg?1535960572",
              },
              country: { key: "Korea, Republic of", name: "대한민국" },
              period: null,
            },
            {
              id: 70816,
              isMRT2: true,
              title: "롯데월드 자유이용권 (1인/패밀리)",
              image:
                "https://d2ur7st6jjikze.cloudfront.net/offer_photos/70816/610929_medium_1646146778.jpg?1646146778",
              review: { count: 1446, type: "mrt", star: 4.72614107883817 },
              type: "IstanbulTicket",
              category: "티켓/패스",
              rawCategory: "ticket",
              tags: ["테마파크"],
              multiCity: false,
              cityCount: 1,
              duration: { size: 0, unit: "hour" },
              isGuarantee: false,
              nowUse: true,
              price: {
                main: 27500.0,
                origin: 48000.0,
                includeDiscount: true,
              },
              guide: { id: 5595, name: "스마트인피니", isRealGuide: false },
              city: {
                key: "Seoul",
                name: "서울",
                image:
                  "https://d2ur7st6jjikze.cloudfront.net/landscapes/4744_medium_square_1535960572.jpg?1535960572",
              },
              country: { key: "Korea, Republic of", name: "대한민국" },
              period: null,
            },
            {
              id: 113264,
              isMRT2: true,
              title:
                "휘닉스 평창 호텔 & 리조트 숙박권(3/13까지 판매, 4월까지 숙박 가능)",
              image:
                "https://d2ur7st6jjikze.cloudfront.net/offer_photos/113264/610577_medium_1646030384.jpg?1646030384",
              review: { count: null, type: "istanbul", star: null },
              type: "ETicket",
              category: "티켓/패스",
              rawCategory: "ticket",
              tags: ["맛집/카페", "이색 체험"],
              multiCity: false,
              cityCount: 1,
              duration: { size: 0, unit: "hour" },
              isGuarantee: true,
              nowUse: true,
              price: {
                main: 170000.0,
                origin: 776000.0,
                includeDiscount: false,
              },
              guide: {
                id: 16745,
                name: "휘닉스 평창 호텔&리조트",
                isRealGuide: false,
              },
              city: {
                key: "Gangwondo",
                name: "강원도",
                image:
                  "https://d2ur7st6jjikze.cloudfront.net/landscapes/5192_medium_square_1593063893.jpg?1593063893",
              },
              country: { key: "Korea, Republic of", name: "대한민국" },
              period: null,
            },
            {
              id: 102916,
              isMRT2: true,
              title: "[제주전체] 제주투어패스 48시간 프리패스권",
              image:
                "https://d2ur7st6jjikze.cloudfront.net/offer_photos/102916/611267_medium_1646271526.jpg?1646271526",
              review: { count: 824, type: "mrt", star: 4.76577669902913 },
              type: "IstanbulTicket",
              category: "티켓/패스",
              rawCategory: "ticket",
              tags: ["테마파크"],
              multiCity: false,
              cityCount: 1,
              duration: { size: 0, unit: "hour" },
              isGuarantee: false,
              nowUse: true,
              price: {
                main: 18000.0,
                origin: 19500.0,
                includeDiscount: true,
              },
              guide: {
                id: 16202,
                name: "제주투어패스",
                isRealGuide: false,
              },
              city: {
                key: "Jeju",
                name: "제주도",
                image:
                  "https://d2ur7st6jjikze.cloudfront.net/landscapes/4737_medium_square_1535949304.jpg?1535949304",
              },
              country: { key: "Korea, Republic of", name: "대한민국" },
              period: null,
            },
            {
              id: 113281,
              isMRT2: true,
              title: "소노문 단양 숙박권 (3/8까지 판매, 4월까지 숙박 가능)",
              image:
                "https://d2ur7st6jjikze.cloudfront.net/offer_photos/113281/610769_medium_1646036005.jpg?1646036005",
              review: { count: null, type: "istanbul", star: null },
              type: "IstanbulTicket",
              category: "티켓/패스",
              rawCategory: "ticket",
              tags: ["맛집/카페", "이색 체험"],
              multiCity: false,
              cityCount: 1,
              duration: { size: 0, unit: "hour" },
              isGuarantee: true,
              nowUse: true,
              price: {
                main: 89000.0,
                origin: 290000.0,
                includeDiscount: false,
              },
              guide: {
                id: 17018,
                name: "스마트인피니",
                isRealGuide: false,
              },
              city: {
                key: "Chungcheong-do",
                name: "충청도",
                image:
                  "https://d2ur7st6jjikze.cloudfront.net/landscapes/457_medium_square_1439877225.jpg?1439877225",
              },
              country: { key: "Korea, Republic of", name: "대한민국" },
              period: null,
            },
            {
              id: 113324,
              isMRT2: true,
              title: "아일랜드 리솜 숙박권 (3/10까지 판매, 4월까지 숙박 가능)",
              image:
                "https://d2ur7st6jjikze.cloudfront.net/offer_photos/113324/610676_medium_1646029556.jpg?1646029556",
              review: { count: null, type: "istanbul", star: null },
              type: "IstanbulTicket",
              category: "티켓/패스",
              rawCategory: "ticket",
              tags: ["맛집/카페", "이색 체험"],
              multiCity: false,
              cityCount: 1,
              duration: { size: 0, unit: "hour" },
              isGuarantee: true,
              nowUse: true,
              price: {
                main: 269000.0,
                origin: 548000.0,
                includeDiscount: false,
              },
              guide: {
                id: 17018,
                name: "스마트인피니",
                isRealGuide: false,
              },
              city: {
                key: "Chungcheong-do",
                name: "충청도",
                image:
                  "https://d2ur7st6jjikze.cloudfront.net/landscapes/457_medium_square_1439877225.jpg?1439877225",
              },
              country: { key: "Korea, Republic of", name: "대한민국" },
              period: null,
            },
            {
              id: 43365,
              isMRT2: true,
              title: "[QR코드 바로입장] 에버랜드 종일 자유이용권",
              image:
                "https://d2ur7st6jjikze.cloudfront.net/offer_photos/43365/611675_medium_1646374663.jpg?1646374663",
              review: { count: 1586, type: "mrt", star: 4.73581336696091 },
              type: "IstanbulTicket",
              category: "티켓/패스",
              rawCategory: "ticket",
              tags: ["테마파크"],
              multiCity: true,
              cityCount: 2,
              duration: { size: 0, unit: "hour" },
              isGuarantee: false,
              nowUse: true,
              price: { main: 22000.0, origin: 0, includeDiscount: true },
              guide: { id: 6785, name: "야놀자", isRealGuide: false },
              city: {
                key: "Seoul",
                name: "서울",
                image:
                  "https://d2ur7st6jjikze.cloudfront.net/landscapes/4744_medium_square_1535960572.jpg?1535960572",
              },
              country: { key: "Korea, Republic of", name: "대한민국" },
              period: null,
            },
          ],
          section: {
            name: "MAIN_TOPN",
            page_name: "main",
            pos: 0,
            title: "실시간 베스트 상품",
            more_link: null,
          },
        })
      );
    }
  ),
];

export default handlers;
