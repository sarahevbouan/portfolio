const ShowCase = ({ children }) => {
  return (
    <div className="mt-30 [&>*]:px-6 md:[&>*]:px-[10%] [&>*]:mb-12 [&>*]:md:mb-28">
      {children}
    </div>
  );
};

export default ShowCase;
