const CardBlogSmall = ({slug, image, title, author}) => {
    return (
        <a href={slug}>
          <div className="card card-compact w-44 lg:w-56 mx-auto bg-white shadow-sm mb-4 transition duration-300 ease-in-out hover:shadow-lg">
            <div className="w-56 h-36 mask-square ring-white">
              <img src={image} alt="image" />
            </div>
            <div className="card-body">
              <h2 className="text-black text-left text-lg font-semibold">{title.substring(0, 30)}...</h2>
              <p className='text-left'>Oleh {author}</p>
              <div className="card-actions">
                <a href='/detail-blog' className="text-sm font-semibold text-sky-500 hover:text-sky-300">Selengkapnya</a>
              </div>
            </div>
          </div>
        </a>
    );
  };
  
  export default CardBlogSmall;
  