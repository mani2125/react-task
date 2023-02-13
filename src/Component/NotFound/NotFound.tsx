import pageNotFound from '../../asset/img/page-not-found.png';
import "./styles.scss";

/**
 * Render this page, if the any of the defined route URL not matched
 */
function NotFound() {
    return (
      <div className='cp-page-not-found'>
        <img src={pageNotFound} />
            <div id="info">
                <h3>This page could not be found</h3>
            </div>
      </div>
    );
  }
  export default NotFound;