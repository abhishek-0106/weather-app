const MissingInfo = () => {
  return (
    <div>
      <span
        style={{
          display: "flex",
          textAlign: "justify",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "small",
        }}
      >
        Data not available for this section. Either you did not select any
        location or you entered wrong location.
      </span>
    </div>
  );
};

export default MissingInfo;
