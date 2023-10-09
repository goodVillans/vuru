import Image from "next/image";

const Card = ({id, title, image}) => {
  return (
    <div key={id} className='bg-white border-yellow-500 border-4 flex flex-col justify-center text-center items-center px-4 pt-4 pb-4 rounded-xl drop-shadow-md shadow-slate-700'>
      <div className="bg-white px-3 py-1 rounded-full border-2 border-yellow-500">{id}</div>
      <div>
        <Image className="p-4" src={image}/>
      </div>
      <div className='CONTENT flex flex-col items-center'>
        <h3 className='mb-2 text-xl'>{title}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, laborum.</p>
      </div>
      <div className=" bg-white border-yellow-500 border-2 rounded-xl p-2 mt-4">
        <button>Read More</button>
      </div>
    </div>
  );
};

export default Card;
