import { Link, useLocation } from "react-router-dom";

const BreadCrum = () => {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter((x) => x);

  let breadcrumpath = "";
  return (
    <div style={{ maxWidth: "1000px", margin: "100px auto" }}>
      <Link to="/">Home</Link>
      {pathnames.map((name, index) => {
        breadcrumpath += `/${name}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <span>/{name}</span>
        ) : (
          <span>
            /<Link to={breadcrumpath}>{name}</Link>
          </span>
        );
      })}
    </div>
  );
};

export default BreadCrum;
