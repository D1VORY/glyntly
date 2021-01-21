import React from "react";
import styles from './productDetails.module.scss';

export default function ProductDetails(){

    return(
        <div className="container ">
            <div className="columns">
            <div className="imageContainer column is-two-thirds">
                <figure class="image ">
                    <img src="https://images.solecollector.com/complex/images/c_crop,h_2921,w_5193,x_772,y_440/c_fill,dpr_2.0,f_auto,fl_lossy,q_auto,w_800/qsdrtn3exos5qn5zkvg8/air-jordan-1-chicago" />
                </figure>
            </div>

            <div className="detailsContainer column ">
                <h1 className="block has-text-centered is-size-1 is-uppercase has-text-weight-semibold" >
                    JORDAN 1 RETRO HIGH “SATIN BLACK TOE”
                </h1>

                <h3 className="block is-size-2 has-text-centered ">
                    300$
                </h3>

                <div className="sizesContainer">
                    <span className="is-size-4">
                        Available sizes:
                    </span>

                    <span className={`is-size-4 mx-1 `}>16</span>
                    <span className={`is-size-4 mx-1 `}>17</span>
                    <span className={`is-size-4 mx-1 ${styles.unavailableSize}`}>18</span>
                    <span className={`is-size-4 mx-1 `}>19</span>
                    <span className={`is-size-4 mx-1 `}>20</span>
                </div>

                <div className="block is-flex is-justify-content-center">
                <button className="button">
                    Buy
                </button>
                </div>
               
            </div>
            </div>
        </div>
    )
}