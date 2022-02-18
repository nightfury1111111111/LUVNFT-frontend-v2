import React, { Component } from "react";
import "./page.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

class Page extends Component {
  state = {};
  render() {
    let { page, onChangePage } = this.props;

    return (
      <div
        className="app-page"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <header className="app-page-header">
          <h5>
            {page.title}

            <i
              className="sc-icon-cross sc-lg app-page-close"
              onClick={() => {
                onChangePage(false);
              }}
            ></i>
          </h5>
        </header>

        <div className="app-page-body">
          <div>
            <ImageGallery items={page.images} thumbnailPosition="left" />
          </div>

          <div>
            <table className="sc-table">
              <thead>
                <tr>
                  <th>TYPE</th>
                  <th>ROOMS</th>
                  <th>AREA</th>
                  <th>RENT</th>
                  <th>DONATION</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>{page.typeName}</td>
                  <td>{page.rooms}</td>
                  <td>{page.area}</td>
                  <td>{page.rent}</td>
                  <td>{page.deposit}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>{page.description}</p>
          <div className="buttongroup">
            <button
              className="detail-page-button"
              onClick={() => {
                alert(
                  page.coordinates +
                    "Let me know what functionalities I add here!"
                );
              }}
            >
              <span>BUY</span>
            </button>
            <button
              className="detail-page-button"
              onClick={() => {
                alert(page.coordinates+"Let me know what functionalities I add here!");
              }}
            >
              <span>RENT</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Page;
