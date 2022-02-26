import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import { getAppUrl } from "../../utils/getAppUrl";

import Search from "./search";
import Tour from "./tour";
import Page from "./page";

import "./app.css";
import "./map.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";

const Map = () => {
  const mapContainerRef = useRef(null);
  const baseUrl = getAppUrl();

  const [myGeoJson, setMyGeoJson] = useState([]);
  const [types, setTypes] = useState([
    { slug: "house", name: "🗺 LAND", checked: true },
    { slug: "services", name: "💈 SERVICES", checked: true },
    { slug: "shared", name: "🏠 ESTATE", checked: true },
    { slug: "dorm", name: "🏩 SOLTEL", checked: true },
    { slug: "solfood", name: "🍔 SOLFOOD", checked: true },
    { slug: "apartment", name: "🏢 APARTMENT", checked: false },
    { slug: "monument", name: "🗽 MONUMENT", checked: false },
    { slug: "solmobiles", name: "🚗 SOLMOBILES", checked: false },
    { slug: "luv", name: "💜 LUV", checked: true },
    { slug: "stadium", name: "🏟 STADIUM", checked: true },
    { slug: "share", name: "🚪 NFT SHARE", checked: true },
    { slug: "store", name: "🏬 STORE", checked: true },
    { slug: "boat", name: "⛵️ BOAT", checked: true },
    { slug: "yacht", name: "🛥 YACHT", checked: true },
  ]);
  const [rooms, setRooms] = useState([
    { slug: "one", name: "One", checked: false },
    { slug: "two", name: "Two", checked: false },
    { slug: "more", name: "More", checked: false },
    { slug: "any", name: "Any", checked: true },
  ]);
  const [areas, setAreas] = useState({
    from: 30,
    to: 150,
  });
  const [rents, setRents] = useState({
    from: 5000,
    to: 20000,
  });
  const [deposits, setDeposits] = useState({
    from: 10000,
    to: 100000,
  });
  const [places, setPlaces] = useState({
    type: "FeatureCollection",
    features: [],
  });
  const [slideOpen, setSlideOpen] = useState(false);
  const [tourActive, setTourActive] = useState(false);
  const [tourIndex, setTourIndex] = useState(0);
  const [pageVisible, setPageVisible] = useState(false);
  const [page, setPage] = useState({});

  // Initialize map when component mounts
  useEffect(() => {
    setMyGeoJson([
      {
        type: "Feature",
        properties: {
          id: "item-95",
          title: "Lorem ipsum dolor sit amet",
          excert:
            "Praesent ullamcorper dui molestie augue hendrerit finibus. Praesent ut ipsum nulla.",
          description:
            "Erat velit scelerisque in dictum non consectetur a erat nam. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Pretium aenean pharetra magna ac placerat vestibulum lectus. Augue mauris augue neque gravida in fermentum et. Eros in cursus turpis massa tincidunt. Leo in vitae turpis massa sed elementum tempus egestas. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur.",
          images: [
            {
              original: "/assets/images/original/dorm/2/1.jpg",
              thumbnail: "/assets/images/thumbnail/dorm/2/1.jpg",
            },
            {
              original: "/assets/images/original/dorm/2/2.jpg",
              thumbnail: "/assets/images/thumbnail/dorm/2/2.jpg",
            },
            {
              original: "/assets/images/original/dorm/2/3.jpg",
              thumbnail: "/assets/images/thumbnail/dorm/2/3.jpg",
            },
          ],
          type: "dorm",
          rooms: 2,
          area: 94,
          rent: 20700,
          deposit: 82000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.310258865356445, 60.38377173976387],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-96",
          title: "Lorem ipsum dolor sit amet",
          excert:
            "Suspendisse gravida turpis sed tempor cursus. Donec nec ultrices felis.",
          description:
            "Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Sed euismod nisi porta lorem mollis aliquam ut porttitor leo. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Turpis in eu mi bibendum neque egestas. Nibh praesent tristique magna sit amet purus. Id aliquet risus feugiat in ante metus. Curabitur gravida arcu ac tortor. Vivamus arcu felis bibendum ut tristique et egestas. Nunc non blandit massa enim nec dui nunc mattis. Eu non diam phasellus vestibulum lorem. Risus commodo viverra maecenas accumsan lacus vel.",
          images: [
            {
              original: "/assets/images/original/house/2/1.jpg",
              thumbnail: "/assets/images/thumbnail/house/2/1.jpg",
            },
            {
              original: "/assets/images/original/house/2/2.jpg",
              thumbnail: "/assets/images/thumbnail/house/2/2.jpg",
            },
            {
              original: "/assets/images/original/house/2/3.jpg",
              thumbnail: "/assets/images/thumbnail/house/2/3.jpg",
            },
          ],
          type: "house",
          rooms: 2,
          area: 80,
          rent: 17400,
          deposit: 69000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.337295532226562, 60.37083213569935],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-97",
          title: "Praesent ut ipsum nulla.",
          excert: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          description:
            "Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Sed euismod nisi porta lorem mollis aliquam ut porttitor leo. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Turpis in eu mi bibendum neque egestas. Nibh praesent tristique magna sit amet purus. Id aliquet risus feugiat in ante metus. Curabitur gravida arcu ac tortor. Vivamus arcu felis bibendum ut tristique et egestas. Nunc non blandit massa enim nec dui nunc mattis. Eu non diam phasellus vestibulum lorem. Risus commodo viverra maecenas accumsan lacus vel.",
          images: [
            {
              original: "/assets/images/original/shared/2/1.jpg",
              thumbnail: "/assets/images/thumbnail/shared/2/1.jpg",
            },
            {
              original: "/assets/images/original/shared/2/2.jpg",
              thumbnail: "/assets/images/thumbnail/shared/2/2.jpg",
            },
            {
              original: "/assets/images/original/shared/2/3.jpg",
              thumbnail: "/assets/images/thumbnail/shared/2/3.jpg",
            },
          ],
          type: "shared",
          rooms: 3,
          area: 134,
          rent: 28300,
          deposit: 84000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.356349945068359, 60.36185624479836],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-98",
          title: "Donec nec ultrices felis.",
          excert:
            "Praesent ullamcorper dui molestie augue hendrerit finibus. Praesent ut ipsum nulla.",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus in ornare quam viverra orci sagittis eu volutpat. Diam ut venenatis tellus in metus vulputate eu. Quam quisque id diam vel quam elementum pulvinar etiam. Imperdiet massa tincidunt nunc pulvinar. Velit aliquet sagittis id consectetur purus ut. Libero enim sed faucibus turpis in eu mi bibendum. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc.",
          images: [
            {
              original: "/assets/images/original/dorm/2/1.jpg",
              thumbnail: "/assets/images/thumbnail/dorm/2/1.jpg",
            },
            {
              original: "/assets/images/original/dorm/2/2.jpg",
              thumbnail: "/assets/images/thumbnail/dorm/2/2.jpg",
            },
            {
              original: "/assets/images/original/dorm/2/3.jpg",
              thumbnail: "/assets/images/thumbnail/dorm/2/3.jpg",
            },
          ],
          type: "dorm",
          rooms: 3,
          area: 149,
          rent: 27800,
          deposit: 83000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.3466081619262695, 60.36096488668036],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-99",
          title: "Suspendisse gravida turpis",
          excert:
            "Orci varius natoque penatibus et magnis dis parturient montes.",
          description:
            "Erat velit scelerisque in dictum non consectetur a erat nam. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Pretium aenean pharetra magna ac placerat vestibulum lectus. Augue mauris augue neque gravida in fermentum et. Eros in cursus turpis massa tincidunt. Leo in vitae turpis massa sed elementum tempus egestas. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur.",
          images: [
            {
              original: "/assets/images/original/dorm/1/1.jpg",
              thumbnail: "/assets/images/thumbnail/dorm/1/1.jpg",
            },
            {
              original: "/assets/images/original/dorm/1/2.jpg",
              thumbnail: "/assets/images/thumbnail/dorm/1/2.jpg",
            },
            {
              original: "/assets/images/original/dorm/1/3.jpg",
              thumbnail: "/assets/images/thumbnail/dorm/1/3.jpg",
            },
          ],
          type: "dorm",
          rooms: 1,
          area: 77,
          rent: 17600,
          deposit: 70000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.368752479553223, 60.35737798505038],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-100",
          title: "Lorem ipsum dolor sit amet",
          excert:
            "Suspendisse gravida turpis sed tempor cursus. Donec nec ultrices felis.",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus in ornare quam viverra orci sagittis eu volutpat. Diam ut venenatis tellus in metus vulputate eu. Quam quisque id diam vel quam elementum pulvinar etiam. Imperdiet massa tincidunt nunc pulvinar. Velit aliquet sagittis id consectetur purus ut. Libero enim sed faucibus turpis in eu mi bibendum. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc.",
          images: [
            {
              original: "/assets/images/original/apartment/2/1.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/2/1.jpg",
            },
            {
              original: "/assets/images/original/apartment/2/2.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/2/2.jpg",
            },
            {
              original: "/assets/images/original/apartment/2/3.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/2/3.jpg",
            },
          ],
          type: "apartment",
          rooms: 1,
          area: 111,
          rent: 22700,
          deposit: 68000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.367765426635742, 60.35438506099978],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-101",
          title: "Praesent ut ipsum nulla.",
          excert:
            "Orci varius natoque penatibus et magnis dis parturient montes.",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus in ornare quam viverra orci sagittis eu volutpat. Diam ut venenatis tellus in metus vulputate eu. Quam quisque id diam vel quam elementum pulvinar etiam. Imperdiet massa tincidunt nunc pulvinar. Velit aliquet sagittis id consectetur purus ut. Libero enim sed faucibus turpis in eu mi bibendum. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc.",
          images: [
            {
              original: "/assets/images/original/apartment/1/1.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/1/1.jpg",
            },
            {
              original: "/assets/images/original/apartment/1/2.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/1/2.jpg",
            },
            {
              original: "/assets/images/original/apartment/1/3.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/1/3.jpg",
            },
          ],
          type: "apartment",
          rooms: 1,
          area: 74,
          rent: 17200,
          deposit: 68000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.370125770568848, 60.36864674454144],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-102",
          title: "Suspendisse gravida turpis",
          excert:
            "Orci varius natoque penatibus et magnis dis parturient montes.",
          description:
            "Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Diam sit amet nisl suscipit adipiscing. Consectetur adipiscing elit duis tristique sollicitudin. In tellus integer feugiat scelerisque varius. Tortor consequat id porta nibh venenatis cras. Mi sit amet mauris commodo. Tellus orci ac auctor augue mauris augue neque gravida. Non diam phasellus vestibulum lorem sed. Et netus et malesuada fames ac.",
          images: [
            {
              original: "/assets/images/original/dorm/2/1.jpg",
              thumbnail: "/assets/images/thumbnail/dorm/2/1.jpg",
            },
            {
              original: "/assets/images/original/dorm/2/2.jpg",
              thumbnail: "/assets/images/thumbnail/dorm/2/2.jpg",
            },
            {
              original: "/assets/images/original/dorm/2/3.jpg",
              thumbnail: "/assets/images/thumbnail/dorm/2/3.jpg",
            },
          ],
          type: "dorm",
          rooms: 0,
          area: 32,
          rent: 7100,
          deposit: 28000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.3621435165405265, 60.36917719275717],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-103",
          title: "Donec nec ultrices felis.",
          excert:
            "Praesent ullamcorper dui molestie augue hendrerit finibus. Praesent ut ipsum nulla.",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus in ornare quam viverra orci sagittis eu volutpat. Diam ut venenatis tellus in metus vulputate eu. Quam quisque id diam vel quam elementum pulvinar etiam. Imperdiet massa tincidunt nunc pulvinar. Velit aliquet sagittis id consectetur purus ut. Libero enim sed faucibus turpis in eu mi bibendum. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc.",
          images: [
            {
              original: "/assets/images/original/dorm/3/1.jpg",
              thumbnail: "/assets/images/thumbnail/dorm/3/1.jpg",
            },
            {
              original: "/assets/images/original/dorm/3/2.jpg",
              thumbnail: "/assets/images/thumbnail/dorm/3/2.jpg",
            },
            {
              original: "/assets/images/original/dorm/3/3.jpg",
              thumbnail: "/assets/images/thumbnail/dorm/3/3.jpg",
            },
          ],
          type: "dorm",
          rooms: 1,
          area: 95,
          rent: 20000,
          deposit: 60000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.357422828674316, 60.37076848560179],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-104",
          title: "Suspendisse gravida turpis",
          excert:
            "Orci varius natoque penatibus et magnis dis parturient montes.",
          description:
            "Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Sed euismod nisi porta lorem mollis aliquam ut porttitor leo. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Turpis in eu mi bibendum neque egestas. Nibh praesent tristique magna sit amet purus. Id aliquet risus feugiat in ante metus. Curabitur gravida arcu ac tortor. Vivamus arcu felis bibendum ut tristique et egestas. Nunc non blandit massa enim nec dui nunc mattis. Eu non diam phasellus vestibulum lorem. Risus commodo viverra maecenas accumsan lacus vel.",
          images: [
            {
              original: "/assets/images/original/apartment/3/1.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/3/1.jpg",
            },
            {
              original: "/assets/images/original/apartment/3/2.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/3/2.jpg",
            },
            {
              original: "/assets/images/original/apartment/3/3.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/3/3.jpg",
            },
          ],
          type: "apartment",
          rooms: 0,
          area: 44,
          rent: 10100,
          deposit: 40000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.350041389465332, 60.371214033673986],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-105",
          title: "Lorem ipsum dolor sit amet",
          excert:
            "Praesent ullamcorper dui molestie augue hendrerit finibus. Praesent ut ipsum nulla.",
          description:
            "Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Diam sit amet nisl suscipit adipiscing. Consectetur adipiscing elit duis tristique sollicitudin. In tellus integer feugiat scelerisque varius. Tortor consequat id porta nibh venenatis cras. Mi sit amet mauris commodo. Tellus orci ac auctor augue mauris augue neque gravida. Non diam phasellus vestibulum lorem sed. Et netus et malesuada fames ac.",
          images: [
            {
              original: "/assets/images/original/apartment/1/1.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/1/1.jpg",
            },
            {
              original: "/assets/images/original/apartment/1/2.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/1/2.jpg",
            },
            {
              original: "/assets/images/original/apartment/1/3.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/1/3.jpg",
            },
          ],
          type: "apartment",
          rooms: 2,
          area: 78,
          rent: 15400,
          deposit: 77000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.354118347167969, 60.37887226479014],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-106",
          title: "Orci varius natoque penatibus",
          excert:
            "Orci varius natoque penatibus et magnis dis parturient montes.",
          description:
            "Erat velit scelerisque in dictum non consectetur a erat nam. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Pretium aenean pharetra magna ac placerat vestibulum lectus. Augue mauris augue neque gravida in fermentum et. Eros in cursus turpis massa tincidunt. Leo in vitae turpis massa sed elementum tempus egestas. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur.",
          images: [
            {
              original: "/assets/images/original/shared/3/1.jpg",
              thumbnail: "/assets/images/thumbnail/shared/3/1.jpg",
            },
            {
              original: "/assets/images/original/shared/3/2.jpg",
              thumbnail: "/assets/images/thumbnail/shared/3/2.jpg",
            },
            {
              original: "/assets/images/original/shared/3/3.jpg",
              thumbnail: "/assets/images/thumbnail/shared/3/3.jpg",
            },
          ],
          type: "shared",
          rooms: 1,
          area: 92,
          rent: 21100,
          deposit: 105000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.347509384155273, 60.385510770103394],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-107",
          title: "Donec nec ultrices felis.",
          excert:
            "Praesent ullamcorper dui molestie augue hendrerit finibus. Praesent ut ipsum nulla.",
          description:
            "Erat velit scelerisque in dictum non consectetur a erat nam. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Pretium aenean pharetra magna ac placerat vestibulum lectus. Augue mauris augue neque gravida in fermentum et. Eros in cursus turpis massa tincidunt. Leo in vitae turpis massa sed elementum tempus egestas. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur.",
          images: [
            {
              original: "/assets/images/original/shared/2/1.jpg",
              thumbnail: "/assets/images/thumbnail/shared/2/1.jpg",
            },
            {
              original: "/assets/images/original/shared/2/2.jpg",
              thumbnail: "/assets/images/thumbnail/shared/2/2.jpg",
            },
            {
              original: "/assets/images/original/shared/2/3.jpg",
              thumbnail: "/assets/images/thumbnail/shared/2/3.jpg",
            },
          ],
          type: "shared",
          rooms: 2,
          area: 60,
          rent: 13200,
          deposit: 66000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.337767601013184, 60.391490629121044],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-108",
          title: "Donec nec ultrices felis.",
          excert:
            "Orci varius natoque penatibus et magnis dis parturient montes.",
          description:
            "Erat velit scelerisque in dictum non consectetur a erat nam. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Pretium aenean pharetra magna ac placerat vestibulum lectus. Augue mauris augue neque gravida in fermentum et. Eros in cursus turpis massa tincidunt. Leo in vitae turpis massa sed elementum tempus egestas. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur.",
          images: [
            {
              original: "/assets/images/original/dorm/1/1.jpg",
              thumbnail: "/assets/images/thumbnail/dorm/1/1.jpg",
            },
            {
              original: "/assets/images/original/dorm/1/2.jpg",
              thumbnail: "/assets/images/thumbnail/dorm/1/2.jpg",
            },
            {
              original: "/assets/images/original/dorm/1/3.jpg",
              thumbnail: "/assets/images/thumbnail/dorm/1/3.jpg",
            },
          ],
          type: "dorm",
          rooms: 2,
          area: 93,
          rent: 18500,
          deposit: 92000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.324635505676269, 60.38968830495769],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-109",
          title: "Suspendisse gravida turpis",
          excert: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          description:
            "Erat velit scelerisque in dictum non consectetur a erat nam. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Pretium aenean pharetra magna ac placerat vestibulum lectus. Augue mauris augue neque gravida in fermentum et. Eros in cursus turpis massa tincidunt. Leo in vitae turpis massa sed elementum tempus egestas. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur.",
          images: [
            {
              original: "/assets/images/original/apartment/3/1.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/3/1.jpg",
            },
            {
              original: "/assets/images/original/apartment/3/2.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/3/2.jpg",
            },
            {
              original: "/assets/images/original/apartment/3/3.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/3/3.jpg",
            },
          ],
          type: "apartment",
          rooms: 2,
          area: 119,
          rent: 25900,
          deposit: 129000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.3208160400390625, 60.394056118492266],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-110",
          title: "Lorem ipsum dolor sit amet",
          excert:
            "Suspendisse gravida turpis sed tempor cursus. Donec nec ultrices felis.",
          description:
            "Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Sed euismod nisi porta lorem mollis aliquam ut porttitor leo. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Turpis in eu mi bibendum neque egestas. Nibh praesent tristique magna sit amet purus. Id aliquet risus feugiat in ante metus. Curabitur gravida arcu ac tortor. Vivamus arcu felis bibendum ut tristique et egestas. Nunc non blandit massa enim nec dui nunc mattis. Eu non diam phasellus vestibulum lorem. Risus commodo viverra maecenas accumsan lacus vel.",
          images: [
            {
              original: "/assets/images/original/apartment/3/1.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/3/1.jpg",
            },
            {
              original: "/assets/images/original/apartment/3/2.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/3/2.jpg",
            },
            {
              original: "/assets/images/original/apartment/3/3.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/3/3.jpg",
            },
          ],
          type: "apartment",
          rooms: 1,
          area: 39,
          rent: 8900,
          deposit: 35000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.32261848449707, 60.394034916929215],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-111",
          title: "Suspendisse gravida turpis",
          excert:
            "Orci varius natoque penatibus et magnis dis parturient montes.",
          description:
            "Erat velit scelerisque in dictum non consectetur a erat nam. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Pretium aenean pharetra magna ac placerat vestibulum lectus. Augue mauris augue neque gravida in fermentum et. Eros in cursus turpis massa tincidunt. Leo in vitae turpis massa sed elementum tempus egestas. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur.",
          images: [
            {
              original: "/assets/images/original/house/3/1.jpg",
              thumbnail: "/assets/images/thumbnail/house/3/1.jpg",
            },
            {
              original: "/assets/images/original/house/3/2.jpg",
              thumbnail: "/assets/images/thumbnail/house/3/2.jpg",
            },
            {
              original: "/assets/images/original/house/3/3.jpg",
              thumbnail: "/assets/images/thumbnail/house/3/3.jpg",
            },
          ],
          type: "house",
          rooms: 0,
          area: 54,
          rent: 12400,
          deposit: 62000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.315065383911133, 60.39454375063201],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-112",
          title: "Praesent ut ipsum nulla.",
          excert:
            "Suspendisse gravida turpis sed tempor cursus. Donec nec ultrices felis.",
          description:
            "Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Diam sit amet nisl suscipit adipiscing. Consectetur adipiscing elit duis tristique sollicitudin. In tellus integer feugiat scelerisque varius. Tortor consequat id porta nibh venenatis cras. Mi sit amet mauris commodo. Tellus orci ac auctor augue mauris augue neque gravida. Non diam phasellus vestibulum lorem sed. Et netus et malesuada fames ac.",
          images: [
            {
              original: "/assets/images/original/dorm/2/1.jpg",
              thumbnail: "/assets/images/thumbnail/dorm/2/1.jpg",
            },
            {
              original: "/assets/images/original/dorm/2/2.jpg",
              thumbnail: "/assets/images/thumbnail/dorm/2/2.jpg",
            },
            {
              original: "/assets/images/original/dorm/2/3.jpg",
              thumbnail: "/assets/images/thumbnail/dorm/2/3.jpg",
            },
          ],
          type: "dorm",
          rooms: 2,
          area: 80,
          rent: 18600,
          deposit: 55000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.316267013549805, 60.39566739688625],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-113",
          title: "Donec nec ultrices felis.",
          excert:
            "Praesent ullamcorper dui molestie augue hendrerit finibus. Praesent ut ipsum nulla.",
          description:
            "Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Sed euismod nisi porta lorem mollis aliquam ut porttitor leo. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Turpis in eu mi bibendum neque egestas. Nibh praesent tristique magna sit amet purus. Id aliquet risus feugiat in ante metus. Curabitur gravida arcu ac tortor. Vivamus arcu felis bibendum ut tristique et egestas. Nunc non blandit massa enim nec dui nunc mattis. Eu non diam phasellus vestibulum lorem. Risus commodo viverra maecenas accumsan lacus vel.",
          images: [
            {
              original: "/assets/images/original/apartment/2/1.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/2/1.jpg",
            },
            {
              original: "/assets/images/original/apartment/2/2.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/2/2.jpg",
            },
            {
              original: "/assets/images/original/apartment/2/3.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/2/3.jpg",
            },
          ],
          type: "apartment",
          rooms: 1,
          area: 99,
          rent: 22700,
          deposit: 113000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.326824188232422, 60.3966638054588],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-114",
          title: "Lorem ipsum dolor sit amet",
          excert:
            "Suspendisse gravida turpis sed tempor cursus. Donec nec ultrices felis.",
          description:
            "Erat velit scelerisque in dictum non consectetur a erat nam. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Pretium aenean pharetra magna ac placerat vestibulum lectus. Augue mauris augue neque gravida in fermentum et. Eros in cursus turpis massa tincidunt. Leo in vitae turpis massa sed elementum tempus egestas. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur.",
          images: [
            {
              original: "/assets/images/original/apartment/2/1.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/2/1.jpg",
            },
            {
              original: "/assets/images/original/apartment/2/2.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/2/2.jpg",
            },
            {
              original: "/assets/images/original/apartment/2/3.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/2/3.jpg",
            },
          ],
          type: "apartment",
          rooms: 1,
          area: 66,
          rent: 15400,
          deposit: 77000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.329141616821289, 60.39742699139842],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-115",
          title: "Donec nec ultrices felis.",
          excert:
            "Suspendisse gravida turpis sed tempor cursus. Donec nec ultrices felis.",
          description:
            "Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Diam sit amet nisl suscipit adipiscing. Consectetur adipiscing elit duis tristique sollicitudin. In tellus integer feugiat scelerisque varius. Tortor consequat id porta nibh venenatis cras. Mi sit amet mauris commodo. Tellus orci ac auctor augue mauris augue neque gravida. Non diam phasellus vestibulum lorem sed. Et netus et malesuada fames ac.",
          images: [
            {
              original: "/assets/images/original/house/1/1.jpg",
              thumbnail: "/assets/images/thumbnail/house/1/1.jpg",
            },
            {
              original: "/assets/images/original/house/1/2.jpg",
              thumbnail: "/assets/images/thumbnail/house/1/2.jpg",
            },
            {
              original: "/assets/images/original/house/1/3.jpg",
              thumbnail: "/assets/images/thumbnail/house/1/3.jpg",
            },
          ],
          type: "house",
          rooms: 0,
          area: 38,
          rent: 8300,
          deposit: 33000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.332489013671875, 60.394268133363525],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-116",
          title: "Donec nec ultrices felis.",
          excert: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          description:
            "Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Diam sit amet nisl suscipit adipiscing. Consectetur adipiscing elit duis tristique sollicitudin. In tellus integer feugiat scelerisque varius. Tortor consequat id porta nibh venenatis cras. Mi sit amet mauris commodo. Tellus orci ac auctor augue mauris augue neque gravida. Non diam phasellus vestibulum lorem sed. Et netus et malesuada fames ac.",
          images: [
            {
              original: "/assets/images/original/house/1/1.jpg",
              thumbnail: "/assets/images/thumbnail/house/1/1.jpg",
            },
            {
              original: "/assets/images/original/house/1/2.jpg",
              thumbnail: "/assets/images/thumbnail/house/1/2.jpg",
            },
            {
              original: "/assets/images/original/house/1/3.jpg",
              thumbnail: "/assets/images/thumbnail/house/1/3.jpg",
            },
          ],
          type: "house",
          rooms: 0,
          area: 36,
          rent: 8800,
          deposit: 26000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.319657325744629, 60.39102415478886],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-117",
          title: "Praesent ut ipsum nulla.",
          excert:
            "Praesent ullamcorper dui molestie augue hendrerit finibus. Praesent ut ipsum nulla.",
          description:
            "Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Sed euismod nisi porta lorem mollis aliquam ut porttitor leo. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Turpis in eu mi bibendum neque egestas. Nibh praesent tristique magna sit amet purus. Id aliquet risus feugiat in ante metus. Curabitur gravida arcu ac tortor. Vivamus arcu felis bibendum ut tristique et egestas. Nunc non blandit massa enim nec dui nunc mattis. Eu non diam phasellus vestibulum lorem. Risus commodo viverra maecenas accumsan lacus vel.",
          images: [
            {
              original: "/assets/images/original/house/1/1.jpg",
              thumbnail: "/assets/images/thumbnail/house/1/1.jpg",
            },
            {
              original: "/assets/images/original/house/1/2.jpg",
              thumbnail: "/assets/images/thumbnail/house/1/2.jpg",
            },
            {
              original: "/assets/images/original/house/1/3.jpg",
              thumbnail: "/assets/images/thumbnail/house/1/3.jpg",
            },
          ],
          type: "house",
          rooms: 0,
          area: 46,
          rent: 10700,
          deposit: 53000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.3109025955200195, 60.39719379759299],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-118",
          title: "Suspendisse gravida turpis",
          excert: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus in ornare quam viverra orci sagittis eu volutpat. Diam ut venenatis tellus in metus vulputate eu. Quam quisque id diam vel quam elementum pulvinar etiam. Imperdiet massa tincidunt nunc pulvinar. Velit aliquet sagittis id consectetur purus ut. Libero enim sed faucibus turpis in eu mi bibendum. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc.",
          images: [
            {
              original: "/assets/images/original/house/1/1.jpg",
              thumbnail: "/assets/images/thumbnail/house/1/1.jpg",
            },
            {
              original: "/assets/images/original/house/1/2.jpg",
              thumbnail: "/assets/images/thumbnail/house/1/2.jpg",
            },
            {
              original: "/assets/images/original/house/1/3.jpg",
              thumbnail: "/assets/images/thumbnail/house/1/3.jpg",
            },
          ],
          type: "house",
          rooms: 1,
          area: 31,
          rent: 7700,
          deposit: 23000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.312018394470215, 60.39706660026772],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-119",
          title: "Suspendisse gravida turpis",
          excert:
            "Suspendisse gravida turpis sed tempor cursus. Donec nec ultrices felis.",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus in ornare quam viverra orci sagittis eu volutpat. Diam ut venenatis tellus in metus vulputate eu. Quam quisque id diam vel quam elementum pulvinar etiam. Imperdiet massa tincidunt nunc pulvinar. Velit aliquet sagittis id consectetur purus ut. Libero enim sed faucibus turpis in eu mi bibendum. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc.",
          images: [
            {
              original: "/assets/images/original/apartment/3/1.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/3/1.jpg",
            },
            {
              original: "/assets/images/original/apartment/3/2.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/3/2.jpg",
            },
            {
              original: "/assets/images/original/apartment/3/3.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/3/3.jpg",
            },
          ],
          type: "apartment",
          rooms: 2,
          area: 75,
          rent: 15500,
          deposit: 46000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.315237045288086, 60.393822900539206],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-120",
          title: "Orci varius natoque penatibus",
          excert:
            "Orci varius natoque penatibus et magnis dis parturient montes.",
          description:
            "Erat velit scelerisque in dictum non consectetur a erat nam. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Pretium aenean pharetra magna ac placerat vestibulum lectus. Augue mauris augue neque gravida in fermentum et. Eros in cursus turpis massa tincidunt. Leo in vitae turpis massa sed elementum tempus egestas. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur.",
          images: [
            {
              original: "/assets/images/original/shared/1/1.jpg",
              thumbnail: "/assets/images/thumbnail/shared/1/1.jpg",
            },
            {
              original: "/assets/images/original/shared/1/2.jpg",
              thumbnail: "/assets/images/thumbnail/shared/1/2.jpg",
            },
            {
              original: "/assets/images/original/shared/1/3.jpg",
              thumbnail: "/assets/images/thumbnail/shared/1/3.jpg",
            },
          ],
          type: "shared",
          rooms: 1,
          area: 74,
          rent: 16900,
          deposit: 84000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.321974754333496, 60.38850083687651],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-121",
          title: "Orci varius natoque penatibus",
          excert:
            "Orci varius natoque penatibus et magnis dis parturient montes.",
          description:
            "Erat velit scelerisque in dictum non consectetur a erat nam. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Pretium aenean pharetra magna ac placerat vestibulum lectus. Augue mauris augue neque gravida in fermentum et. Eros in cursus turpis massa tincidunt. Leo in vitae turpis massa sed elementum tempus egestas. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur.",
          images: [
            {
              original: "/assets/images/original/dorm/2/1.jpg",
              thumbnail: "/assets/images/thumbnail/dorm/2/1.jpg",
            },
            {
              original: "/assets/images/original/dorm/2/2.jpg",
              thumbnail: "/assets/images/thumbnail/dorm/2/2.jpg",
            },
            {
              original: "/assets/images/original/dorm/2/3.jpg",
              thumbnail: "/assets/images/thumbnail/dorm/2/3.jpg",
            },
          ],
          type: "dorm",
          rooms: 2,
          area: 145,
          rent: 31700,
          deposit: 126000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.330514907836913, 60.38758900163693],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-122",
          title: "Lorem ipsum dolor sit amet",
          excert:
            "Orci varius natoque penatibus et magnis dis parturient montes.",
          description:
            "Erat velit scelerisque in dictum non consectetur a erat nam. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Pretium aenean pharetra magna ac placerat vestibulum lectus. Augue mauris augue neque gravida in fermentum et. Eros in cursus turpis massa tincidunt. Leo in vitae turpis massa sed elementum tempus egestas. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur.",
          images: [
            {
              original: "/assets/images/original/shared/1/1.jpg",
              thumbnail: "/assets/images/thumbnail/shared/1/1.jpg",
            },
            {
              original: "/assets/images/original/shared/1/2.jpg",
              thumbnail: "/assets/images/thumbnail/shared/1/2.jpg",
            },
            {
              original: "/assets/images/original/shared/1/3.jpg",
              thumbnail: "/assets/images/thumbnail/shared/1/3.jpg",
            },
          ],
          type: "shared",
          rooms: 2,
          area: 81,
          rent: 17400,
          deposit: 87000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.323605537414551, 60.393271651463415],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-123",
          title: "Lorem ipsum dolor sit amet",
          excert:
            "Orci varius natoque penatibus et magnis dis parturient montes.",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus in ornare quam viverra orci sagittis eu volutpat. Diam ut venenatis tellus in metus vulputate eu. Quam quisque id diam vel quam elementum pulvinar etiam. Imperdiet massa tincidunt nunc pulvinar. Velit aliquet sagittis id consectetur purus ut. Libero enim sed faucibus turpis in eu mi bibendum. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc.",
          images: [
            {
              original: "/assets/images/original/house/1/1.jpg",
              thumbnail: "/assets/images/thumbnail/house/1/1.jpg",
            },
            {
              original: "/assets/images/original/house/1/2.jpg",
              thumbnail: "/assets/images/thumbnail/house/1/2.jpg",
            },
            {
              original: "/assets/images/original/house/1/3.jpg",
              thumbnail: "/assets/images/thumbnail/house/1/3.jpg",
            },
          ],
          type: "house",
          rooms: 2,
          area: 129,
          rent: 27400,
          deposit: 137000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.3224897384643555, 60.39301722566504],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-124",
          title: "Donec nec ultrices felis.",
          excert:
            "Suspendisse gravida turpis sed tempor cursus. Donec nec ultrices felis.",
          description:
            "Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Diam sit amet nisl suscipit adipiscing. Consectetur adipiscing elit duis tristique sollicitudin. In tellus integer feugiat scelerisque varius. Tortor consequat id porta nibh venenatis cras. Mi sit amet mauris commodo. Tellus orci ac auctor augue mauris augue neque gravida. Non diam phasellus vestibulum lorem sed. Et netus et malesuada fames ac.",
          images: [
            {
              original: "/assets/images/original/house/3/1.jpg",
              thumbnail: "/assets/images/thumbnail/house/3/1.jpg",
            },
            {
              original: "/assets/images/original/house/3/2.jpg",
              thumbnail: "/assets/images/thumbnail/house/3/2.jpg",
            },
            {
              original: "/assets/images/original/house/3/3.jpg",
              thumbnail: "/assets/images/thumbnail/house/3/3.jpg",
            },
          ],
          type: "house",
          rooms: 2,
          area: 96,
          rent: 19900,
          deposit: 59000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.328197479248047, 60.39380169882425],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-125",
          title: "Praesent ut ipsum nulla.",
          excert:
            "Suspendisse gravida turpis sed tempor cursus. Donec nec ultrices felis.",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus in ornare quam viverra orci sagittis eu volutpat. Diam ut venenatis tellus in metus vulputate eu. Quam quisque id diam vel quam elementum pulvinar etiam. Imperdiet massa tincidunt nunc pulvinar. Velit aliquet sagittis id consectetur purus ut. Libero enim sed faucibus turpis in eu mi bibendum. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc.",
          images: [
            {
              original: "/assets/images/original/apartment/2/1.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/2/1.jpg",
            },
            {
              original: "/assets/images/original/apartment/2/2.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/2/2.jpg",
            },
            {
              original: "/assets/images/original/apartment/2/3.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/2/3.jpg",
            },
          ],
          type: "apartment",
          rooms: 2,
          area: 104,
          rent: 20400,
          deposit: 102000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.3279829025268555, 60.384938172806244],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-126",
          title: "Orci varius natoque penatibus",
          excert:
            "Orci varius natoque penatibus et magnis dis parturient montes.",
          description:
            "Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Sed euismod nisi porta lorem mollis aliquam ut porttitor leo. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Turpis in eu mi bibendum neque egestas. Nibh praesent tristique magna sit amet purus. Id aliquet risus feugiat in ante metus. Curabitur gravida arcu ac tortor. Vivamus arcu felis bibendum ut tristique et egestas. Nunc non blandit massa enim nec dui nunc mattis. Eu non diam phasellus vestibulum lorem. Risus commodo viverra maecenas accumsan lacus vel.",
          images: [
            {
              original: "/assets/images/original/dorm/1/1.jpg",
              thumbnail: "/assets/images/thumbnail/dorm/1/1.jpg",
            },
            {
              original: "/assets/images/original/dorm/1/2.jpg",
              thumbnail: "/assets/images/thumbnail/dorm/1/2.jpg",
            },
            {
              original: "/assets/images/original/dorm/1/3.jpg",
              thumbnail: "/assets/images/thumbnail/dorm/1/3.jpg",
            },
          ],
          type: "dorm",
          rooms: 2,
          area: 122,
          rent: 24300,
          deposit: 72000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.324978828430176, 60.38305065117059],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-127",
          title: "Lorem ipsum dolor sit amet",
          excert:
            "Praesent ullamcorper dui molestie augue hendrerit finibus. Praesent ut ipsum nulla.",
          description:
            "Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Sed euismod nisi porta lorem mollis aliquam ut porttitor leo. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Turpis in eu mi bibendum neque egestas. Nibh praesent tristique magna sit amet purus. Id aliquet risus feugiat in ante metus. Curabitur gravida arcu ac tortor. Vivamus arcu felis bibendum ut tristique et egestas. Nunc non blandit massa enim nec dui nunc mattis. Eu non diam phasellus vestibulum lorem. Risus commodo viverra maecenas accumsan lacus vel.",
          images: [
            {
              original: "/assets/images/original/house/1/1.jpg",
              thumbnail: "/assets/images/thumbnail/house/1/1.jpg",
            },
            {
              original: "/assets/images/original/house/1/2.jpg",
              thumbnail: "/assets/images/thumbnail/house/1/2.jpg",
            },
            {
              original: "/assets/images/original/house/1/3.jpg",
              thumbnail: "/assets/images/thumbnail/house/1/3.jpg",
            },
          ],
          type: "house",
          rooms: 1,
          area: 50,
          rent: 11100,
          deposit: 55000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.321974754333496, 60.384704889539755],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-128",
          title: "Donec nec ultrices felis.",
          excert: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          description:
            "Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Sed euismod nisi porta lorem mollis aliquam ut porttitor leo. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Turpis in eu mi bibendum neque egestas. Nibh praesent tristique magna sit amet purus. Id aliquet risus feugiat in ante metus. Curabitur gravida arcu ac tortor. Vivamus arcu felis bibendum ut tristique et egestas. Nunc non blandit massa enim nec dui nunc mattis. Eu non diam phasellus vestibulum lorem. Risus commodo viverra maecenas accumsan lacus vel.",
          images: [
            {
              original: "/assets/images/original/apartment/3/1.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/3/1.jpg",
            },
            {
              original: "/assets/images/original/apartment/3/2.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/3/2.jpg",
            },
            {
              original: "/assets/images/original/apartment/3/3.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/3/3.jpg",
            },
          ],
          type: "apartment",
          rooms: 1,
          area: 42,
          rent: 9400,
          deposit: 47000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.32811164855957, 60.37859651485721],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-129",
          title: "Lorem ipsum dolor sit amet",
          excert:
            "Suspendisse gravida turpis sed tempor cursus. Donec nec ultrices felis.",
          description:
            "Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Diam sit amet nisl suscipit adipiscing. Consectetur adipiscing elit duis tristique sollicitudin. In tellus integer feugiat scelerisque varius. Tortor consequat id porta nibh venenatis cras. Mi sit amet mauris commodo. Tellus orci ac auctor augue mauris augue neque gravida. Non diam phasellus vestibulum lorem sed. Et netus et malesuada fames ac.",
          images: [
            {
              original: "/assets/images/original/apartment/2/1.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/2/1.jpg",
            },
            {
              original: "/assets/images/original/apartment/2/2.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/2/2.jpg",
            },
            {
              original: "/assets/images/original/apartment/2/3.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/2/3.jpg",
            },
          ],
          type: "apartment",
          rooms: 1,
          area: 96,
          rent: 19400,
          deposit: 97000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.32536506652832, 60.37798137198026],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-130",
          title: "Orci varius natoque penatibus",
          excert:
            "Orci varius natoque penatibus et magnis dis parturient montes.",
          description:
            "Erat velit scelerisque in dictum non consectetur a erat nam. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Pretium aenean pharetra magna ac placerat vestibulum lectus. Augue mauris augue neque gravida in fermentum et. Eros in cursus turpis massa tincidunt. Leo in vitae turpis massa sed elementum tempus egestas. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur.",
          images: [
            {
              original: "/assets/images/original/house/2/1.jpg",
              thumbnail: "/assets/images/thumbnail/house/2/1.jpg",
            },
            {
              original: "/assets/images/original/house/2/2.jpg",
              thumbnail: "/assets/images/thumbnail/house/2/2.jpg",
            },
            {
              original: "/assets/images/original/house/2/3.jpg",
              thumbnail: "/assets/images/thumbnail/house/2/3.jpg",
            },
          ],
          type: "house",
          rooms: 1,
          area: 80,
          rent: 15400,
          deposit: 77000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.340900421142578, 60.36928328136428],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-131",
          title: "Lorem ipsum dolor sit amet",
          excert:
            "Orci varius natoque penatibus et magnis dis parturient montes.",
          description:
            "Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Diam sit amet nisl suscipit adipiscing. Consectetur adipiscing elit duis tristique sollicitudin. In tellus integer feugiat scelerisque varius. Tortor consequat id porta nibh venenatis cras. Mi sit amet mauris commodo. Tellus orci ac auctor augue mauris augue neque gravida. Non diam phasellus vestibulum lorem sed. Et netus et malesuada fames ac.",
          images: [
            {
              original: "/assets/images/original/apartment/3/1.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/3/1.jpg",
            },
            {
              original: "/assets/images/original/apartment/3/2.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/3/2.jpg",
            },
            {
              original: "/assets/images/original/apartment/3/3.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/3/3.jpg",
            },
          ],
          type: "apartment",
          rooms: 1,
          area: 47,
          rent: 11200,
          deposit: 44000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.354633331298828, 60.37032293143776],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-132",
          title: "Donec nec ultrices felis.",
          excert:
            "Orci varius natoque penatibus et magnis dis parturient montes.",
          description:
            "Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Sed euismod nisi porta lorem mollis aliquam ut porttitor leo. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Turpis in eu mi bibendum neque egestas. Nibh praesent tristique magna sit amet purus. Id aliquet risus feugiat in ante metus. Curabitur gravida arcu ac tortor. Vivamus arcu felis bibendum ut tristique et egestas. Nunc non blandit massa enim nec dui nunc mattis. Eu non diam phasellus vestibulum lorem. Risus commodo viverra maecenas accumsan lacus vel.",
          images: [
            {
              original: "/assets/images/original/apartment/3/1.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/3/1.jpg",
            },
            {
              original: "/assets/images/original/apartment/3/2.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/3/2.jpg",
            },
            {
              original: "/assets/images/original/apartment/3/3.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/3/3.jpg",
            },
          ],
          type: "apartment",
          rooms: 1,
          area: 56,
          rent: 12000,
          deposit: 60000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.359053611755371, 60.3635752237722],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-133",
          title: "Donec nec ultrices felis.",
          excert: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus in ornare quam viverra orci sagittis eu volutpat. Diam ut venenatis tellus in metus vulputate eu. Quam quisque id diam vel quam elementum pulvinar etiam. Imperdiet massa tincidunt nunc pulvinar. Velit aliquet sagittis id consectetur purus ut. Libero enim sed faucibus turpis in eu mi bibendum. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc.",
          images: [
            {
              original: "/assets/images/original/house/1/1.jpg",
              thumbnail: "/assets/images/thumbnail/house/1/1.jpg",
            },
            {
              original: "/assets/images/original/house/1/2.jpg",
              thumbnail: "/assets/images/thumbnail/house/1/2.jpg",
            },
            {
              original: "/assets/images/original/house/1/3.jpg",
              thumbnail: "/assets/images/thumbnail/house/1/3.jpg",
            },
          ],
          type: "house",
          rooms: 1,
          area: 56,
          rent: 12700,
          deposit: 38000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.285711288452148, 60.390960544134856],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-134",
          title: "Suspendisse gravida turpis",
          excert:
            "Suspendisse gravida turpis sed tempor cursus. Donec nec ultrices felis.",
          description:
            "Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Diam sit amet nisl suscipit adipiscing. Consectetur adipiscing elit duis tristique sollicitudin. In tellus integer feugiat scelerisque varius. Tortor consequat id porta nibh venenatis cras. Mi sit amet mauris commodo. Tellus orci ac auctor augue mauris augue neque gravida. Non diam phasellus vestibulum lorem sed. Et netus et malesuada fames ac.",
          images: [
            {
              original: "/assets/images/original/dorm/1/1.jpg",
              thumbnail: "/assets/images/thumbnail/dorm/1/1.jpg",
            },
            {
              original: "/assets/images/original/dorm/1/2.jpg",
              thumbnail: "/assets/images/thumbnail/dorm/1/2.jpg",
            },
            {
              original: "/assets/images/original/dorm/1/3.jpg",
              thumbnail: "/assets/images/thumbnail/dorm/1/3.jpg",
            },
          ],
          type: "dorm",
          rooms: 0,
          area: 45,
          rent: 9800,
          deposit: 49000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.277814865112305, 60.3913422061948],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-135",
          title: "Donec nec ultrices felis.",
          excert: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          description:
            "Erat velit scelerisque in dictum non consectetur a erat nam. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Pretium aenean pharetra magna ac placerat vestibulum lectus. Augue mauris augue neque gravida in fermentum et. Eros in cursus turpis massa tincidunt. Leo in vitae turpis massa sed elementum tempus egestas. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur.",
          images: [
            {
              original: "/assets/images/original/shared/3/1.jpg",
              thumbnail: "/assets/images/thumbnail/shared/3/1.jpg",
            },
            {
              original: "/assets/images/original/shared/3/2.jpg",
              thumbnail: "/assets/images/thumbnail/shared/3/2.jpg",
            },
            {
              original: "/assets/images/original/shared/3/3.jpg",
              thumbnail: "/assets/images/thumbnail/shared/3/3.jpg",
            },
          ],
          type: "shared",
          rooms: 3,
          area: 143,
          rent: 30800,
          deposit: 154000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.281848907470703, 60.389264214185445],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-136",
          title: "Orci varius natoque penatibus",
          excert: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          description:
            "Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Diam sit amet nisl suscipit adipiscing. Consectetur adipiscing elit duis tristique sollicitudin. In tellus integer feugiat scelerisque varius. Tortor consequat id porta nibh venenatis cras. Mi sit amet mauris commodo. Tellus orci ac auctor augue mauris augue neque gravida. Non diam phasellus vestibulum lorem sed. Et netus et malesuada fames ac.",
          images: [
            {
              original: "/assets/images/original/apartment/2/1.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/2/1.jpg",
            },
            {
              original: "/assets/images/original/apartment/2/2.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/2/2.jpg",
            },
            {
              original: "/assets/images/original/apartment/2/3.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/2/3.jpg",
            },
          ],
          type: "apartment",
          rooms: 2,
          area: 124,
          rent: 23800,
          deposit: 95000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.282106399536133, 60.390875729736194],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-137",
          title: "Praesent ut ipsum nulla.",
          excert: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          description:
            "Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Diam sit amet nisl suscipit adipiscing. Consectetur adipiscing elit duis tristique sollicitudin. In tellus integer feugiat scelerisque varius. Tortor consequat id porta nibh venenatis cras. Mi sit amet mauris commodo. Tellus orci ac auctor augue mauris augue neque gravida. Non diam phasellus vestibulum lorem sed. Et netus et malesuada fames ac.",
          images: [
            {
              original: "/assets/images/original/house/1/1.jpg",
              thumbnail: "/assets/images/thumbnail/house/1/1.jpg",
            },
            {
              original: "/assets/images/original/house/1/2.jpg",
              thumbnail: "/assets/images/thumbnail/house/1/2.jpg",
            },
            {
              original: "/assets/images/original/house/1/3.jpg",
              thumbnail: "/assets/images/thumbnail/house/1/3.jpg",
            },
          ],
          type: "house",
          rooms: 2,
          area: 73,
          rent: 16700,
          deposit: 50000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.297985076904297, 60.38582887536295],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-138",
          title: "Orci varius natoque penatibus",
          excert:
            "Praesent ullamcorper dui molestie augue hendrerit finibus. Praesent ut ipsum nulla.",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus in ornare quam viverra orci sagittis eu volutpat. Diam ut venenatis tellus in metus vulputate eu. Quam quisque id diam vel quam elementum pulvinar etiam. Imperdiet massa tincidunt nunc pulvinar. Velit aliquet sagittis id consectetur purus ut. Libero enim sed faucibus turpis in eu mi bibendum. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc.",
          images: [
            {
              original: "/assets/images/original/apartment/1/1.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/1/1.jpg",
            },
            {
              original: "/assets/images/original/apartment/1/2.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/1/2.jpg",
            },
            {
              original: "/assets/images/original/apartment/1/3.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/1/3.jpg",
            },
          ],
          type: "apartment",
          rooms: 2,
          area: 65,
          rent: 13200,
          deposit: 66000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.310602188110352, 60.381502377607916],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-139",
          title: "Suspendisse gravida turpis",
          excert:
            "Orci varius natoque penatibus et magnis dis parturient montes.",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus in ornare quam viverra orci sagittis eu volutpat. Diam ut venenatis tellus in metus vulputate eu. Quam quisque id diam vel quam elementum pulvinar etiam. Imperdiet massa tincidunt nunc pulvinar. Velit aliquet sagittis id consectetur purus ut. Libero enim sed faucibus turpis in eu mi bibendum. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc.",
          images: [
            {
              original: "/assets/images/original/dorm/1/1.jpg",
              thumbnail: "/assets/images/thumbnail/dorm/1/1.jpg",
            },
            {
              original: "/assets/images/original/dorm/1/2.jpg",
              thumbnail: "/assets/images/thumbnail/dorm/1/2.jpg",
            },
            {
              original: "/assets/images/original/dorm/1/3.jpg",
              thumbnail: "/assets/images/thumbnail/dorm/1/3.jpg",
            },
          ],
          type: "dorm",
          rooms: 1,
          area: 70,
          rent: 14500,
          deposit: 43000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.334720611572266, 60.38396261348399],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-140",
          title: "Orci varius natoque penatibus",
          excert:
            "Praesent ullamcorper dui molestie augue hendrerit finibus. Praesent ut ipsum nulla.",
          description:
            "Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Diam sit amet nisl suscipit adipiscing. Consectetur adipiscing elit duis tristique sollicitudin. In tellus integer feugiat scelerisque varius. Tortor consequat id porta nibh venenatis cras. Mi sit amet mauris commodo. Tellus orci ac auctor augue mauris augue neque gravida. Non diam phasellus vestibulum lorem sed. Et netus et malesuada fames ac.",
          images: [
            {
              original: "/assets/images/original/dorm/1/1.jpg",
              thumbnail: "/assets/images/thumbnail/dorm/1/1.jpg",
            },
            {
              original: "/assets/images/original/dorm/1/2.jpg",
              thumbnail: "/assets/images/thumbnail/dorm/1/2.jpg",
            },
            {
              original: "/assets/images/original/dorm/1/3.jpg",
              thumbnail: "/assets/images/thumbnail/dorm/1/3.jpg",
            },
          ],
          type: "dorm",
          rooms: 2,
          area: 81,
          rent: 16500,
          deposit: 66000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.34184455871582, 60.38934903278175],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-141",
          title: "Lorem ipsum dolor sit amet",
          excert:
            "Orci varius natoque penatibus et magnis dis parturient montes.",
          description:
            "Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Diam sit amet nisl suscipit adipiscing. Consectetur adipiscing elit duis tristique sollicitudin. In tellus integer feugiat scelerisque varius. Tortor consequat id porta nibh venenatis cras. Mi sit amet mauris commodo. Tellus orci ac auctor augue mauris augue neque gravida. Non diam phasellus vestibulum lorem sed. Et netus et malesuada fames ac.",
          images: [
            {
              original: "/assets/images/original/dorm/2/1.jpg",
              thumbnail: "/assets/images/thumbnail/dorm/2/1.jpg",
            },
            {
              original: "/assets/images/original/dorm/2/2.jpg",
              thumbnail: "/assets/images/thumbnail/dorm/2/2.jpg",
            },
            {
              original: "/assets/images/original/dorm/2/3.jpg",
              thumbnail: "/assets/images/thumbnail/dorm/2/3.jpg",
            },
          ],
          type: "dorm",
          rooms: 1,
          area: 102,
          rent: 21900,
          deposit: 109000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.33111572265625, 60.384429188979546],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-142",
          title: "Suspendisse gravida turpis",
          excert:
            "Suspendisse gravida turpis sed tempor cursus. Donec nec ultrices felis.",
          description:
            "Erat velit scelerisque in dictum non consectetur a erat nam. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Pretium aenean pharetra magna ac placerat vestibulum lectus. Augue mauris augue neque gravida in fermentum et. Eros in cursus turpis massa tincidunt. Leo in vitae turpis massa sed elementum tempus egestas. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur.",
          images: [
            {
              original: "/assets/images/original/house/1/1.jpg",
              thumbnail: "/assets/images/thumbnail/house/1/1.jpg",
            },
            {
              original: "/assets/images/original/house/1/2.jpg",
              thumbnail: "/assets/images/thumbnail/house/1/2.jpg",
            },
            {
              original: "/assets/images/original/house/1/3.jpg",
              thumbnail: "/assets/images/thumbnail/house/1/3.jpg",
            },
          ],
          type: "house",
          rooms: 1,
          area: 31,
          rent: 6700,
          deposit: 33000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.3153228759765625, 60.38748297262645],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-143",
          title: "Donec nec ultrices felis.",
          excert:
            "Suspendisse gravida turpis sed tempor cursus. Donec nec ultrices felis.",
          description:
            "Erat velit scelerisque in dictum non consectetur a erat nam. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Pretium aenean pharetra magna ac placerat vestibulum lectus. Augue mauris augue neque gravida in fermentum et. Eros in cursus turpis massa tincidunt. Leo in vitae turpis massa sed elementum tempus egestas. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur.",
          images: [
            {
              original: "/assets/images/original/house/1/1.jpg",
              thumbnail: "/assets/images/thumbnail/house/1/1.jpg",
            },
            {
              original: "/assets/images/original/house/1/2.jpg",
              thumbnail: "/assets/images/thumbnail/house/1/2.jpg",
            },
            {
              original: "/assets/images/original/house/1/3.jpg",
              thumbnail: "/assets/images/thumbnail/house/1/3.jpg",
            },
          ],
          type: "house",
          rooms: 2,
          area: 132,
          rent: 26400,
          deposit: 132000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.3249359130859375, 60.409020976546465],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-144",
          title: "Lorem ipsum dolor sit amet",
          excert:
            "Orci varius natoque penatibus et magnis dis parturient montes.",
          description:
            "Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Diam sit amet nisl suscipit adipiscing. Consectetur adipiscing elit duis tristique sollicitudin. In tellus integer feugiat scelerisque varius. Tortor consequat id porta nibh venenatis cras. Mi sit amet mauris commodo. Tellus orci ac auctor augue mauris augue neque gravida. Non diam phasellus vestibulum lorem sed. Et netus et malesuada fames ac.",
          images: [
            {
              original: "/assets/images/original/shared/2/1.jpg",
              thumbnail: "/assets/images/thumbnail/shared/2/1.jpg",
            },
            {
              original: "/assets/images/original/shared/2/2.jpg",
              thumbnail: "/assets/images/thumbnail/shared/2/2.jpg",
            },
            {
              original: "/assets/images/original/shared/2/3.jpg",
              thumbnail: "/assets/images/thumbnail/shared/2/3.jpg",
            },
          ],
          type: "shared",
          rooms: 1,
          area: 89,
          rent: 19400,
          deposit: 58000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.322961807250977, 60.404570392100474],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-145",
          title: "Lorem ipsum dolor sit amet",
          excert:
            "Praesent ullamcorper dui molestie augue hendrerit finibus. Praesent ut ipsum nulla.",
          description:
            "Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Diam sit amet nisl suscipit adipiscing. Consectetur adipiscing elit duis tristique sollicitudin. In tellus integer feugiat scelerisque varius. Tortor consequat id porta nibh venenatis cras. Mi sit amet mauris commodo. Tellus orci ac auctor augue mauris augue neque gravida. Non diam phasellus vestibulum lorem sed. Et netus et malesuada fames ac.",
          images: [
            {
              original: "/assets/images/original/apartment/3/1.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/3/1.jpg",
            },
            {
              original: "/assets/images/original/apartment/3/2.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/3/2.jpg",
            },
            {
              original: "/assets/images/original/apartment/3/3.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/3/3.jpg",
            },
          ],
          type: "apartment",
          rooms: 1,
          area: 49,
          rent: 11000,
          deposit: 44000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.330343246459961, 60.40533339266658],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-146",
          title: "Suspendisse gravida turpis",
          excert:
            "Suspendisse gravida turpis sed tempor cursus. Donec nec ultrices felis.",
          description:
            "Erat velit scelerisque in dictum non consectetur a erat nam. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Pretium aenean pharetra magna ac placerat vestibulum lectus. Augue mauris augue neque gravida in fermentum et. Eros in cursus turpis massa tincidunt. Leo in vitae turpis massa sed elementum tempus egestas. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur.",
          images: [
            {
              original: "/assets/images/original/apartment/3/1.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/3/1.jpg",
            },
            {
              original: "/assets/images/original/apartment/3/2.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/3/2.jpg",
            },
            {
              original: "/assets/images/original/apartment/3/3.jpg",
              thumbnail: "/assets/images/thumbnail/apartment/3/3.jpg",
            },
          ],
          type: "apartment",
          rooms: 0,
          area: 51,
          rent: 11400,
          deposit: 57000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.321760177612305, 60.414403251040255],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "item-147",
          title: "Orci varius natoque penatibus",
          excert: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          description:
            "Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Diam sit amet nisl suscipit adipiscing. Consectetur adipiscing elit duis tristique sollicitudin. In tellus integer feugiat scelerisque varius. Tortor consequat id porta nibh venenatis cras. Mi sit amet mauris commodo. Tellus orci ac auctor augue mauris augue neque gravida. Non diam phasellus vestibulum lorem sed. Et netus et malesuada fames ac.",
          images: [
            {
              original: "/assets/images/original/dorm/1/1.jpg",
              thumbnail: "/assets/images/thumbnail/dorm/1/1.jpg",
            },
            {
              original: "/assets/images/original/dorm/1/2.jpg",
              thumbnail: "/assets/images/thumbnail/dorm/1/2.jpg",
            },
            {
              original: "/assets/images/original/dorm/1/3.jpg",
              thumbnail: "/assets/images/thumbnail/dorm/1/3.jpg",
            },
          ],
          type: "dorm",
          rooms: 2,
          area: 67,
          rent: 14100,
          deposit: 70000,
        },
        geometry: {
          type: "Point",
          coordinates: [5.324420928955078, 60.41347095229361],
        },
      },
    ]);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [5, 60],
      zoom: 5,
      
    });

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    map.on("load", () => {
      // Load an image from an external URL.
      map.loadImage(
        `${baseUrl}assets/images/icon-house.png`,
        (error, image) => {
          if (error) throw error;
          map.addImage("house", image);

          map.loadImage(
            `${baseUrl}assets/images/icon-apartment.png`,
            (error, image) => {
              if (error) throw error;
              map.addImage("apartment", image);

              map.loadImage(
                `${baseUrl}assets/images/icon-shared.png`,
                (error, image) => {
                  if (error) throw error;
                  map.addImage("shared", image);

                  map.loadImage(
                    `${baseUrl}assets/images/icon-dorm.png`,
                    (error, image) => {
                      if (error) throw error;
                      map.addImage("dorm", image);

                      // Add a data source containing one point feature.
                      map.addSource("point", {
                        type: "geojson",
                        data: {
                          type: "FeatureCollection",
                          features: myGeoJson,
                        },
                      });

                      // Add a layer to use the image to represent the data.
                      map.addLayer({
                        id: "points",
                        type: "symbol",
                        source: "point", // reference the data source
                        layout: {
                          "icon-image": ["get", "type"],
                          "icon-size": 1,
                        },
                      });
                    }
                  );
                }
              );
            }
          );
        }
      );
    });

    // Clean up on unmount
    return () => map.remove();
  }, [myGeoJson]);

  // const  getSlideClasses = () => {
  //     let classes = "sc-slide";

  //     if (slideOpen) classes += " sc-is-open";

  //     return classes;
  //   };

  // const handleChangeSlide = (slideOpen) => {
  //   setSlideOpen( slideOpen );
  // };

  // const handleChangePage = (pageVisible) => {
  //   setPageVisible(pageVisible);
  // };

  // const getTourControlsClasses = () => {
  //   let classes = "app-tour-controls sc-grid-4";

  //   if (tourActive) classes += " is-visible";

  //   return classes;
  // };

  // const getPageOverlayClasses = () => {
  //   let classes = "app-page-overlay";

  //   if (pageVisible) classes += " is-visible";

  //   return classes;
  // };

  // const getPlacesCount = () => {
  //   let features = places.features;

  //   return features.length ? features.length : "No";
  // };

  // const handleFilter = () => {
  //   let filters = [
  //     "all",
  //     [">=", "area", areas.from],
  //     ["<=", "area", areas.to],
  //     [">=", "rent", rents.from],
  //     ["<=", "rent", rents.to],
  //     [">=", "deposit", deposits.from],
  //     ["<=", "deposit", deposits.to],
  //   ];

  //   let typesFilter = types
  //     .filter((item) => item.checked)
  //     .reduce(
  //       (total, current) => {
  //         total.push(["==", "type", current.slug]);

  //         return total;
  //       },
  //       ["any"]
  //     );

  //   filters.push(typesFilter);

  //   let roomsFilter = rooms
  //     .filter((item) => item.checked)
  //     .reduce(
  //       (total, current) => {
  //         if (current.slug === "one") total.push(["==", "rooms", 1]);
  //         if (current.slug === "two") total.push(["==", "rooms", 2]);
  //         if (current.slug === "more") total.push([">", "rooms", 2]);
  //         if (current.slug === "any") total.push([">=", "rooms", 0]);

  //         return total;
  //       },
  //       ["any"]
  //     );

  //   filters.push(roomsFilter);

  //   this.mapcraft.map.setFilter("point-symbol-places", filters);
  // };

  return (
    <div style={{ position: "relative", height: "92%" }}>
      <div className="map-container" ref={mapContainerRef} />

      {/* <div className={getSlideClasses()} style={{ position: "absolute" }}>
        <Search
          types={types}
          rooms={rooms}
          areas={areas}
          rents={rents}
          deposits={deposits}
          slideOpen={slideOpen}
          onChangeSlide={handleChangeSlide}
          onChangeType={handleChangeType}
          onChangeRoom={handleChangeRoom}
          onChangeArea={handleChangeArea}
          onChangeRent={handleChangeRent}
          onChangeDeposit={handleChangeDeposit}
          onChangeTour={handleChangeTour}
          getPlacesCount={getPlacesCount}
          disableTour={places.features.length === 0}
        />
      </div>

      <div className={getTourControlsClasses()}>
        <Tour
          disableRestart={tourIndex <= 0}
          disableNext={tourIndex >= (places.features.length-1)}
          disablePrev={tourIndex <= 0}
          onChangeTour={handleChangeTour}
        />
      </div>

      <div
        className={getPageOverlayClasses()}
        onClick={() => {
          handleChangePage(false);
        }}
      >
        <Page page={page} onChangePage={handleChangePage} />
      </div> */}
    </div>
  );
};

export default Map;
