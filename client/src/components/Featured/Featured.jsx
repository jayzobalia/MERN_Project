import useFetch from "../../hooks/useFetch";
import "./Featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=Berlin,Mumbai,London"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://cdn.britannica.com/49/179449-138-9F4EC401/Overview-Berlin.jpg?w=800&h=450&c=crop"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Berlin</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://cdn.britannica.com/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Mumbai</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/tower-bridge/towerbridge-640x360.jpg?mw=640&hash=9FF3EBA9414733318A48ABDB4F58FBEB3B7E29AC"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>London</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;