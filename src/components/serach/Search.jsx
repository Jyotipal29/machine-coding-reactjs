import { useEffect, useState, useRef } from "react";
import axios from "axios";

const category = [
  {
    id: 1,
    cat: "HRX",
  },
  {
    id: 2,
    cat: "Gym",
  },
  {
    id: 3,
    cat: "Cardio",
  },
];

const useDebounce = (value, delay = 1000) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};
const Search = () => {
  const [text, setText] = useState("");
  const [page, setPage] = useState(1);
  const [fil, setFil] = useState("");
  //   const [itemsPerPage, setItemsPerPage] = useState(5);
  //   const [currOffSet, setCurrOffset] = useState(itemsPerPage);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  //   const [data, setData] = useState([]);

  const debouncedtext = useDebounce(text);
  const requestController = useRef(new AbortController());

  const getData = async () => {
    if (requestController.current) {
      requestController.current.abort();
    }

    requestController.current = new AbortController();
    if (text.trim() === "") {
      setData([]);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos`,
        {
          params: {
            q: debouncedtext,
            numResults: 20,
          },
          signal: requestController.current.signal,
        }
      );
      setData(data.results);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [debouncedtext]);

  //   useEffect(() => {
  //     const handleScroll = (ev) => {
  //       if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
  //         setCurrOffset((offset) => offset + itemsPerPage);
  //       }
  //     };

  //     window.addEventListener("scroll", handleScroll);

  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, [itemsPerPage]);

  const changeHandler = (e) => {
    setText(e.target.value);
  };

  const filteredVideo = () => {
    if (!fil) {
      return data;
    }
    return data.filter((item) => item.tags.includes(fil));
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input value={text} onChange={changeHandler} />
      </div>
      <div>
        {category.map((item) => (
          <button key={item.id} onClick={() => setFil(item.cat)}>
            {item.cat}
          </button>
        ))}
      </div>

      <div>
        {loading ? (
          <div>loading....</div>
        ) : (
          <>
            <div>
              {filteredVideo()
                .slice(page * 5 - 5, page * 5)
                .map((item) => (
                  <div
                    key={item.id}
                    style={{
                      display: "flex ",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <h1> {item.heading}</h1>
                    <video src={item.video} controls width={300} />
                    {item.tags.map((it, index) => (
                      <span key={index}>{it}</span>
                    ))}
                  </div>
                ))}
            </div>

            {data.length > 0 && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  onClick={() => setPage(page - 1)}
                  style={{
                    border: "1px solid black",
                    padding: "5px",
                    cursor: "pointer",
                    display: page > 1 ? "" : "none",
                  }}
                >
                  prev
                </span>
                {[...Array(data.length / 5)].map((_, i) => (
                  <sapn
                    key={i}
                    onClick={() => setPage(i + 1)}
                    style={{
                      border: "1px solid black",
                      padding: "5px",
                      cursor: "pointer",
                      backgroundColor: page === i + 1 ? "gray" : "",
                    }}
                  >
                    {i + 1}
                  </sapn>
                ))}
                <span
                  onClick={() => setPage(page + 1)}
                  style={{
                    border: "1px solid black",
                    padding: "5px",
                    cursor: "pointer",
                    display: page < data.length / 5 ? "" : "none",
                  }}
                >
                  next
                </span>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Search;
