import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Form from "../components/Form/Form";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const [acces, setAcces] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("login")) {
      setAcces(true);
    } else {
      router.push("/");
    }
  }, [router]);
  return (
    <>
      {acces && (
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
        </>
      )}
      <Component {...pageProps} />
      {!acces && <Form />}
    </>
  );
}
