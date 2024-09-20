import { type NextRequest } from "next/server";
import { redirect } from "next/navigation";

export async function GET2(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const token = request.cookies.get("token");
  const requestHeaders = new Headers(request.headers);
  const slug = params.slug;
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  // query is "hello" for /api/search?query=hello
  redirect("/login");
}

export async function POST(request: Request) {
  const res = await request.json();
  return Response.json({ res });
}

export async function POST2(request: Request) {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  return Response.json({ name, email });
}

export async function GET_ALL(request: Request) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return Response.json(data);
}

const ITEMS_PER_PAGE = 4;
export async function fetchPosts(query: string, currentPage: number) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts?page=${currentPage}&itemsPerPage=${ITEMS_PER_PAGE}`
  );
  const data = await res.json();
  const posts = data.items.map((post) => ({
    ...post,
    url: "https://www.baidu.com",
    user_url: "https://www.bing.com",
    user_name: "baidu",
  }));
  return { posts, totalPages: Math.ceil(data.total / ITEMS_PER_PAGE) };
}


export async function fetchPostPolls(postId: number) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts/${postId}/polls`
  );
  const data = await res.json();
  return data;
}

// import { openai } from '@ai-sdk/openai'
// import { StreamingTextResponse, streamText } from 'ai'

// export async function POST(req: Request) {
//   const { messages } = await req.json()
//   const result = await streamText({
//     model: openai('gpt-4-turbo'),
//     messages,
//   })

//   return new StreamingTextResponse(result.toAIStream())
// }
