const CardBlogLarge = ({slug, image, title, author, artikel}) => {
  return (
      <a href={slug}>
        <div className="card mx-auto card-compact lg:card-side bg-white shadow-sm mb-4 transition duration-300 ease-in-out hover:shadow-lg">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/4">
              <div className="h-44 lg:w-56 lg:h-52 mask-square ring-white">
                <img src={image} alt="image" />
              </div>
            </div>
            <div className="w-full lg:w-3/4 px-4 pt-2">
              <div className="card-body">
                <h2 className="text-black text-left text-2xl font-semibold">{title.substring(0, 60)}</h2>
                <p className='text-left'>Oleh {author}</p>
                <p className='text-left'>{artikel.substring(0, 220)}...</p>
                <div className="card-actions ">
                  <a href='/detail-blog' className="text-base font-semibold text-sky-500 hover:text-sky-300">Selengkapnya</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
  );
};

export default CardBlogLarge;
