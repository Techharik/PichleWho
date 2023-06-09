import Head from "next/head";
import { Inter } from "@next/font/google";
import { arraytoObject, dateFormate } from "./../utility/utils";
import { apiCall } from "@/utility/apiHelper";

import BannerSection from "@/components/BannerSection";
import Link from "next/link";
import { cloneDeep } from "lodash";
import ArticleBlock from "@/components/ArticleBlock";
// import "./../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  // console.log({ data });
  const latestNews = data.length > 0 ? arraytoObject(data, "id") : {};
  console.log({ data });

  return (
    <>
      <Head>
        <title>PickleWho</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />

        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css'
        ></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Inter&display=swap'
          rel='stylesheet'
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap'
          rel='stylesheet'
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap'
          rel='stylesheet'
        />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css'
        ></link>
      </Head>
      {/* <!-- Banner Section Start --> */}
      <BannerSection />
      {/* <!-- Banner Section End --> */}
      {/* <!-- Section 2 Start  --> */}
      <section id='Latest'>
        <div className='container mx-auto lg:px-0 lg:py-28 md:py-16 py-12 px-3 font-inter'>
          <div className='lg:pb-14 md:flex md:justify-between md:text-left text-center pb-16'>
            <div className=''>
              <h4 className='md:pb-2 text-22 font-bold text-h2 leading-2'>
                New Balls
              </h4>
              <h2 className='lg:text-[54px] md:text-5xl text-35 font-bold text-black leading-2'>
                Latest News
              </h2>
            </div>
            <div className='lg:mt-10 md:mt-8 max-w-full mt-10'>
              <Link
                href='/news'
                className='bg-transparent text-lg font-bold text-btn py-[16px] px-[30px] rounded-[8px] hover:duration-300 border border-btn hover:bg-btn hover:text-white '
              >
                <button>
                  See more news&#160;&#160;&#160;
                  <i className='fa-solid fa-arrow-right'></i>
                </button>
              </Link>
            </div>
          </div>
          <div className='lg:flex lg:space-x-5'>
            {Object.values(latestNews)
              .sort((a, b) => b.publish_date - a.publish_date)
              .slice(0, 3)
              .map((article) => {
                return <ArticleBlock key={article.id} article={article} />;
              })}
          </div>
        </div>
      </section>
      {/* <!-- Section 2 End  --> */}
      {/* <!-- Section 3 Start --> */}
      {/* <section id='Hone'>
        <div className='container mx-auto lg:px-0 lg:pb-24 md:pb-16 px-3 pt-4 pb-12 font-inter'>
          <div className='lg:pb-14 md:flex md:justify-between md:text-left text-center pb-16 '>
            <div className='relative'>
              <h4 className='md:pb-2 text-22 font-bold text-h2 leading-2'>
                Getting Started
              </h4>
              <h2 className='lg:text-[54px] md:text-5xl text-35 font-bold text-black leading-2'>
                Hone your skills
              </h2>
            </div>
            <div className='lg:mt-10 md:mt-8 max-w-full mt-10'>
              <a
                href='#'
                className='bg-transparent text-lg font-bold text-btn py-[16px] px-[30px] rounded-[8px] hover:duration-300 border border-btn hover:bg-btn hover:text-white '
              >
                <button>
                  See more news&#160;&#160;&#160;
                  <i className='fa-solid fa-arrow-right'></i>
                </button>
              </a>
            </div>
          </div>
          <div className='lg:flex lg:space-x-8'>
            <div className='lg:w-[45%]'>
              {data.length > 0 && (
                <article className='lg:text-left lg:pb-0 md:pb-20 text-center pb-14 relative ys-blog-2'>
                  <a href='#'>
                    <img
                      className='pb-4'
                      src={data[0].thumbnail_url}
                      alt='img'
                    />
                  </a>
                  <a href='#'>
                    <p className='lg:pb-1 text-15 font-medium text-para pb-2'>
                      {dateFormate(data[0].publish_date)}
                    </p>
                  </a>
                  <a href='#'>
                    <h3 className='lg:text-[27px] md:text-2xl text-22 font-bold text-black leading-2 pb-3'>
                      {data[0].title}
                    </h3>
                  </a>
                  <a href='#'>
                    <p className='text-15 font-medium text-para pb-10'>
                      by {data[0].authors.join(",")}
                    </p>
                  </a>
                  <a
                    href='#'
                    className='py-4 px-5 rounded-full bg-[#F2F2F2] text-black hover:text-white hover:bg-btn'
                  >
                    <i className='fa-solid fa-arrow-right'></i>
                  </a>
                  {data[0].content_tags.lenght > 0 && (
                    <a href='#'>
                      <p className='px-2 py-1 bg-white text-base font-bold text-black absolute top-4 left-4 hover:bg-btn hover:text-white'>
                        {data[0].content_tags.join(",")}
                      </p>
                    </a>
                  )}
                </article>
              )}
            </div>
            <div className='lg:w-[55%]'>
              {data.slice(1, 4).map((article) => {
                return (
                  <>
                    <article
                      key={article.id}
                      className='lg:pb-0 md:flex md:pb-10 text-center pb-14 relative ys-blog-2'
                    >
                      <div className='md:w-[48%] md:pb-0 pb-4'>
                        <a href='#'>
                          <img src={article.thumbnail_url} alt='img-4' />
                        </a>
                      </div>
                      <div className='md:w-[52%] md:text-left md:pl-8'>
                        <a href='#'>
                          <p className='lg:pb-1 text-15 font-medium text-para pb-2'>
                            {dateFormate(article.publish_date)}
                          </p>
                        </a>
                        <a href='#'>
                          <h3 className='md:text-2xl text-22 font-bold text-black leading-2 pb-3'>
                            {article.title}
                          </h3>
                        </a>
                        <a href='#'>
                          <p className='text-15 font-medium text-para  pb-10'>
                            by {article.authors.join(",")}
                          </p>
                        </a>
                        <a
                          href='#'
                          className='py-4 px-5 rounded-full bg-[#F2F2F2] text-black hover:text-white hover:bg-btn'
                        >
                          <i className='fa-solid fa-arrow-right'></i>
                        </a>
                        {article.content_tags.length > 0 && (
                          <a href='#'>
                            <p className='px-2 py-1 bg-white text-base font-bold text-black absolute top-4 left-4 hover:bg-btn hover:text-white'>
                              {article.content_tags.join(",")}
                            </p>
                          </a>
                        )}
                      </div>
                    </article>
                    <hr className='my-4 bg-[#E8ECF4] lg:block hidden' />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section> */}
      {/* <!-- Section 3 End --> */}
      {/* <!-- Section 4 Start --> */}
      {/* <section id='More'>
        <div className='container mx-auto lg:px-0 lg:pb-28 md:pb-14 px-3 pt-6 pb-12 font-inter'>
          <div className='lg:pb-14 md:flex md:justify-between md:text-left text-center pb-16 '>
            <div className='relative'>
              <h4 className='md:pb-2 text-22 font-bold text-h2 leading-2'>
                It isn't your paddle
              </h4>
              <h2 className='lg:text-[54px] md:text-5xl text-35 font-bold text-black leading-2'>
                More Resources
              </h2>
            </div>
            <div className='lg:mt-10 md:mt-8 max-w-full mt-10'>
              <a
                href='#'
                className='bg-transparent text-lg font-bold text-btn py-[16px] px-[30px] rounded-[8px] border hover:duration-300 border-btn hover:bg-btn hover:text-white '
              >
                <button>
                  See more resources&#160;&#160;&#160;
                  <i className='fa-solid fa-arrow-right'></i>
                </button>
              </a>
            </div>
          </div>
          <div className='lg:flex lg:space-x-8'>
            <div className='lg:w-[50%] flex flex-wrap'>
              {data.slice(1, 5).map((article) => {
                return (
                  <div className='md:w-1/2 grid-cols-6'>
                    <article className='text-center md:pb-0 pb-8 relative ys-blog'>
                      <a href='#'>
                        <img
                          className='pb-4'
                          src={article.thumbnail_url}
                          alt='img-6'
                        />
                      </a>
                      <div className='lg:text-left'>
                        <a href='#'>
                          <p className='lg:pb-1 text-15 font-medium text-para pb-2'>
                            {dateFormate(article.publish_date)}
                          </p>
                        </a>
                        <a href='#'>
                          <h3 className='md:text-2xl text-22 font-bold text-black leading-2 pb-3'>
                            {article.title}
                          </h3>
                        </a>
                        <a href='#'>
                          <p className='text-15 font-medium text-para'>
                            by {article.authors.join(",")}
                          </p>
                        </a>
                        {article.content_tags.length > 0 && (
                          <a href='#'>
                            <p className='px-2 py-1 bg-white text-base font-bold text-black absolute top-4 left-4 hover:bg-btn hover:text-white'>
                              {article.content_tags.join(",")}
                            </p>
                          </a>
                        )}
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>

            <div className='lg:w-[50%]'>
              {data.length > 0 && (
                <article
                  className='lg:text-left lg:px-6 lg:pt-[40em] lg:pb-14 md:pt-[35em] cursor-pointer md:pb-16 text-center pt-[18em] pb-6 px-2 relative ys-blog'
                  style={{
                    backgroundImage: `url(${data[0].thumbnail_url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <a href='#'>
                    <p className='lg:pb-1 text-15 font-medium text-white pb-2'>
                      {dateFormate(data[0].publish_date)}
                    </p>
                  </a>
                  <a href='#'>
                    <h3 className='lg:text-[27px] md:text-2xl text-22 font-bold text-white leading-2 pb-3'>
                      {data[0].title}
                    </h3>
                  </a>
                  <a href='#'>
                    <p className='text-15 font-medium text-white'>
                      {data[0].authors.join(",")}
                    </p>
                  </a>
                  {data[0].content_tags.lenght > 0 && (
                    <a href='#'>
                      <p className='px-2 py-1 bg-white text-base font-bold text-black absolute top-4 left-4 hover:bg-btn hover:text-white'>
                        {data[0].content_tags.join(",")}
                      </p>
                    </a>
                  )}
                </article>
              )}
            </div>
          </div>
        </div>
      </section> */}
      {/* <!-- Section 4 End --> */}
    </>
  );
}

export async function getServerSideProps() {
  const pubilicationData = await apiCall(
    "publications/pub_1c31b2d9-4a67-47a8-902e-ae6e00f86402/posts",
    "GET",
    20
  );
  return {
    props: pubilicationData, // will be passed to the page component as props
  };
}
