import apolloClient from "shared/apollo";
import { gql } from "@apollo/client";
import Link from "next/link";
import { formatDate } from "shared/libs/helpers";
import { Fragment } from "react";

const GET_LASTEST_ISSUES = gql`
  query GetLatestIssues {
    getLatestIssues {
      id
      createdAt
      updatedAt
      userId
      project {
        id
        name
        image
      }
      projectName
      title
      slug
      votes
      severity
      comments {
        id
      }
      user {
        image
        username
        id
      }
    }
  }
`;
function Home({ latestIssues = [] }) {
  console.log(latestIssues);
  return (
    <div className="mx-auto w-full max-w-7xl flex-grow  py-7 lg:flex xl:px-8">
      {/* <!-- Left sidebar & main wrapper --> */}

      <div className="rounded-lg border-l border-r bg-white lg:min-w-0 lg:flex-1">
        <div className="h-full">
          {/* <!-- Start main area--> */}
          <div className="flex h-14 w-full items-center justify-between border-b border-t pl-7 pr-5">
            <div className="flex  items-end justify-start text-sm">
              <h1 className=" text-xs font-normal leading-none">🙋 Title</h1>
              <span className="theme-text-muted mx-1 leading-none">-</span>
              <p className="max-w-2xl text-xs leading-none text-gray-400">
                Subtitle
              </p>
            </div>
            <div className="flex cursor-pointer items-center justify-between py-4 px-5 text-xs font-medium leading-6">
              <div className="flex items-center">
                <svg
                  className="mr-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
                <span>Sort By : Default</span>
              </div>
              <svg
                className="theme-text-muted group-hover:theme-text linear ml-1 h-3.5 w-3.5 transform stroke-current transition-all duration-300 group-hover:opacity-100"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          <div>
            <HomeIssueCard />
            <HomeIssueCard />
            <HomeIssueCard />
            <HomeIssueCard />
          </div>
        </div>
      </div>
    </div>
  );
}

// export async function getStaticProps({ params }) {
//   const { data } = await apolloClient.query({
//     query: GET_LASTEST_ISSUES,
//   });

//   return {
//     props: { latestIssues: data?.getLatestIssues },
//     revalidate: false,
//   };
// }

