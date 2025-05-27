const root = document.querySelector("#root");

const leftTrigger = document.querySelector(".left");
const rightTrigger = document.querySelector(".right");
const searchFiled = document.querySelector(".searchForm > input");

const BASE_URL = `https://jsonplaceholder.typicode.com`;

let postNumber = 1;

loadPosts(postNumber);

async function fetchPost(postId) {
  try {
    const response = await fetch(`${BASE_URL}/posts/${postId}`);
    if (!response.ok) {
      throw new Error(`Post with ID ${postId} not found`);
    }
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.log(error);
  }
}

function renderPost(id, title, body) {
  const idInfo = document.createElement("p");
  const titleInfo = document.createElement("p");
  const bodyInfo = document.createElement("p");
  const container = document.createElement("div");

  idInfo.textContent = `Post ID: ${id}`;
  titleInfo.textContent = title;
  bodyInfo.textContent = body;

  idInfo.classList.add("post_id");
  titleInfo.classList.add("subheader");
  container.classList.add("postContainer");

  container.style.textAlign = "start";

  container.append(idInfo, titleInfo, bodyInfo);
  root.append(container);
}

function renderPostError(options) {
  root.innerHTML = "";
  const noPosts = document.createElement("p");

  noPosts.textContent = options ? "no result :(" : "no more posts :(";

  noPosts.classList.add("no-posts");
  root.append(noPosts);
}

async function loadPosts(postId, searchOptions = null) {
  root.innerHTML = '<span class="loader"></span>';

  try {
    const postsData = await fetchPost(postId);

    if (postId && postsData) {
      root.innerHTML = "";

      renderPost(postsData.id, postsData.title, postsData.body);

      return true;
    }

    if (postId && !postsData) {
      renderPostError(searchOptions);
      return;
    }

    if (postsData) {
      root.innerHTML = "";

      const resultPostsData = postsData.reduce((acc, post) => {
        if (post.title.includes(searchOptions.query)) {
          renderPost(post.id, post.title, post.body);
          acc.push(post);
          return acc;
        }

        return acc;
      }, []);

      if (resultPostsData.length === 0) {
        renderPostError(searchOptions);
      }

      return true;
    }

    renderPostError();
  } catch (error) {
    console.log(error);
  }
}

leftTrigger.addEventListener("click", () => {
  rightTrigger.disabled = false;
  if (postNumber > 1) {
    postNumber--;
    loadPosts(postNumber);
  }
});

rightTrigger.addEventListener("click", async () => {
  rightTrigger.disabled = true;
  postNumber++;

  const success = await loadPosts(postNumber);

  if (success) {
    rightTrigger.disabled = false;
  }
});

searchFiled.addEventListener("input", (event) => {
  const value = event.target.value;

  if (value === "") return;

  if (value * 1) {
    loadPosts(value, { type: "id" });
    postNumber = value;
  } else {
    loadPosts("", { type: "word", query: value });
  }
});
