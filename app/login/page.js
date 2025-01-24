"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";


export default function Component() {
  const { data: session } = useSession();
  
if(session)
{
  return <div className="flex flex-col items-center justify-center min-h-screen text-center gap-16">  <Image
  className="dark:invert"
  src="/checked.png"
  alt="Security"
  width={200}
  height={200}
  priority
/>
    You are successfully logged in.
    <Link href = "/dashboard"><button className=" bg-violet-300 border-2 ml-2 font-medium text-gray-700 hover:text-gray-900 p-2 rounded-md">Go to Dashboard</button></Link>
    
  </div>

}

  return (
   <>
   <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>
    <div className="flex flex-col items-center justify-center min-h-screen text-center gap-16">
      <div>
      <h1 className="font-bold text-3xl py-10 text-cyan-600">PassManager</h1>
      <p>Let me in you!</p>
      </div>
      {/* Security Image */}
      <div className="flex flex-col items-center justify-center">
      <Image
        className="dark:invert"
        src="/security.png"
        alt="Security"
        width={300}
        height={300}
        priority
      />

      {/* Sign In Button */}
      <div className="flex items-center w-fit border-2 p-2 mt-4 rounded-md">
        <Image
          className="dark:invert"
          src="/github.png"
          alt="GitHub"
          width={25}
          height={25}
          priority
        />
        <button
          onClick={() => signIn("github")}
          className="ml-2 font-medium text-gray-700 hover:text-gray-900"
        >
          Sign in with GitHub
        </button>
      </div>
      </div>
    </div>
  </>
  );
}

