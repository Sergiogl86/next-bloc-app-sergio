import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";
import Link from "next/link";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/"># Home!</Link>
          </li>
          <li>
            <Link href="/create"># Create Post</Link>
          </li>
          <li>
            <Link href="/postlist"># Post List</Link>
          </li>
        </ul>
      </nav>
      <Component {...pageProps} />
    </>
  );
}
