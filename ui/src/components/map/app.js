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
  const [newGeoJson, setNewGeoJson] = useState([]);
  const [types, setTypes] = useState([
    { slug: "house", name: "🗺 LAND", checked: true },
    { slug: "services", name: "💈 SERVICES", checked: true },
    { slug: "shared", name: "🏠 ESTATE", checked: true },
    { slug: "dorm", name: "🏩 SOLTEL", checked: true },
    { slug: "solfood", name: "🍔 SOLFOOD", checked: true },
    { slug: "apartment", name: "🏢 APARTMENT", checked: true },
    { slug: "monument", name: "🗽 MONUMENT", checked: true },
    { slug: "solmobiles", name: "🚗 SOLMOBILES", checked: true },
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
  const [slideOpen, setSlideOpen] = useState(true);
  const [tourActive, setTourActive] = useState(false);
  const [tourIndex, setTourIndex] = useState(0);
  const [pageVisible, setPageVisible] = useState(false);
  const [page, setPage] = useState({});

  let map;

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

    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    handleGeoJson();
  }, [myGeoJson]);

  useEffect(() => {
    map = new mapboxgl.Map({
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
                          features: newGeoJson,
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

    map.on("click", "points", (event) => {
      // Copy coordinates array.
      let properties = event.features[0].properties;
      let coordinates = event.features[0].geometry.coordinates.slice();

      // Ensure that if the map is zoomed out such that multiple
      // copies of the feature are visible, the popup appears
      // over the copy being pointed to.
      while (Math.abs(event.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += event.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      if (typeof properties.images !== "object")
        properties.images = JSON.parse(properties.images);

      properties.typeName = types.filter(
        (t) => t.slug === properties.type
      )[0].name;

      let { title, images, excert, typeName, rooms, area, rent, deposit } =
        properties;

      let html = `<div class="sc-card sc-borderless">
      <div class="sc-card-header">
        <h5 class="app-page-trigger">${title}</h5>
      </div>

      <div class="sc-card-body">
        <div>
          <img src="${images[0].thumbnail}" class="app-page-trigger" />
        </div>

        <div>
          <table class="sc-table">
            <tbody>
              <tr>
                <td>Type</td>
                <td>${typeName}</td>
              </tr>

              <tr>
                <td>Rooms</td>
                <td>${rooms}</td>
              </tr>

              <tr>
                <td>Area</td>
                <td>${area}</td>
              </tr>

              <tr>
                <td>Rent</td>
                <td>${rent}</td>
              </tr>

              <tr>
                <td>Deposit</td>
                <td>${deposit}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="sc-card-footer">${excert}</div>
    </div>`;

      new mapboxgl.Popup().setLngLat(coordinates).setHTML(html).addTo(map);

      let pageInfo = { ...properties };
      pageInfo.coordinates = coordinates;

      document.querySelectorAll(".app-page-trigger").forEach((element) => {
        element.addEventListener("click", () => {
          handleChangePage(true);
          setPage(pageInfo);
        });
      });
    });

    map.on("mouseenter", "points", () => {
      map.getCanvas().style.cursor = "pointer";
    });

    // Change it back to a pointer when it leaves.
    map.on("mouseleave", "points", () => {
      map.getCanvas().style.cursor = "";
    });

    if (newGeoJson.length) {
      let bound=[]
      newGeoJson.map((place) => bound.push(place.geometry.coordinates));
      map.fitBounds(bound);
    }
  }, [newGeoJson]);

  const getSlideClasses = () => {
    let classes = "sc-slide";
    if (slideOpen) classes += " sc-is-open";
    return classes;
  };

  const handleChangeSlide = (slideOpen) => {
    setSlideOpen(slideOpen);
  };

  const handleChangePage = (pageVisible) => {
    setPageVisible(pageVisible);
  };

  const getPageOverlayClasses = () => {
    let classes = "app-page-overlay";

    if (pageVisible) classes += " is-visible";

    return classes;
  };

  const getPlacesCount = () => {
    return newGeoJson.length ? newGeoJson.length : "No";
  };

  const handleGeoJson = () => {
    let selectedTypes = types
      .filter((type) => type.checked)
      .map((type) => type.slug);

    let selectedRooms = rooms
      .filter((room) => room.checked)
      .map((room) => room.slug);

    let features = myGeoJson.filter((feature) => {
      let { type, rooms, area, rent, deposit } = feature.properties;

      if (
        selectedTypes.includes(type) &&
        area >= areas.from &&
        area <= areas.to &&
        rent >= rents.from &&
        rent <= rents.to &&
        deposit >= deposits.from &&
        deposit <= deposits.to
      ) {
        if (
          (rooms === 1 && selectedRooms.includes("one")) ||
          (rooms === 2 && selectedRooms.includes("two")) ||
          (rooms > 2 && selectedRooms.includes("more")) ||
          selectedRooms.includes("any")
        ) {
          return true;
        }
      }

      return false;
    });

    setNewGeoJson(features);
    // if (myGeoJson.length)
    //   this.mapcraft.fitBounds({
    //     geoJson: places,
    //   });
  };

  const handleChangeType = (event) => {
    let slug = event.target.getAttribute("data-type");
    let newTypes = types.map((type) => {
      if (type.slug === slug) type.checked = event.target.checked;

      return type;
    });

    setTypes(newTypes);
    handleGeoJson();
  };

  const handleChangeRoom = (event) => {
    let slug = event.target.getAttribute("data-room");
    let newRooms = rooms.map((room) => {
      room.checked = room.slug === slug ? true : false;

      return room;
    });

    setRooms(newRooms);
    handleGeoJson();
  };

  const handleChangeArea = (value) => {
    areas.from = value.min;
    areas.to = value.max;

    setAreas(areas);
    handleGeoJson();
  };

  const handleChangeRent = (value) => {
    rents.from = value.min;
    rents.to = value.max;

    setRents(rents);
    handleGeoJson();
  };

  const handleChangeDeposit = (value) => {
    deposits.from = value.min;
    deposits.to = value.max;

    setDeposits(deposits);
    handleGeoJson();
  };

  console.log(pageVisible);

  return (
    <div style={{ position: "relative", height: "92%" }}>
      <div className="map-container" ref={mapContainerRef} />

      <div className={getSlideClasses()} style={{ position: "absolute" }}>
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
          getPlacesCount={getPlacesCount}
        />
      </div>
      <div
        className={getPageOverlayClasses()}
        onClick={() => {
          handleChangePage(false);
        }}
      >
        <Page page={page} onChangePage={handleChangePage} />
      </div>
    </div>
  );
};

export default Map;
