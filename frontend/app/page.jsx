'use client'
import { useState, useEffect } from 'react'
import { FaArrowDown } from 'react-icons/fa6'
import PostPreview from './Components/blog/postPreview'
import Card from './Components/utils/Card'
import curious from './assets/howtosell/curious.svg'
import okaybro from './assets/howtosell/okaybro.svg'
import shake from './assets/howtosell/shake.svg'
import testbro from './assets/howtosell/testbro.svg'



export default function Home() {
  const [heroImageIndex, setHeroImageIndex] = useState(0);

  const images = [
    {
      src: 'https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dmludGFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60'
    },
    {
      src: 'https://images.unsplash.com/photo-1453856908826-6bbeda0f8490?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHZpbnRhZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60'
    },
    {
      src: 'https://images.unsplash.com/photo-1495121553079-4c61bcce1894?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHZpbnRhZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60'
    },
    {
      src: 'https://images.unsplash.com/photo-1516962126636-27ad087061cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHZpbnRhZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60'
    },
    {
      src: 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fHZpbnRhZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60'
    },
    {
      src: 'https://images.unsplash.com/photo-1531390770335-d94a0dacd992?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM5fHx2aW50YWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60'
    },


  ];

  const dummyCardData = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum non error, libero ipsam officiis consequuntur asperiores quibusdam aut iste aliquid, in aspernatur fugiat voluptatibus harum ad repellendus id qui hic quisquam sed et voluptatem doloribus. Quidem repellat obcaecati nemo voluptatem. Dolores, officia. Velit, officia assumenda nisi quaerat eius debitis. Distinctio temporibus repellat ducimus quisquam error magni eligendi quas aperiam nihil aliquam praesentium provident incidunt quibusdam nam cumque, natus numquam ea consectetur laudantium, vel corrupti dolorum. Quo molestias rerum repudiandae obcaecati consequatur quasi ipsa perspiciatis temporibus suscipit, quibusdam, amet assumenda accusantium quis sunt et, pariatur animi labore debitis eaque vel mollitia explicabo quos. Blanditiis debitis impedit hic cumque praesentium dignissimos iusto iste asperiores! Culpa dolor totam consectetur, consequuntur excepturi magni, quisquam quae saepe ullam, perspiciatis omnis minus molestiae illum officiis repudiandae! Deserunt hic, amet perspiciatis recusandae neque voluptas magnam voluptates possimus quasi, dicta necessitatibus quod quo, vero molestias deleniti esse ducimus minima placeat suscipit. Libero, non? Voluptatibus tenetur, consectetur deleniti id asperiores quam sed. Expedita ut voluptatum fugit praesentium, minima architecto, velit ipsam, asperiores iste qui maiores nulla? Molestias illo quo minima quas natus optio pariatur eveniet cupiditate libero laudantium ad id ab consequatur modi, ipsa ipsum ut nobis sit voluptatem?',
      image: testbro,
      tags: [''],
      category: ['']
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor sit amet',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum non error, libero ipsam officiis consequuntur asperiores quibusdam aut iste aliquid, in aspernatur fugiat voluptatibus harum ad repellendus id qui hic quisquam sed et voluptatem doloribus. Quidem repellat obcaecati nemo voluptatem. Dolores, officia. Velit, officia assumenda nisi quaerat eius debitis. Distinctio temporibus repellat ducimus quisquam error magni eligendi quas aperiam nihil aliquam praesentium provident incidunt quibusdam nam cumque, natus numquam ea consectetur laudantium, vel corrupti dolorum. Quo molestias rerum repudiandae obcaecati consequatur quasi ipsa perspiciatis temporibus suscipit, quibusdam, amet assumenda accusantium quis sunt et, pariatur animi labore debitis eaque vel mollitia explicabo quos. Blanditiis debitis impedit hic cumque praesentium dignissimos iusto iste asperiores! Culpa dolor totam consectetur, consequuntur excepturi magni, quisquam quae saepe ullam, perspiciatis omnis minus molestiae illum officiis repudiandae! Deserunt hic, amet perspiciatis recusandae neque voluptas magnam voluptates possimus quasi, dicta necessitatibus quod quo, vero molestias deleniti esse ducimus minima placeat suscipit. Libero, non? Voluptatibus tenetur, consectetur deleniti id asperiores quam sed. Expedita ut voluptatum fugit praesentium, minima architecto, velit ipsam, asperiores iste qui maiores nulla? Molestias illo quo minima quas natus optio pariatur eveniet cupiditate libero laudantium ad id ab consequatur modi, ipsa ipsum ut nobis sit voluptatem?',
      image: curious,
      tags: [''],
      category: ['']
    },
    {
      id: 3,
      title: 'Lorem ipsum dolor sit amet',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum non error, libero ipsam officiis consequuntur asperiores quibusdam aut iste aliquid, in aspernatur fugiat voluptatibus harum ad repellendus id qui hic quisquam sed et voluptatem doloribus. Quidem repellat obcaecati nemo voluptatem. Dolores, officia. Velit, officia assumenda nisi quaerat eius debitis. Distinctio temporibus repellat ducimus quisquam error magni eligendi quas aperiam nihil aliquam praesentium provident incidunt quibusdam nam cumque, natus numquam ea consectetur laudantium, vel corrupti dolorum. Quo molestias rerum repudiandae obcaecati consequatur quasi ipsa perspiciatis temporibus suscipit, quibusdam, amet assumenda accusantium quis sunt et, pariatur animi labore debitis eaque vel mollitia explicabo quos. Blanditiis debitis impedit hic cumque praesentium dignissimos iusto iste asperiores! Culpa dolor totam consectetur, consequuntur excepturi magni, quisquam quae saepe ullam, perspiciatis omnis minus molestiae illum officiis repudiandae! Deserunt hic, amet perspiciatis recusandae neque voluptas magnam voluptates possimus quasi, dicta necessitatibus quod quo, vero molestias deleniti esse ducimus minima placeat suscipit. Libero, non? Voluptatibus tenetur, consectetur deleniti id asperiores quam sed. Expedita ut voluptatum fugit praesentium, minima architecto, velit ipsam, asperiores iste qui maiores nulla? Molestias illo quo minima quas natus optio pariatur eveniet cupiditate libero laudantium ad id ab consequatur modi, ipsa ipsum ut nobis sit voluptatem?',
      image: shake,
      tags: [''],
      category: ['']
    },
    {
      id: 4,
      title: 'Lorem ipsum dolor sit amet',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum non error, libero ipsam officiis consequuntur asperiores quibusdam aut iste aliquid, in aspernatur fugiat voluptatibus harum ad repellendus id qui hic quisquam sed et voluptatem doloribus. Quidem repellat obcaecati nemo voluptatem. Dolores, officia. Velit, officia assumenda nisi quaerat eius debitis. Distinctio temporibus repellat ducimus quisquam error magni eligendi quas aperiam nihil aliquam praesentium provident incidunt quibusdam nam cumque, natus numquam ea consectetur laudantium, vel corrupti dolorum. Quo molestias rerum repudiandae obcaecati consequatur quasi ipsa perspiciatis temporibus suscipit, quibusdam, amet assumenda accusantium quis sunt et, pariatur animi labore debitis eaque vel mollitia explicabo quos. Blanditiis debitis impedit hic cumque praesentium dignissimos iusto iste asperiores! Culpa dolor totam consectetur, consequuntur excepturi magni, quisquam quae saepe ullam, perspiciatis omnis minus molestiae illum officiis repudiandae! Deserunt hic, amet perspiciatis recusandae neque voluptas magnam voluptates possimus quasi, dicta necessitatibus quod quo, vero molestias deleniti esse ducimus minima placeat suscipit. Libero, non? Voluptatibus tenetur, consectetur deleniti id asperiores quam sed. Expedita ut voluptatum fugit praesentium, minima architecto, velit ipsam, asperiores iste qui maiores nulla? Molestias illo quo minima quas natus optio pariatur eveniet cupiditate libero laudantium ad id ab consequatur modi, ipsa ipsum ut nobis sit voluptatem?',
      image: okaybro,
      tags: [''],
      category: ['']
    },
  ];

  const guidesPreview = [
    {
      name: 'Breitling yatchmaster',
      category: "Watches",
      year: "1942",
      significance: "World War II",
      price: "$100 000"
    },
    {
      name: 'Breitling yatchmaster',
      category: "Watches",
      year: "1942",
      significance: "World War II",
      price: "$100 000"
    },
    {
      name: 'Breitling yatchmaster',
      category: "Watches",
      year: "1942",
      significance: "World War II",
      price: "$100 000"
    },
    {
      name: 'Breitling yatchmaster',
      category: "Watches",
      year: "1942",
      significance: "World War II",
      price: "$100 000"
    },
  ]

  useEffect(() => {
    const changeBackgroundImage = () => {
      setHeroImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const interval = setInterval(changeBackgroundImage, 5000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <>
      {/* HERO */}
      <section className='HERO grid grid-cols-4 gap-4 mt-12 min-h-full'>
        <div className="CONTENTLEFT bg-yellow-500 text-slate-800 col-span-2 items-center justify-center p-64 sm:p-16 rounded-2xl">

          <div className="flex items-center justify-center text-center text-sm mt-16">
            <p>LOGOICON</p>
          </div>

          <div className="flex items-center justify-center text-center text-6xl sm:text-4xl mt-2 mb-4">
            <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
          </div>

          <div className="text-center mb-16">
            <span className="text-xs">Join our weekly newsletter for insights into the most valuable vintage items in the world to date</span>
            <div className=" flex items-center justify-center text-center mt-4 w-auto lg:px-32">
              <input type="text" placeholder='enter your email' className='py-1 px-4 rounded-xl bg-slate-100 focus:outline-none w-[50%]' />
              <button className='p-1 bg-black mx-5 rounded-xl text-white px-3'>Join Now</button>
            </div>
          </div>
        </div>

        <div
          style={{ backgroundImage: `url(${images[heroImageIndex].src})`, }}
          className="SLIDESCONTAINE bg-center bg-cover transition-opacity duration-150 ease-in-out text-white col-span-2 py-64 rounded-2xl">
        </div>
      </section>

      <div className="SCROLL-BOX w-full flex items-center justify-center p-8 -mt-14 z-10">
        <div className="bg-white p-16 rounded-3xl -mr-20 -mt-3 -skew-y-12 -skew-x-12"></div>
        <div className=" bg-white px-16 pb-16 -pt-2 text-2xl rounded-xl z-10">
          <FaArrowDown className='hover:text-yellow-500' />
        </div>
        <div className="bg-white p-16 rounded-3xl -ml-20 -mt-3 skew-y-12 skew-x-12"></div>
      </div>
      {/* BYLINE & CTA */}
      <section className="grid grid-cols-4 gap-3">
        <div className=' col-span-1'>
          {/* floating icons */}
        </div>

        <div className='flex-col items-center justify-center text-center col-span-2'>
          <h2 className='text-3xl text-center mb-6'>We value the things youve already forgotten...</h2>
          <p className='mb-6'>Everything has a story to share, some things you never knew could possess a high value, both intrinsically and objectively</p>
          <div className="grid grid-cols-2 gap-6 lg:px-32 md:px-6">
            <button className=' bg-yellow-500 rounded-xl p-2'>Sell your items</button>
            <button className=' underline'>More on the brand</button>
          </div>
        </div>

        <div className=' col-span-1'>
          {/* floating icons */}
        </div>

      </section>
      <section className='flex flex-col items-center justify-center mt-24 bg-gradient-to-r from-gray-50 to-slate-50 pb-8 px-8 rounded-2xl'>
        <h3 className='text-4xl my-8'>We Buy your vintage goods</h3>
        <div className='grid grid-cols-4 md:grid md:grid-cols-4 gap-3 items-center justify-center'>
          {dummyCardData && dummyCardData.map((item) => (
            <Card key={item.id} title={item.title} image={item.image} />
          ))}
        </div>
      </section>

      <section>
        <table className='w-full'>
          <tr className=''>
            <th>name</th>
            <th>Category</th>
            <th>Year</th>
            <th>Significance</th>
            <th>Bought for</th>
          </tr>
          <tr>
            <td>{guidesPreview[0].name}</td>
            <td>{guidesPreview[0].category}</td>
            <td>{guidesPreview[0].year}</td>
            <td>{guidesPreview[0].significance}</td>
            <td>{guidesPreview[0].price}</td>
          </tr>
        </table>
      </section>

      <section className="">
        <PostPreview />
      </section>
      {/* SUBSCRIBE CTA */}
      <section className="">

      </section>
    </>
  )
}