function HomeIssueCard() {
  return (
    <div className="ease relative col-span-8 flex cursor-pointer flex-col justify-between rounded-none border-b p-6 transition-shadow duration-500 hover:bg-slate-100 hover:bg-opacity-70 sm:p-8 xl:col-span-8">
      <div className="relative rounded-none p-0 sm:rounded-t-xl">
        <div className="flex">
          <div className="flex w-12 items-start space-x-3">
            <a href="keyur1" className="click-attached flex-shrink-0">
              <img
                className="h-8 w-8 rounded-full"
                src="https://cdn.devdojo.com/users/June2022/keyur1.jpg"
                alt=""
              />
            </a>
          </div>

          <div className="flex w-full flex-col justify-between">
            <div className="relative px-4 sm:px-0">
              <p className="theme-text-solid text-sm font-medium leading-none">
                <a
                  href="keyur1"
                  className="ignore-dynamic-click click-attached hover:underline"
                >
                  Username
                </a>
                <span className="text-xs text-gray-500"> · 4 days ago</span>
              </p>
              <h1 className="theme-text line-clamp-2 text-base font-medium leading-tight">
                How to put some title ina div
              </h1>
              <div className="theme-text line-clamp-2 mt-2 inline-block text-sm opacity-50 sm:text-sm">
                some data
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between rounded-none pt-4 sm:pl-11">
        <div>
          <HomeIssueCardBadge />
        </div>
        <div className="flex w-full items-center justify-end">
          <HomeIssueCardComment />
          <div>
            <div>
              <div className="reaction relative flex items-center justify-center">
                <div className="hover:theme-bg-softer theme-bg-soft theme-border border-light relative flex h-8 cursor-pointer items-center justify-between rounded-full border py-0 px-2">
                  <div>
                    <img
                      src="https://cdn.devdojo.com/images/emojis/icon.png"
                      className="h-6 w-auto py-1"
                    />
                  </div>
                  <div
                    className="absolute bottom-0 left-0 mb-5 mr-2 h-8 w-full bg-transparent"
                    style={{ display: "none" }}
                  ></div>
                  <div style={{ display: "none" }}>
                    <div className="trasnform absolute bottom-0 right-0 -translate-y-9 select-none">
                      <div className="theme-bg theme-border theme-shadow w-48 rounded-md px-3 py-2.5">
                        <div className="reactions no-load grid grid-cols-5">
                          <div className="hover:theme-bg-softer col-span-1 mb-1 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full">
                            <img
                              src="https://cdn.devdojo.com/images/emojis/like.png"
                              className="h-4 w-4"
                            />
                          </div>
                          <div className="hover:theme-bg-softer col-span-1 mb-1 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full">
                            <img
                              src="https://cdn.devdojo.com/images/emojis/love.png"
                              className="h-4 w-4"
                            />
                          </div>
                          <div className="hover:theme-bg-softer col-span-1 mb-1 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full">
                            <img
                              src="https://cdn.devdojo.com/images/emojis/raised_hands.png"
                              className="h-4 w-4"
                            />
                          </div>
                          <div className="hover:theme-bg-softer col-span-1 mb-1 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full">
                            <img
                              src="https://cdn.devdojo.com/images/emojis/clap.png"
                              className="h-4 w-4"
                            />
                          </div>
                          <div className="hover:theme-bg-softer col-span-1 mb-1 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full">
                            <img
                              src="https://cdn.devdojo.com/images/emojis/beer.png"
                              className="h-4 w-4"
                            />
                          </div>
                          <div className="hover:theme-bg-softer col-span-1 mb-1 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full">
                            <img
                              src="https://cdn.devdojo.com/images/emojis/beers.png"
                              className="h-4 w-4"
                            />
                          </div>
                          <div className="hover:theme-bg-softer col-span-1 mb-1 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full">
                            <img
                              src="https://cdn.devdojo.com/images/emojis/sushi.png"
                              className="h-4 w-4"
                            />
                          </div>
                          <div className="hover:theme-bg-softer col-span-1 mb-1 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full">
                            <img
                              src="https://cdn.devdojo.com/images/emojis/fire.png"
                              className="h-4 w-4"
                            />
                          </div>
                          <div className="hover:theme-bg-softer col-span-1 mb-1 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full">
                            <img
                              src="https://cdn.devdojo.com/images/emojis/unicorn.png"
                              className="h-4 w-4"
                            />
                          </div>
                          <div className="hover:theme-bg-softer col-span-1 mb-1 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full">
                            <img
                              src="https://cdn.devdojo.com/images/emojis/crystal_ball.png"
                              className="h-4 w-4"
                            />
                          </div>
                          <div className="hover:theme-bg-softer col-span-1 mb-1 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full">
                            <img
                              src="https://cdn.devdojo.com/images/emojis/popper.png"
                              className="h-4 w-4"
                            />
                          </div>
                          <div className="hover:theme-bg-softer col-span-1 mb-1 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full">
                            <img
                              src="https://cdn.devdojo.com/images/emojis/smile.png"
                              className="h-4 w-4"
                            />
                          </div>
                          <div className="hover:theme-bg-softer col-span-1 mb-1 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full">
                            <img
                              src="https://cdn.devdojo.com/images/emojis/thinker.png"
                              className="h-4 w-4"
                            />
                          </div>
                          <div className="hover:theme-bg-softer col-span-1 mb-1 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full">
                            <img
                              src="https://cdn.devdojo.com/images/emojis/joy.png"
                              className="h-4 w-4"
                            />
                          </div>
                          <div className="hover:theme-bg-softer col-span-1 mb-1 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full">
                            <img
                              src="https://cdn.devdojo.com/images/emojis/heart_eyes.png"
                              className="h-4 w-4"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ml-2">
            <div>
              <div className="bookmark relative flex items-center justify-center">
                <div className="hover:theme-bg-softer theme-text-muted theme-bg-soft theme-border border-light relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border px-3 py-1">
                  <svg
                    className="absolute w-3 fill-current"
                    viewBox="0 0 384 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 016-6h276c3.314 0 6 2.683 6 5.996V428.43z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HomeIssueCardComment() {
  return (
    <div className="theme-text theme-border border-light theme-bg-soft hover:theme-bg-softer mr-2 flex h-8 flex-shrink-0 items-center rounded-full border px-2 text-xs">
      <svg
        className="mr-1 h-5 w-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"></path>
        <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"></path>
      </svg>
      <span>5</span>
    </div>
  );
}

function HomeIssueCardBadge() {
  return (
    <div className="border-light mr-2 flex  h-8 flex-shrink-0 items-center rounded-full border px-2 text-xs uppercase hover:bg-slate-100">
      {/* <svg
        className="mr-1 h-5 w-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"></path>
        <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"></path>
      </svg> */}
      <span>Open</span>
    </div>
  );
}
export default Home;

// <div classNameNameNameNameName="relative pb-5 mx-auto mt-12 max-w-7xl sm:pb-0 px-4">
//   {latestIssues &&
//     latestIssues.map((issue) => (
//       <div
//         classNameNameNameNameName="w-full border-b border-gray-100 pb-4 mb-8"
//         key={issue.id}
//       >
//         <div classNameNameNameNameName="flex items-center">
//           <h1 classNameNameNameNameName="uppercase text-sm font-semibold text-gray-500 mr-2">
//             {issue.project.name}
//           </h1>
//           <Link
//             href={"/" + issue.project.name.toLowerCase() + "/" + issue.slug}
//           >
//             <a classNameNameNameNameName="text-blue-600 text-lg font-medium -mt-0.5">
//               {issue.title}
//             </a>
//           </Link>
//         </div>
//         <div classNameNameNameNameName="text-sm">
//           opened {formatDate(issue.createdAt, "before")} by{" "}
//           {issue.user.username}
//         </div>
//       </div>
//     ))}
// </div>
