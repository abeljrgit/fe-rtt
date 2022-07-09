const Card = (props: any) => {
  return (
    <div className="bg-slate-700 rounded-xl text-white">
      <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
        <div className="text-center uppercase">{props.type}</div>
        <h2 className="mt-10 font-serif text-5xl text-center">{props.storage}</h2>
        <h3 className="mt-2 text-center">{props.price}</h3>
        <div className="flex justify-center">
          <a href="#" className="inline-block px-10 py-3 my-6 text-center border border-violet-600 rounded-lg duration-200 hover:bg-violet-800 hover:border-violet-800">
            Purchase
          </a>
        </div>
      </div>
      <div className="border-t border-slate-700">
        <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
          <div className="flex flex-col space-y-2">
            <div className="flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l5 5l10 -10" />
              </svg>
              <span className="text-sm ml-1">{props.featureA}</span>
            </div>
            <div className="flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l5 5l10 -10" />
              </svg>
              <span className="text-sm ml-1">{props.featureB}</span>
            </div>
            <div className="flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l5 5l10 -10" />
              </svg>
              <span className="text-sm ml-1">{props.featureC}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
