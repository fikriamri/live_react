import React from "react";
import { Link } from "react-router-dom";
// import Category from "./Category";
// import SearchField from "react-search-field";

function HomeMovie(props) {
  return (
    <div className="col-md-3">
      <table>
        <tbody>
          <tr>
            <td>
              <img src={props.src} width={props.width} />
            </td>
          </tr>
          <tr>
            <td>
              <Link to={"/" + props.category.toLowerCase()}>
                <button type="button" class="btn btn-primary">
                  {props.category}
                </button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default HomeMovie;
