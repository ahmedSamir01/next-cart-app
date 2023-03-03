import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h2>Thais page can not be found :(</h2>
      <p>
        Go back to the <Link href="/">Homepage</Link>
      </p>
    </div>
  );
};

export default NotFound;
