export const InvertibleCardExtended = ({
  bg,
  hText,
  pText,
  hTextTwo,
  concepts,
  rev,
}) => {
  const styles = {
    color: "white",
    paddingTop: "3.5rem",
    height: "100%",
    width: "100%",
    position: "absolute",
    "background-clip": "content-box",
    "box-shadow": `inset 0 -100px ${bg}, inset ${
      rev ? "-3.5rem" : "3.5rem"
    } 0 ${bg}, inset 0 275px ${bg}`,
  };
  return (
    <>
      <div style={styles}>
        <div
          className={`flex items-center h-48 w-full justify-between gap-x-72`}
        >
          <h1 className={`ml-14 text-5xl`} style={{ "flex-basis": "35%" }}>
            {hText}
          </h1>
          <div className="flex flex-col w-1/2" style={{ "flex-basis": "60%" }}>
            <p
              className={`${
                rev ? "ml-14" : ""
              } font-poppins font-extralight mr-16 w-3/4`}
            >
              {pText}
            </p>
          </div>
        </div>
        <div
          className={`${
            rev ? "right-0 mr-20 text-right" : "ml-20"
          } top-0 absolute mt-80 font-poppins font-extralight text-sm whitespace-pre-line`}
        >
          <h1 className="text-4xl opacity-60 font-normal">{hTextTwo}</h1>
          <div className="flex flex-wrap gap-x-8 gap-y-8 p-20 text-left justify-around">
            {Object.entries(concepts).map(([title, topics], index) => {
              return (
                <div
                  className="flex flex-col"
                  style={{ flexBasis: "20%" }}
                  key={index}
                >
                  <h1 className="text-2xl font-normal mb-2">{title}</h1>
                  {topics.map((item, index) => {
                    return (
                      <p className="text-xs" key={index}>
                        • {item}
                      </p>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
