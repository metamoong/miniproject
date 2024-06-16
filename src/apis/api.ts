/* eslint-disable @typescript-eslint/no-empty-function */
export const createPosts = (data: { title: string; content: string }) => {
  console.log(data);
};
export const getPosts = async () => {
  return {
    data: [
      {
        id: "1",
        title: "제목1",
        content: "content1",
      },
      {
        id: "2",
        title: "제목2",
        content: "content2",
      },
      {
        id: "3",
        title: "제목3",
        content: "content3",
      },
      {
        id: "6",
        title: "제목4",
        content: "content4",
      },
      {
        id: "5",
        title: "제목5",
        content: "content5",
      },
      {
        id: "11",
        title: "제목11",
        content: "content11",
      },
      {
        id: "9",
        title: "제목7",
        content: "content7",
      },
      {
        id: "8",
        title: "제목8",
        content: "content8",
      },
      {
        id: "10",
        title: "제목10",
        content: "content10",
      },
    ],
  };
};
export const deletePosts = () => {};

export const getPostDetail = async (id: string) => {
  return {
    data: {
      id: id,
      title: `${id} 의 title`,
      content: `${id} 의 content`,
    },
  };
};
