import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Estate.css";

export const Estate = ({
  title,
  text,
  price,
  city,
  photo,
  name,
  email,
  phone,
}) => {
  let formattedPrice = price.toLocaleString("en-US").replace(/,/g, " ");
  return (
    <div className="houseDetails">
      <div className="row">
        <div className="col-lg-6">
          <h1 className="display-5">{title}</h1>
          <p>{text}</p>
          <div className="table-responsive">
            <table className="table">
              <tbody>
                <tr>
                  <th>Město</th>
                  <td>{city}</td>
                </tr>
                <tr>
                  <th>Cena</th>
                  <td>{formattedPrice} CZK</td>
                </tr>
                <tr>
                  <th>Kontakt</th>
                  <td>
                    <div>{name}</div>
                    <div>{email}</div>
                    <div>{phone}</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-lg-6 d-flex justify-content-center">
          <img
            src={photo}
            alt={title}
            className="img-fluid"
            style={{ maxWidth: "70%" }}
          />
        </div>
      </div>
    </div>
  );
};
