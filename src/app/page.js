import Image from "next/image";
import PostForm from "./components/PostForm";
export default function Home() {
  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-2 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="flex flex-row text-3xl text-center font-bold">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5c5554d316b64061c6f8a20d/1630949829757-WXNOUZ8R4QQCXMIY4YMG/What-Is-The-Reddit-Logo-Called.png"
            alt="logo"
            width={35}
            height={35}
          />
          <p>Reddit</p>
        </div>
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          {/* ADD POST */}
          <PostForm />

          {/* DELETE POST
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 "
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Delete a Post
            </a> */}
        </main>
      </div>
    </>
  );
}
